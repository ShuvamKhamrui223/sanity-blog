
const NewsletterForm = () => {
  return (
    <section className="tonal-layer-1 py-stack-lg border-y border-outline-variant">
      <div className="max-w-content-max-width mx-auto px-page-margin text-center">
        <h2 className="font-display-article text-[32px] mb-4">
          Depth delivered weekly.
        </h2>
        <p className="font-body-sm text-on-surface-variant mb-8">
          Join 40,000+ readers who receive our curated selection of the week&apos;s
          most profound long-form stories.
        </p>
        <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
          <input
            className="flex-1 border-b border-outline bg-transparent px-4 py-3 focus:outline-none focus:border-primary font-body-sm"
            placeholder="Your email address"
            type="email"
          />
          <button className="bg-primary text-on-primary px-8 py-3 font-label-ui text-label-ui hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </form>
        <p className="font-body-sm text-[11px] text-on-surface-variant mt-4">
          Zero spam. Only the good stuff. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default NewsletterForm