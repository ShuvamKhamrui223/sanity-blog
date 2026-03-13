import { defineQuery } from "next-sanity";

export const ALL_POSTS_QUERY = defineQuery(`*[_type == "post"] | order(_publishedAt desc)[0...8]{
   _id,
   title,
   slug,
   mainImage,
   author -> {
     name,
     image,
     slug
   },
  categories[] -> {
    title,
    slug
  }
}`);

export const POST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug && defined(mainImage)][0]{
 _id,
title,
slug,
mainImage{
  asset ->
},
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

export const POSTS_BY_CATEGORY_QUERY = defineQuery(`*[
  _type == "post" && $categoryId in categories
]`)