import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <section className="flex items-center justify-center min-h-svh">
      <SignIn />
    </section>
  );
};

export default page;
