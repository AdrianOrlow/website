import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export const toObjectWithStringTimeStamps = ({
  createdAt,
  updatedAt,
  ...object
}) => ({
  ...object,
  createdAt: createdAt.toISOString(),
  updatedAt: createdAt.toISOString(),
});

export default prisma;
