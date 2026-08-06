const InteractionBar = () => {
  return (
    <div className="flex items-center justify-between py-8 mt-4 border-b border-outline-variant/30">
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
          <span className="material-symbols-outlined group-active:scale-125 transition-transform">
            favorite
          </span>
          <span className="font-label-ui text-label-ui">1.2k</span>
        </button>
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">mode_comment</span>
          <span className="font-label-ui text-label-ui">84</span>
        </button>
      </div>
      <div className="flex items-center gap-4 text-on-surface-variant">
        <button className="hover:text-primary transition-colors">
          <span className="material-symbols-outlined">share</span>
        </button>
        <button className="hover:text-primary transition-colors">
          <span className="material-symbols-outlined">bookmark</span>
        </button>
      </div>
    </div>
  );
};

export default InteractionBar;
