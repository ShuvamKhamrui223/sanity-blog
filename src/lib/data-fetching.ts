import { sanityFetch } from "@/sanity/lib/live";
import {
  ALL_AUTHORS_QUERY,
  ALL_CATEGORIES_QUERY,
  ALL_POSTS_QUERY,
  AUTHOR_DETAILS_QUERY,
  POST_BY_CATEGORY_SLUG_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_BY_AUTHOR_SLUG_QUERY,
} from "@/sanity/lib/queries";
import {
  ALL_AUTHORS_QUERYResult,
  ALL_CATEGORIES_QUERYResult,
  ALL_POSTS_QUERYResult,
  AUTHOR_DETAILS_QUERYResult,
  POST_BY_CATEGORY_SLUG_QUERYResult,
  POST_BY_SLUG_QUERYResult,
  POSTS_BY_AUTHOR_SLUG_QUERYResult,
} from "@/sanity/types";

export async function getLatestPosts() {
  const { data: posts } = await sanityFetch({
    query: ALL_POSTS_QUERY,
  });

  return { data: posts as ALL_POSTS_QUERYResult };
}

export async function getPostBySlug(slug: string) {
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });
  return { data: post as POST_BY_SLUG_QUERYResult };
}

export async function getPostsByCategorySlug(categorySlug: string) {
  const { data: posts } = await sanityFetch({
    query: POST_BY_CATEGORY_SLUG_QUERY,
    params: { slug: categorySlug },
  });

  return { data: posts as POST_BY_CATEGORY_SLUG_QUERYResult };
}

export async function getPostsByAuthorSlug(authorSlug: string) {
  const { data: posts } = await sanityFetch({
    query: POSTS_BY_AUTHOR_SLUG_QUERY,
    params: { slug: authorSlug },
  });

  return {
    data: posts as POSTS_BY_AUTHOR_SLUG_QUERYResult,
  };
}

export async function getAuthorDetails(authorSlug: string) {
  const { data: info } = await sanityFetch({
    query: AUTHOR_DETAILS_QUERY,
    params: { slug: authorSlug },
  });

  return {
    data: info as AUTHOR_DETAILS_QUERYResult,
  };
}

export async function getAllCategories() {
  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  });

  return {
    data: categories as ALL_CATEGORIES_QUERYResult,
  };
}

export async function getAllAuthors() {
  const { data: authors } = await sanityFetch({
    query: ALL_AUTHORS_QUERY,
  });

  return {
    data: authors as ALL_AUTHORS_QUERYResult,
  };
}
