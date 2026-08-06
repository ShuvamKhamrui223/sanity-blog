import { formatDate } from "@/lib/formatter";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";

interface CommentsListProps {
  comments: NonNullable<POST_BY_SLUG_QUERYResult>["comments"];
}
const CommentsList = ({ comments }: CommentsListProps) => {
  if (comments.length === 0) return <></>;
  return (
    <ul className="w-full max-w-5xl flex flex-col gap-8 py-10 ">
      {comments.map((comment) => (
        <li
          className="odd:bg-zinc-900 rounded-xl flex flex-col gap-2 px-6 py-5"
          key={comment._id}
        >
          <small className="space-x-4">
            <span className="text-lg font-medium capitalize">
              {comment.fullName}
            </span>
            <span className="text-zinc-400">
              {formatDate({ dateStr: comment._createdAt })}
            </span>
          </small>
          <p className="text-base">{comment.message}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
