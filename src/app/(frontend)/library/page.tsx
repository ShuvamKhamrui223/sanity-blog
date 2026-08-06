import EmptyLibrary from "@/components/ui/sections/empty-library";
import LibraryContent from "@/components/ui/sections/library-content";
import SavedHeader from "@/components/ui/sections/saved-header";
import { getBookmarkedArticlesByUserId } from "@/lib/prisma.db.wrapper";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { articles, error } = await getBookmarkedArticlesByUserId(
    userId as string,
  );
  if (error === "No article found") {
    return (
      <>
        <EmptyLibrary />
      </>
    );
  }
  if (error) {
    return (
      <>
        <p className="">{error}</p>
      </>
    );
  }
  return (
    <>
      <SavedHeader />
      <Suspense>
        <LibraryContent libraryItems={articles} />
      </Suspense>
    </>
  );
};

export default page;
