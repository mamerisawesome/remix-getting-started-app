import { PrismaClient } from "@prisma/client";
import { seedNotes } from "./seeds/notes.seed";
import { seedposts } from "./seeds/posts.seed";
import { seedUser } from "./seeds/users.seed";

const prisma = new PrismaClient();

async function seed() {
  const email = "mamer@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const user = await seedUser(prisma);
  await seedNotes(prisma, user.id);
  await seedposts(prisma);

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
