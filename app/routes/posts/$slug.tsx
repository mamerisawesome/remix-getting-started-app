import { useRemarkSync } from "react-remark";
import { json, LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/models/post.server";
import type { Post } from "~/models/post.server";
import { GenericLoaderData } from "~/types/Loader.type";
import { useMemo } from "react";
import { LinkButton } from "~/components/LinkButton";

type LoaderData = GenericLoaderData<"post", Post>;

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found with slug "${params.slug}"`);

  return json<LoaderData>({ post });
};

const PostSlug = () => {
  const { post } = useLoaderData<LoaderData>();

  const markdown = useMemo(() => {
    return useRemarkSync(post.markdown);
  }, [post]);

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post.title}
      </h1>
      <div>
        {markdown}
      </div>
      <LinkButton to="/posts">Back to home</LinkButton>
    </main>
  );
};

export default PostSlug;
