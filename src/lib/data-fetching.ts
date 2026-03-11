import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY, POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { ALL_POSTS_QUERYResult } from "@/sanity/types";

export async function getLatestPosts() {
    const { data: posts } = await sanityFetch({
        query: ALL_POSTS_QUERY,
    });

    return { data: posts as ALL_POSTS_QUERYResult }
}
