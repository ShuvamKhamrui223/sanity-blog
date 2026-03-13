"use client";
import { createComment } from "@/actions/comments";
import Form from "next/form";
import { useActionState } from "react";
const CommentForm = ({ postId }: { postId: string }) => {
  const [state, action, isPending] = useActionState(createComment, null);

  if(state?.success){
    return (
      <>
        <div className="flex flex-col gap-4 bg-yellow-600 py-10 px-5 max-w-xl mx-auto w-full">
          <h3 className="text-3xl font-bold first-letter:uppercase">your comment has been submitted</h3>
          <p className="">
            It will arrive in the comments below after the author approves
          </p>
        </div>
      </>
    );
  }
  return (
    <Form
      action={action}
      className="flex flex-col gap-6 max-w-xl mx-auto w-full"
    >
      <p className="text-2xl first-letter:capitalize font-semibold">
        leave a message
      </p>
      {!state?.success ? (
        <small className="text-red-500 text-base first-letter:uppercase">
          {state?.error}
        </small>
      ) : null}
      <input type="hidden" name="postId" value={postId} />
      <div className="">
        <label htmlFor="message" className="block mb-2.5 text-sm font-medium">
          Your email address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="border text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs rounded-lg"
        />
      </div>
      <div className="">
        <label htmlFor="message" className="block mb-2.5 text-sm font-medium">
          Your full name
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your name"
          className="border text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs rounded-lg"
        />
      </div>
      <div className="">
        <label htmlFor="message" className="block mb-2.5 text-sm font-medium">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="border text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs rounded-lg"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-lg capitalize bg-yellow-600 active:scale-95 transition-transform duration-100 px-4 py-2 rounded-lg cursor-pointer disabled:bg-yellow-900"
        disabled={isPending}
      >
        {isPending ? (
          <div className="size-5 border-t-2 border-yellow-50 rounded-full mx-auto animate-spin"></div>
        ) : (
          "send"
        )}
      </button>
    </Form>
  );
};

export default CommentForm;
