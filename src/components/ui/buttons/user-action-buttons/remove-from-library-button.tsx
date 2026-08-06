import { auth } from "@clerk/nextjs/server";
import PendingState from "./pending-state";
import { removeFromLibrary } from "@/actions/bookmark";

const RemoveFromLibraryButton = ({
  contentId,
}: {
  contentId: string;
}) => {

  return (
    <form action={removeFromLibrary}>
      <input type="hidden" name="postId" value={contentId} />
      <PendingState purpose="REMOVE" />
    </form>
  );
};

export default RemoveFromLibraryButton;
