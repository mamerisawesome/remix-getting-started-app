import { PrismaClient } from "@prisma/client";

const posts = [
  {
    slug: "my-first-post",
    title: "My first post",
    markdown: `
      # This is the first post

      Planning to add more in the future.
    `.trim(),
  },
  {
    slug: "testing-remix",
    title: "Seeing What the Fuss is with Remix",
    markdown: `
      # Thoughts on Remix

      I think Remix is cool.

      A bit too abstracted for my taste.
    `.trim(),
  },
];

export const seedposts = async (client: PrismaClient) => {
  const promises = posts.map(async (post) => {
    await client.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  });

  await Promise.all(promises);
};
