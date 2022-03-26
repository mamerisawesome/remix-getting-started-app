import { ActionFunction, Form, json, redirect, useActionData } from "remix";

import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { TextArea } from "~/components/TextArea";
import { createPost } from "~/models/post.server";
import { CreatePost } from "~/types/Post.type";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const newPost = {
    title: formData.get("title")?.toString() || "",
    slug: formData.get("slug")?.toString() || "",
    markdown: formData.get("markdown")?.toString() || "",
  };

  const errors: CreatePost = {
    markdown: newPost?.markdown ? null : "Markdown is required",
    slug: newPost?.slug ? null : "Slug is required",
    title: newPost?.title ? null : "Title is required",
  };

  const errorMessages = Object.values(errors).some((errorMessage) => errorMessage);

  if (errorMessages) {
    return json<CreatePost>(errors);
  }

  await createPost(newPost);

  return redirect("/posts/admin");
};

const NewPost = () => {
  const errors = useActionData();

  return (
    <Form method="post">
      <Input error={errors?.title} label="Post Title:" name="title" type="text" />
      <Input error={errors?.slug} label="Post Slug:" name="slug" type="text" />
      <TextArea error={errors?.markdown} label="Markdown:" name="markdown" rows={10} />
      <Button className="text-white bg-blue-800" type="submit">Create Post</Button>
    </Form>
  );
};

export default NewPost;
