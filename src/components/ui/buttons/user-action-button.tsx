import { isArticleBookmarked } from "@/actions/bookmark";
import { auth } from "@clerk/nextjs/server";
import RemoveFromLibraryButton from "./user-action-buttons/remove-from-library-button";
import AddToLibraryButton from "./user-action-buttons/add-to-library-button";
import { ALL_POSTS_QUERYResult } from "@/sanity/types";

const UserActionButton = async ({
  slug,
}: {
  slug: ALL_POSTS_QUERYResult[0]["slug"];
}) => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const { status } = await isArticleBookmarked(slug?.toString()!, userId);

  if (status) {
    return <RemoveFromLibraryButton contentId={slug?.toString()!} />;
  } else {
    return <AddToLibraryButton slug={slug} />;
  }
};

export default UserActionButton;
