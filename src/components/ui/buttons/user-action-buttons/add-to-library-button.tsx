import { ALL_POSTS_QUERYResult } from "@/sanity/types";
import PendingState from "./pending-state";
import { addToLibrary } from "@/actions/bookmark";

const AddToLibraryButton = ({
  slug,
}: {
  slug: ALL_POSTS_QUERYResult[0]["slug"];
}) => {
  return (
    <form action={addToLibrary}>
      <input type="hidden" name="articleId" value={slug?.toString()} />

      <PendingState purpose="ADD" />
    </form>
  );
};

export default AddToLibraryButton;
