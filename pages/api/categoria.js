import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {

  const categoria = await prisma.categoria.findMany({
    include: {
      productos: true,
    },
  });

  res.status(200).json(categoria)
}
