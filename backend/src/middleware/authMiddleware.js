const jwt = require("jsonwebtoken");
const prisma = require("../config/db");
const config = require("../config/env");
const ApiError = require("../utils/ApiError");

async function protect(req, res, next) {
  const authorization = req.headers.authorization;
  const token =
    authorization && authorization.startsWith("Bearer ")
      ? authorization.split(" ")[1]
      : null;

  if (!token) {
    return next(new ApiError(401, "Not authorized"));
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return next(new ApiError(401, "Not authorized"));
    }

    req.user = user;
    return next();
  } catch (error) {
    return next(new ApiError(401, "Not authorized"));
  }
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ApiError(403, "Forbidden"));
    }

    return next();
  };
}

module.exports = { protect, requireRole };
