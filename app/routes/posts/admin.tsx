import { json, Link, Outlet, useLoaderData } from "remix";

import { getPosts } from "~/models/post.server";
import { GetPosts } from "~/types/Post.type";

export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};

const Admin = () => {
  const { posts } = useLoaderData<GetPosts>();

  const postsDisplay = posts.map((post) => (
    <li key={post.slug}>
      <Link className="text-blue-600 underline" to={post.slug}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Blog Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {postsDisplay}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
