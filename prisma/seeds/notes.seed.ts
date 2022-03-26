import { PrismaClient } from "@prisma/client";

const notes = [
  {
    title: "My first note",
    body: "Hello, world!",
  },
  {
    title: "My second note",
    body: "Hello, world!",
  },
];

export const seedNotes = async (client: PrismaClient, userId: string) => {
  const promises = notes.map(async (note) => {
    await client.note.create({
      data: { ...note, userId },
    });
  });

  await Promise.all(promises);
};
