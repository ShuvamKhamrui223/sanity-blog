const hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-page-margin py-stack-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A panoramic, cinematic shot of a vast digital landscape where floating data shards form a translucent mountain range against a twilight sky of deep indigo and soft amber. The lighting is ethereal, casting long shadows and creating a sense of immense scale and technological wonder. Minimalist, premium aesthetic with sharp focus on the crystalline textures."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUJmPGRfkaP3bLR2E4oEpC6pO2NDnz-pCxiEHa1lO2LXyZjlGEHDVduQHPpbvXH5umLYUrDQVvh85w-Bs4cKYH3wmUwwKBsDhgVR-itEskO9A_cpthm-_Qb6vmZreRKZ2Cwc4ZutNsWBGvx_GEyaAUL5AJUcgg1JEavvGBmLdq-mw7l_7la64foyx_SUGvcgAs8Y5OT0ZykNEwnhYgMM_jUseJ0_eiQ5v2Z29b6LClIXiXRySZ29k4j0oOVucvNjzn02j77onmJMzX"
            />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center space-y-stack-md">
          <div className="flex items-center gap-2 font-label-ui text-label-ui text-tertiary">
            <span className="uppercase tracking-widest">Technology</span>
            <span>•</span>
            <span>12 min read</span>
            <span className="flex items-center gap-1 text-tertiary">
              <span
                className="material-symbols-outlined text-[14px]"
                data-icon="star"
                // style="font-variation-settings: 'FILL' 1;"
              >
                star
              </span>
              Member Only
            </span>
          </div>
          <h1 className="font-display-article text-display-article-mobile md:text-display-article text-on-surface leading-tight text-balance">
            The Architect of Silences: How Modern AI Learns the Art of Nuance
          </h1>
          <p className="font-body-main text-secondary leading-relaxed max-w-prose">
            Exploring the transition from raw computation to empathetic
            understanding, and what it means for the future of human-machine
            interaction.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Close up portrait of a senior tech journalist with thoughtful eyes and salt-and-pepper hair, wearing a high-quality navy turtleneck. Warm, natural window lighting illuminates the side of the face, creating a classic magazine profile look. The background is a blurred library with wooden shelves, suggesting depth and intellect."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAln6hzYBGjN0mVzJKjGei5IWboW30UC5Pq27MsFhOhign7r-hFxftQ6eRlsHwRDOcZoPxv2irgBBvPdcc4O8QOtiEGhd96oVBqRHTTzc2OiMW8niI-WIWJApPalcqacu8X9v7qnkv5XYUmA7qVrhKSiDuwDJQ3sT4n1Ft7nwjA_aqdbZGaQQlwHrvNZIdcpKQPxAKnBA3t7wjYVPYVnmPdNUHlAuC7re1FSxIpVPAC-VrHCF7TTRMz9_aSDtqgaWyRjgiS8uB_ZFol"
              />
            </div>
            <div>
              <p className="font-label-ui text-label-ui font-bold">
                Julian Sterling
              </p>
              <p className="font-body-sm text-[12px] text-on-surface-variant">
                Lead AI Correspondent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
