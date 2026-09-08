const { z } = require("zod");

const createPropertySchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  price: z.coerce.number().positive(),
  status: z.enum(["SALE", "RENT"]),
  type: z.enum(["APARTMENT", "HOUSE", "VILLA", "LAND"]),
  city: z.string().trim().min(1),
  bedrooms: z.coerce.number().int().nonnegative(),
  bathrooms: z.coerce.number().int().nonnegative(),
  image: z.string().url(),
});

module.exports = { createPropertySchema };
