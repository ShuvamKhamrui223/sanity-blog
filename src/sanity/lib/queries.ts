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
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
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
  }}`);
