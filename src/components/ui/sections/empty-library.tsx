
const EmptyLibrary = () => {
  return (
    <div
      className="py-stack-lg flex flex-col items-center text-center animate-fade-in"
      id="empty-state"
    >
      <div className="mb-stack-md text-primary/20">
        <span
          className="material-symbols-outlined text-[120px]"
        //   style="font-variation-settings: 'wght' 100;"
        >
          auto_stories
        </span>
      </div>
      <h2 className="font-display-article text-display-article-mobile text-on-surface mb-stack-sm">
        Your shelf is empty
      </h2>
      <p className="text-on-surface-variant max-w-sm mx-auto mb-stack-md font-body-sm">
        You haven&apos;t saved any stories yet. Explore the latest journals and
        bookmark them to read later at your leisure.
      </p>
      <a
        className="inline-flex items-center px-6 py-3 bg-primary text-on-primary font-label-ui text-label-ui rounded-full hover:shadow-lg transition-all active:scale-95"
        href="#"
      >
        Browse Latest Stories
      </a>
    </div>
  );
}

export default EmptyLibrary