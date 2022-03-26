import { LinkButton } from "~/components/LinkButton";

const Admin = () => {
  return (
    <p>
      <LinkButton className="bg-blue-600 text-white" to="new">
        Create New Post
      </LinkButton>
    </p>
  );
};

export default Admin;
