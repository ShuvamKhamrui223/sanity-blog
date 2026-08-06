import CategoriesSlider from "@/components/ui/sections/categories-slider";

const ArticleNotFound = () => {
  return (
    <section className="gutter-space">
      <h1>Author Not Found</h1>
      <p>The author you are looking for does not exist.</p>

      <CategoriesSlider />
    </section>
  );
};

export default ArticleNotFound;
