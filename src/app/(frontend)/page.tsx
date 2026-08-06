import CategoriesSlider from "@/components/ui/sections/categories-slider";
import LatestFeed from "@/components/ui/sections/latest-feed";
import TopWriters from "@/components/ui/sections/top-writers";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <LatestFeed />
      <Suspense fallback={"Loading categories"}>
        <CategoriesSlider />
      </Suspense>
      <Suspense fallback={<>Loading authors</>}>
        <TopWriters />
      </Suspense>
    </>
  );
}
