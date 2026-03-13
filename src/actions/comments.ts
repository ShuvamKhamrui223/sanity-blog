"use server";

import { client } from "@/sanity/lib/client";


export async function createComment(_previousState: unknown, formData: FormData) {
    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const postId = formData.get("postId") as string


    if (!fullName || !email || !message) {
        return { success: false, error: "please fill the fields" }
    }

    try {
        const clientWithToken = client.withConfig({
            useCdn: false,
            token: process.env.SANITY_STUDIO_TOKEN
        })
        const newComment = await clientWithToken.create({
            _type: "comment",
            post: {
                _type: 'reference',
                _ref: postId
            },
            fullName: fullName,
            email: email,
            message: message,
        })
        console.log(newComment)
    } catch (error) {
        console.log(error)

        return {
            success: false, error: "failed to submit your comment"
        }
    }
    return {
        success: true, error: "comment submitted, it will be visible once author approves"
    }
}