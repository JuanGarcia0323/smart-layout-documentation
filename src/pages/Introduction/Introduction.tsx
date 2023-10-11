import ExampleComponentLayout from '@components/ExampleComponentLayout';
const Introduction = () => {
  return (
    <div className="section" id="introduction">
      <h1 className="font-semibold text-3xl border-b border-primary">
        Welcome to the World of <span className="text-primary"> Smart </span>
        Layout
      </h1>
      <article className="flex flex-col gap-2 p-4 text-lg">
        <p className="point">
          <strong>Smart-layout</strong> is more than just another library; it's
          a revolutionary toolkit tailored to simplify your web design journey.
          Crafted with precision, it's designed to generate adaptive layouts
          that seamlessly fit into any container, enabling dynamic resizing and
          repositioning in real-time. Whether you're building a minimalist blog
          or an intricate web application, Smart-layout ensures your content
          looks impeccable on every screen.
        </p>
        <p className="point">
          But don't just take our word for it. As you navigate through this
          website, you'll be met with a plethora of{' '}
          <a className="link" href="#examples">
            examples
          </a>
          , showcasing Smart-layout in action. With each section, we've paired
          in-depth explanations that break down the mechanics, making it easy
          for you to grasp and implement. From the basics to the advanced, we've
          got you covered.
        </p>
        <p className="point">
          So gear up for a transformative web design experience and let's dive
          deep into the wonders of Smart-layout!
        </p>
      </article>
      <ExampleComponentLayout id="Introducction">
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
      </ExampleComponentLayout>
    </div>
  );
};

export default Introduction;
