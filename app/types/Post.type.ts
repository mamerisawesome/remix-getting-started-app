import { Post } from "@prisma/client";

export type CreatePost = {
  markdown: string | null;
  slug: string | null;
  title: string | null;
} | undefined;

export type GetPosts = {
  posts: Awaited<Post[]>,
};
