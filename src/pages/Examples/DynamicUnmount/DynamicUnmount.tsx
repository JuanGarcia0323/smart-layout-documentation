import CodeText from '@components/CodeText';
import LayoutExampleOnClose from './exampleOnClose/LayoutExampleOnClose';
import LayoutExampleOnClosePartTwo from './exampleOnClose/LayoutExampleOnClosePartTwo';
const DynamicUnmount = () => {
  return (
    <section className="section h-auto" id="dynamic-unmount-layout-example">
      <h2 className="title text-2xl">
        <span className="text-primary">Dynamic</span> unmount
      </h2>
      <article className="flex flex-col gap-4 p-4 text-lg">
        <p>
          Navigating through dynamic web environments often means encountering
          components that continuously mount and unmount. Amidst this
          ever-changing landscape, <span className="text-primary">Smart</span>{' '}
          Layout emerges as a beacon of stability and elegance.
        </p>
        <p>
          A standout feature of <span className="text-primary">Smart</span>{' '}
          Layout is its unmatched ability to diligently preserve the state of
          components that remain mounted. Despite the surrounding turbulence of
          components coming and going, the ones in view retain their states
          without missing a beat, ensuring a consistent and glitch-free user
          experience.
        </p>
        <p>
          Coupled with this, <span className="text-primary">Smart</span> Layout
          also brings to the table its animated transitions. Mounting and
          unmounting processes aren't just about functionality; with smooth
          visual cues provided by these animations, they become a visual delight
          for the users.
        </p>
        <p>
          And, there's exciting news on the horizon! One of our upcoming
          features will empower <span className="text-primary">Smart</span>{' '}
          Layout to preserve its structure even when components unmount. This
          means your layout will intelligently adapt and restructure itself,
          ensuring optimal use of space and an uninterrupted flow.
        </p>
        <p>
          Venture further into this section to see how{' '}
          <span className="text-primary">Smart</span> Layout masterfully blends
          state preservation, animated transitions, and future-ready
          adaptability, setting a new benchmark in web design!
        </p>
        <h3 className="font-bold border-b border-b-primary">
          How it <span className="text-primary">works</span>
        </h3>
        <p>
          Behind the scenes the library it's keeping track of the amount of
          mounted components, dinamically regenerating the layout and the
          position of each element ensuring to preserve the state of each one of
          the elements displayed on the screen. When you unmount one of them,
          you are altering the number of components, restarting the{' '}
          <span className="text-primary">layout</span>
        </p>
        <p>
          We'll see an example, but first let's take a look at this code
          snippet:
        </p>
        <LayoutExampleOnClose></LayoutExampleOnClose>
        <p>
          As you can see in this example we are adding a close button that
          basically updates the state unmounting the matching components.
        </p>
        <p>
          To do that that we are using the:{' '}
          <CodeText inLineText>layoutElement</CodeText> type as part of the
          event. This type is described as:
        </p>
        <CodeText>
          {`interface layoutElement {
              key: string;
              id: number;
              parentId: number;
              orientation: orientation;
              className?: string;
              name?: string | number;
          }`}
        </CodeText>
        <p>
          But probably you noticed that the example it's not working properly,
          that's because when we are deleting elements, the id it's changing.
          This is because that id is automatically generated using the children
          position inside the <CodeText inLineText>ComponentLayout</CodeText>
          So instead, we should add the names array inside the config prop of
          the <CodeText inLineText>ComponentLayout</CodeText> so in this way,
          the children are going to map with those names, let's see:
        </p>
        <LayoutExampleOnClosePartTwo />
        <p>
          Now it's working properly, deleting the elements and preserving the
          states as it is expected. Go and play with it and restart it as much
          as you want using the button on the top right corner.
        </p>
      </article>
    </section>
  );
};

export default DynamicUnmount;
