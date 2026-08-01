import { getAllCategories } from "@/lib/data-fetching";
import Link from "next/link";

const CategoriesSlider = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <section className="tonal-layer-1 py-12 app-container">
        <h2>
          Explore by Category
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat) => (
            <Link key={cat.slug?.current} href={`/category/${cat.slug?.current}`} className="shrink-0 bg-white border border-outline-variant p-6 flex flex-col justify-between hover:border-primary transition-all cursor-pointer group">
              <span className="font-label-ui text-label-ui font-bold">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
    </section>
  );
};

export default CategoriesSlider;
