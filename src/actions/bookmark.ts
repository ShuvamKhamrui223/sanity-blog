"use server";

import { getPostBySlug } from "@/lib/data-fetching";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// do not return anything just revvalidate the path to update the library page after bookmarking an article
export async function addToLibrary(formData: FormData) {
  const articleId = formData.get("articleId") as string;
  const { data } = await getPostBySlug(articleId);
  const { userId } = await auth();

  if (!articleId) {
    return;
  }

  if (!userId) {
    return;
  }
  if (!data) {
    return;
  }
  try {
    await prisma.bookmark.create({
      data: {
        postId: data?._id,
        userId: userId,
        title: data?.title!,
        slug: data?.slug?.current!,
        imageUrl: data.mainImage?.asset?._ref,
        publishedAt: data.publishedAt!,
      },
    });
    revalidatePath("/library");
  } catch (error) {
    console.log(error);
  }
}

export async function removeFromLibrary(formData: FormData) {
  const { userId: ClerkUserID } = await auth();

  if (!ClerkUserID) {
    return;
  }
  // form values
  const postId = formData.get("postId") as string;

  if (!postId) {
    return;
  }

  try {
    await prisma.bookmark.delete({
      where: {
        userId_slug: {
          userId: ClerkUserID,
          slug: postId,
        },
      },
    });

    revalidatePath("/library");
  } catch (error) {
    console.log(error);
  }
}
export async function isArticleBookmarked(
  contentId: string,
  userId: string,
): Promise<{ status: Boolean }> {
  try {
    const exists = await prisma.bookmark.findFirst({
      where: {
        userId,
        slug: contentId,
      },
    });

    if (exists) {
      return { status: true };
    } else {
      return { status: false };
    }
  } catch (error) {
    return {
      status: false,
    };
  }
}
