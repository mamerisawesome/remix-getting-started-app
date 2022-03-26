import { json, Link, useLoaderData } from "remix";
import { LinkButton } from "~/components/LinkButton";

import { getPosts } from "~/models/post.server";
import { GetPosts } from "~/types/Post.type";

export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};

const Posts = () => {
  const { posts } = useLoaderData<GetPosts>();

  const postsDisplay = posts.map((post) => (
    <li key={post.slug}>
      <Link className="text-blue-600 underline" to={post.slug}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Posts
      </h1>
      <LinkButton to="admin" className="text-red-600 underline">
        Admin
      </LinkButton>
      <ul>
        {postsDisplay}
      </ul>
    </main>
  );
};

export default Posts;
