const prisma = require("../config/db");
const { z } = require("zod");
const asyncHandler = require("../utils/asyncHandler");

const contactMessageSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1),
});

async function createContactMessage(req, res) {
  const input = contactMessageSchema.parse(req.body);
  await prisma.contactMessage.create({ data: input });
  return res.status(201).json({ message: "Message received" });
}

async function getContactMessages(req, res) {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
  return res.json(messages);
}

module.exports = {
  createContactMessage,
  getContactMessages,
};
