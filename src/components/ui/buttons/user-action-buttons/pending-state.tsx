"use client";
import { Bookmark, BookmarkAddOutlined } from "@mui/icons-material";
import { useFormStatus } from "react-dom";
const PendingState = ({ purpose }: { purpose: "ADD" | "REMOVE" }) => {
  const { pending } = useFormStatus();

  const IconForPurpose = purpose === "ADD" ? BookmarkAddOutlined : Bookmark;

  return (
    <button
      className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer"
      type="submit"
    >
      {pending ? (
        <div className="size-6 border-t-4 border-amber-500 rounded-full animate-spin duration-1000- ease-in"></div>
      ) : (
        <IconForPurpose />
      )}
    </button>
  );
};

export default PendingState;
