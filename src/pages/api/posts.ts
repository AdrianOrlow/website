import { Language } from '@prisma/client';
import prisma from '@services/prisma';

interface GETQuery {
  lang: string;
  type: string;
  take: string;
  skip: string;
}

const handler = async (req, res) => {
  const { method } = req;

  if (req.method !== 'GET') {
    return;
  }

  const methods = {
    GET: async () => {
      const query: GETQuery = req.query;
      const { take, skip, lang, type } = query;

      const data = await prisma.page.findMany({
        where: {
          lang: lang.toUpperCase() as Language,
          type,
        },
        take: parseInt(take, 10),
        skip: parseInt(skip, 10),
      });

      res.status(200).json(data);
    },
    default: async () => {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
    },
  };

  await (methods[method] || methods.default)();
};

export default handler;
