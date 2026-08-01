const SavedHeader = () => {
  return (
    <header className="mb-stack-lg border-b border-outline-variant pb-stack-sm flex justify-between items-end">
      <div>
        <h1 className="font-display-article text-display-article text-on-surface">
          Library
        </h1>
        <p className="text-on-surface-variant mt-2 font-body-sm">
          Your saved stories and bookmarks for later reading.
        </p>
      </div>
      <div className="flex gap-2 mb-1">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-label-ui font-label-ui transition-colors">
          <span className="material-symbols-outlined text-[18px]">sort</span>
          Recent
        </button>
      </div>
    </header>
  );
};

export default SavedHeader;
