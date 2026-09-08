const { ZodError } = require("zod");
const ApiError = require("../utils/ApiError");

function errorMiddleware(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation error",
      errors: err.flatten(),
    });
  }

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal server error" });
}

module.exports = errorMiddleware;
