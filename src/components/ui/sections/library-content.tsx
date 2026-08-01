const LibraryContent = () => {
  return (
    <div className="space-y-stack-md" id="library-container">
      {/* <!-- Saved Post 1 --> */}
      <article className="saved-post-item group relative flex flex-col md:flex-row gap-6 pb-stack-md border-b border-outline-variant">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2 text-label-ui font-label-ui text-secondary uppercase tracking-widest">
            <span>Philosophy</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              7 min read
              <span
                className="material-symbols-outlined text-[14px] text-tertiary" //style="font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
            </span>
          </div>
          <a
            className="block group-hover:text-primary transition-colors"
            href="#"
          >
            <h2>
              The Architecture of Silence: Finding Focus in the Noise
            </h2>
          </a>
          <p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4">
            How modern environments are designed to distract us, and why silence
            is becoming the ultimate luxury for deep cognitive work.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant text-body-sm italic">
                by Julian Vane
              </span>
              <span className="text-outline text-body-sm">•</span>
              <span className="text-on-surface-variant text-body-sm">
                Oct 12, 2024
              </span>
            </div>
            <button
              className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container/20 group/btn"
              title="Remove from Library"
            >
              <span className="material-symbols-outlined text-[20px]">
                bookmark_remove
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-32 h-24 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt="A minimalist architectural photograph of a stark, white modern concrete building against a clear, pale blue sky. The composition focuses on sharp geometric lines and the play of light and shadow, evoking a sense of calm and intellectual focus. The aesthetic is clean and high-end, perfectly matching the design system's tonal layering and minimalist philosophy."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0j5h9CC7GJE4Q4fjjbJ1AvngdVQmygJ3Ijn5M8Zff9IseAoOGLEKiFax0hWTkgwerAYQe0j2y-tJnFSni9fsU5KM7lckh9EK0CWDWpMDgK8aPhYLl9q2UnWUo-7vIFBkBkfOayfc531On9c0_KURAmBBOkhHhWR5ryhbl6UhW07l2hF5VPHYSVQ8c0Arc0h_c599DDRGua4mO8l__KS1DpJ_alZvDUdiL4a4wmZN4PF7xOcy1UCAAu2RpS_i8RmFIqX_uh9xdAlW"
          />
        </div>
      </article>
      {/* <!-- Saved Post 2 --> */}
      <article className="saved-post-item group relative flex flex-col md:flex-row gap-6 pb-stack-md border-b border-outline-variant">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2 text-label-ui font-label-ui text-secondary uppercase tracking-widest">
            <span>Literature</span>
            <span>•</span>
            <span className="flex items-center gap-1">12 min read</span>
          </div>
          <a
            className="block group-hover:text-primary transition-colors"
            href="#"
          >
            <h2>
              Unseen Ink: The Resurgence of Physical Letter Writing
            </h2>
          </a>
          <p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4">
            In an era of instant messaging, the slow art of pen and paper is
            making a quiet, powerful comeback among the creative elite.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant text-body-sm italic">
                by Sarah Chen
              </span>
              <span className="text-outline text-body-sm">•</span>
              <span className="text-on-surface-variant text-body-sm">
                Sep 28, 2024
              </span>
            </div>
            <button
              className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container/20 group/btn"
              title="Remove from Library"
            >
              <span className="material-symbols-outlined text-[20px]">
                bookmark_remove
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-32 h-24 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt="A high-contrast, close-up photograph of a vintage fountain pen resting on a piece of high-quality, textured cream-colored parchment paper. Soft morning light enters from the side, highlighting the metallic nib and the slight indentation of the paper. The scene is quiet, elegant, and sophisticated, reflecting the brand's emphasis on long-form, curated content."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAoJJNrVInCupteODtEnc8AtlQQsaU6Ja6w3e3LsKNrTYM4Ascy8y_j0QM7IZsl58erAOj1-rRAuNAN1Mq0ZNREFRdZCbhKhKSY2uEfbE8022O-BzqfI2QnyaFNe6lABbs2RXswUnBINPJH1zgYMnSphVbPwXcttU75eUpi7ypspZCj7VvYsPfQAhr1Vn-aNM1JXDyWhojkZ0AHN35yubtNgm_opS65yZ9OybAI0trTvbU7iSO4ebsTtQH5UijQXxfR7Gfhq070iz"
          />
        </div>
      </article>
      {/* <!-- Saved Post 3 --> */}
      <article className="saved-post-item group relative flex flex-col md:flex-row gap-6 pb-stack-md border-b border-outline-variant">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2 text-label-ui font-label-ui text-secondary uppercase tracking-widest">
            <span>Technology</span>
            <span>•</span>
            <span className="flex items-center gap-1">5 min read</span>
          </div>
          <a
            className="block group-hover:text-primary transition-colors"
            href="#"
          >
            <h2>
              The Soul in the Machine: Why AI Still Struggles with Sarcasm
            </h2>
          </a>
          <p className="text-on-surface-variant font-body-sm line-clamp-2 mb-4">
            Exploring the subtle nuances of human linguistic irony that remain a
            barrier for even the most advanced neural networks.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant text-body-sm italic">
                by Mark Sterling
              </span>
              <span className="text-outline text-body-sm">•</span>
              <span className="text-on-surface-variant text-body-sm">
                Aug 15, 2024
              </span>
            </div>
            <button
              className="p-2 text-outline hover:text-error transition-colors rounded-full hover:bg-error-container/20 group/btn"
              title="Remove from Library"
            >
              <span className="material-symbols-outlined text-[20px]">
                bookmark_remove
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-32 h-24 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt="A sophisticated digital abstract illustration representing neural connections. The art uses thin, glowing indigo lines against a deep charcoal background, creating a sense of complex technology. The lighting is low-key and atmospheric, with soft glows at the intersections of the lines, maintaining a calm and intellectual mood for a tech-focused article."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgQHtSwBNO-RufWxLP9H7IfUR9RJFmTjpQSEvtW2etBQ2CxaGG1dSPkwfTJQcFX9xQKpix1oBe0qziBVxLpohC5z6ToqAzd_qeKQ6Kw9HnlgKkapsOWybxks9cNLkOMSRFVUq-oL6Nv7qoaHVa2TLGl7YWEsayKlUrpgZQMFfQkCcL2TTiqgcCakccaHEHGY60a3iptJjGF6TpVeLJ5h5VdqDarp852in324E6haKH-xPJ2DH5rkzJ2e5wsvLfvOWNOfjzl1Vylbqg"
          />
        </div>
      </article>
    </div>
  );
};

export default LibraryContent;
