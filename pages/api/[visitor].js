import prisma from './prisma.ts';

export default async function handler(req, res) {
    const {visitor} = req.query
    if (req.method === 'POST') {
        const updatedCount = await prisma.visitor.update({
          where: { id: 1 },
          data: { [visitor]: { increment: 1 } }
        });
        res.json(updatedCount);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}