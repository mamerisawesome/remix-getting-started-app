import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export { Post };

export const getPosts = async () => {
  return prisma.post.findMany();
};

export const getPost = async (slug: string) => {
  return prisma.post.findUnique({ where: { slug } });
};

export const createPost = async (post: Pick<Post, "markdown" | "slug" | "title">) => {
  return prisma.post.create({ data: post });
};
