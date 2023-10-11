const ExamplesSection = () => {
  return (
    <div className="section h-auto" id="examples">
      <h1 className="font-semibold text-3xl border-b border-primary font-">
        Smart-layout Examples: Your Guide & Cookbook
      </h1>
      <article className="flex flex-col gap-2 p-4 text-lg">
        <p>
          Welcome to the vibrant{' '}
          <span className="font-bold text-primary">"Examples"</span> section of
          our <span className="text-primary">Smart</span> Layout documentation.
          Think of this space as both your guide and your cookbook. While we
          certainly aim to illustrate the library's capabilities, we've gone a
          step further. We've designed this section to be a comprehensive
          repository that you can frequently return to, borrowing code snippets,
          patterns, and entire solutions for your projects.
        </p>
        <ul className="p-10">
          <li className="point">
            Guidance: Helping you understand the depths and nuances of
            Smart-layout.
          </li>
          <li className="point">
            Cookbook: Offering ready-to-use code 'recipes' tailored for various
            scenarios, from basic setups to intricate configurations.
          </li>
        </ul>
        <p>
          So, whether you're seeking clarity, inspiration, or that perfect
          solution to a layout challenge, you're in the right place! Engage with
          these examples, adapt them, and let them guide your creative journey
          with <span className="text-primary">Smart</span> Layout.
        </p>
        <p>
          Dive in, experiment, and let this section be both your mentor and your
          toolkit, propelling you towards web design mastery!
        </p>
      </article>
    </div>
  );
};

export default ExamplesSection;
