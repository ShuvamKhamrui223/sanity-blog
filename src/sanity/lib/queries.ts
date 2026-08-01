import { defineQuery } from "next-sanity";

export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc){
  title,
  "slug":slug.current,
    mainImage,
    publishedAt,
    categories[] ->{
      title,
      slug
    }
}
  `);

export const POST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug && defined(mainImage)][0]{
 _id,
title,
slug,
mainImage,
body,
publishedAt,
   author -> {
     name,
     image,
     slug
   },
  categories[] -> {
    title,
    slug
  },
  "comments": *[_type == "comment" && post._ref ==^._id && approved == true]{
    _id,
    _createdAt,
    fullName,
    message,

  }
  }`);

export const ALL_AUTHORS_QUERY = defineQuery(`*[_type== "author"]{
  "slug": slug.current,
    name,
    bio,
    "thumbnailUrl":image
}`);

export const ALL_CATEGORIES_QUERY = defineQuery(`*[_type== "category"]{
 title,slug 
}`);

export const POST_BY_CATEGORY_SLUG_QUERY = defineQuery(`
  *[_type == "post"
   && references(*[_type == "category" && slug.current == $slug][0]._id)]
   | order(publishedAt desc)`);

export const POSTS_BY_AUTHOR_SLUG_QUERY = defineQuery(`
  *[_type == "post"
   && references(*[_type == "author" && slug.current == $slug][0]._id)]
   | order(publishedAt desc)`);


export const AUTHOR_DETAILS_QUERY = defineQuery(`
*[_type == "author" && slug.current == $slug][0]{
  name, 
  "slug": slug.current,
  coverImage,
  profilePicture,
  bio,
  tagline,
}
  `);