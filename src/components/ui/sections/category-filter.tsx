const CategoryFilter = () => {
  return (
    <section className="max-w-7xl mx-auto px-page-margin mb-12 border-y border-outline-variant py-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
        <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface font-label-ui text-label-ui whitespace-nowrap">
          All Stories
        </button>
        <button className="px-4 py-2 rounded-full hover:bg-surface-container text-on-surface-variant font-label-ui text-label-ui whitespace-nowrap">
          AI &amp; Ethics
        </button>
        <button className="px-4 py-2 rounded-full hover:bg-surface-container text-on-surface-variant font-label-ui text-label-ui whitespace-nowrap">
          Hardware
        </button>
        <button className="px-4 py-2 rounded-full hover:bg-surface-container text-on-surface-variant font-label-ui text-label-ui whitespace-nowrap">
          Futures
        </button>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto justify-end">
        <span className="font-label-ui text-label-ui text-on-surface-variant">
          Sort by:
        </span>
        <select className="bg-transparent border-none font-label-ui text-label-ui text-on-surface focus:ring-0 cursor-pointer">
          <option>Latest</option>
          <option>Popular</option>
          <option>Top rated</option>
        </select>
      </div>
    </section>
  );
};

export default CategoryFilter;
