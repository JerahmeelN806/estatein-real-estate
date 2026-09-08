const dotenv = require("dotenv");

dotenv.config();

const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET", "JWT_EXPIRES_IN"];
const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`,
  );
  process.exit(1);
}

const config = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  port: Number(process.env.PORT) || 5050,
};

module.exports = config;
