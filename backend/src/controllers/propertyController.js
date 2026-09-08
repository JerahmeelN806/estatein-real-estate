const prisma = require("../config/db");
const ApiError = require("../utils/ApiError");
const { createPropertySchema } = require("../validators/propertyValidator");

function addStringFilter(where, query, key) {
  if (typeof query[key] === "string" && query[key].trim()) {
    where[key] = query[key].trim();
  }
}

function addIntegerFilter(where, query, key) {
  if (query[key] !== undefined) {
    const value = Number(query[key]);
    if (!Number.isInteger(value) || value < 0) {
      throw new ApiError(400, `Invalid ${key} filter`);
    }
    where[key] = value;
  }
}

function addFloatFilter(where, query, key, operator) {
  if (query[key] !== undefined) {
    const value = Number(query[key]);
    if (!Number.isFinite(value) || value < 0) {
      throw new ApiError(400, `Invalid ${key} filter`);
    }
    where.price = { ...(where.price || {}), [operator]: value };
  }
}

async function getProperties(req, res) {
  const where = {};

  addStringFilter(where, req.query, "city");
  addStringFilter(where, req.query, "status");
  addStringFilter(where, req.query, "type");
  addIntegerFilter(where, req.query, "bedrooms");
  addIntegerFilter(where, req.query, "bathrooms");
  addFloatFilter(where, req.query, "minPrice", "gte");
  addFloatFilter(where, req.query, "maxPrice", "lte");

  const properties = await prisma.property.findMany({
    where,
    include: {
      agent: { select: { id: true, name: true, email: true, avatarUrl: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return res.json(properties);
}

async function getPropertyById(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    throw new ApiError(404, "Property not found");
  }

  const property = await prisma.property.findUnique({
    where: { id },
    include: {
      agent: { select: { id: true, name: true, email: true, avatarUrl: true } },
    },
  });

  if (!property) {
    throw new ApiError(404, "Property not found");
  }

  return res.json(property);
}

async function createProperty(req, res) {
  const input = createPropertySchema.parse(req.body);
  const property = await prisma.property.create({
    data: { ...input, agentId: req.user.id },
  });

  return res.status(201).json(property);
}

module.exports = { getProperties, getPropertyById, createProperty };
