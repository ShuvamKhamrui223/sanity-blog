"use client";
const error = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <section className="min-h-svh flex flex-col items-center justify-center">
      <h1>Something went wrong!</h1>
      <p>{error.message == "fetch failed" && "No internet connection"}</p>
    </section>
  );
};

export default error;
