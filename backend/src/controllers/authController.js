const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { Prisma } = require("@prisma/client");
const prisma = require("../config/db");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken");
const {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} = require("../validators/authValidator");

const publicUserSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  avatarUrl: true,
  createdAt: true,
  updatedAt: true,
};

async function register(req, res) {
  const input = registerSchema.parse(req.body);
  const email = input.email.toLowerCase();
  const password = await bcrypt.hash(input.password, 12);

  try {
    const user = await prisma.user.create({
      data: { name: input.name, email, password },
      select: publicUserSelect,
    });

    return res.status(201).json({ user });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ApiError(400, "User already exists");
    }

    throw error;
  }
}

async function login(req, res) {
  const input = loginSchema.parse(req.body);
  const email = input.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(input.password, user.password))) {
    throw new ApiError(401, "Invalid email or password");
  }

  const publicUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: publicUserSelect,
  });

  return res.json({ token: generateToken(user.id), user: publicUser });
}

async function forgotPassword(req, res) {
  const { email: rawEmail } = forgotPasswordSchema.parse(req.body);
  const email = rawEmail.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const resetTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: { resetTokenHash, resetTokenExpiresAt },
    });

    console.log(
      `Password reset link for ${email}: http://localhost:5174/reset-password?token=${resetToken}`,
    );
  }

  return res.json({ message: "If that email exists, a reset link was sent." });
}

async function resetPassword(req, res) {
  const { token, password } = resetPasswordSchema.parse({
    token: req.body.token || req.query.token,
    password: req.body.password,
  });
  const resetTokenHash = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await prisma.user.findFirst({
    where: {
      resetTokenHash,
      resetTokenExpiresAt: { gt: new Date() },
    },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired reset link");
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: await bcrypt.hash(password, 12),
      resetTokenHash: null,
      resetTokenExpiresAt: null,
    },
  });

  return res.json({ message: "Password reset successfully" });
}

module.exports = { register, login, forgotPassword, resetPassword };
