import CustomComponentLayout from '@components/CustomComponentLayout';
import { customLayout } from 'smart-layout';

const layoutExample: customLayout = {
  name: 'Introduction',
  layout: [
    {
      id: 1697140114819,
      key: '1697140114819',
      orientation: 'vertical',
      parentId: -1,
    },
    {
      id: 0,
      key: '0Introducction',
      orientation: 'horizontal',
      parentId: 1697140114819,
    },
    {
      id: 1,
      key: '1Introducction',
      orientation: 'horizontal',
      parentId: 1697140114819,
    },
    {
      id: 3,
      key: '3Introducction',
      orientation: 'horizontal',
      parentId: 1697140116667,
    },
    {
      id: 1697140116667,
      key: '1697140116667',
      orientation: 'vertical',
      parentId: -1,
    },
    {
      id: 2,
      key: '2Introducction',
      orientation: 'horizontal',
      parentId: 1697140116667,
    },
  ],
};

const Introduction = () => {
  return (
    <div className="section" id="introduction">
      <h1 className="title">
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
      <CustomComponentLayout id="Introducction" layout={layoutExample}>
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
        <div className="h-full w-full bg-primary rounded" />
      </CustomComponentLayout>
    </div>
  );
};

export default Introduction;
