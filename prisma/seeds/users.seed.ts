import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const DEFAULT_EMAIL = "mamer@remix.run";

export const seedUser = async (client: PrismaClient) => {
  const hashedPassword = await bcrypt.hash("mameriscool", 10);

  return client.user.create({
    data: {
      email: DEFAULT_EMAIL,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
};
