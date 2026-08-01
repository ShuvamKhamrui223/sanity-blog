const SubscriptionOnlyOverlay = () => {
  return (
    <div className="relative mt-stack-lg rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low p-8 text-center">
      <div className="absolute inset-0 article-gradient -z-10 h-32 -top-32"></div>
      <span
        className="material-symbols-outlined text-tertiary text-4xl mb-4"
        // style="font-variation-settings: 'FILL' 1;"
      >
        lock
      </span>
      <h3 className="font-headline-section text-headline-section mb-2">
        Read the full story with a subscription
      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 max-w-md mx-auto">
        Elena&apos;s deep dive into the neurological impact of minimalism
        continues. Join The Journal to access this and thousands of other
        curated narratives.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-ui text-label-ui hover:bg-primary-container transition-colors shadow-sm">
          Start 7-Day Free Trial
        </button>
        <button className="border border-outline text-on-surface px-8 py-3 rounded-full font-label-ui text-label-ui hover:bg-surface-container-high transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SubscriptionOnlyOverlay;
