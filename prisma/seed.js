const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.visitor.update({
    where: { id: 1 },
    data: { 
      new: 0,
      old: 0
     }
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())