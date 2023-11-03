import CodeText from '@components/CodeText';
import ExampleSavingLayout from './Example';

const SavingLayouts = () => {
  return (
    <section className="section h-auto" id="saving-layout-example">
      <h2 className="title text-2xl">
        Saving <span className="text-primary">Layouts</span>
      </h2>
      <article className="flex flex-col gap-4 p-4 text-lg">
        <p>
          In the world of web design, one size rarely fits all. Different
          projects demand different layouts, be it grids, masonry, single-page,
          or multi-column designs. With{' '}
          <span className="text-primary">Smart</span> Layout, you don't have to
          settle for just one or wrestle with complex configurations to achieve
          variety.
        </p>
        <p>
          This section is dedicated to showcasing the sheer versatility of{' '}
          <span className="text-primary">Smart</span> Layout. Discover how
          effortlessly you can switch between or even combine layouts. Whether
          you're looking to create a dynamic magazine layout, a clean corporate
          homepage, or a creative portfolio grid,{' '}
          <span className="text-primary">Smart</span> Layout equips you with the
          tools to do it all.
        </p>
        <p>
          So, don't limit your creativity to a single framework. Dive into this
          section and see how <span className="text-primary">Smart</span> Layout
          makes varied designs not just possible, but delightfully simple!
        </p>
        <h3 className="font-bold border-b border-b-primary">
          How is <span className="text-primary">Smart</span> Layout saved
        </h3>
        <p>
          Smart layout is primarily saved in the local storage of the browser
          with an structure like this:
        </p>
        <CodeText>
          {`const layout = [
            {"id": 1697226791867, "key": "1697226791867", "orientation": "vertical", "parentId": -1},
            {"id": 0, "key": "0how-to-example", "orientation": "horizontal", "parentId": 1697226791867},
            {"id": 1, "key": "1how-to-example", "orientation": "horizontal", "parentId": 1697226791867},
            {"id": 2, "key": "2how-to-example", "orientation": "horizontal", "parentId": -1}
            ]`}
        </CodeText>
        <p>
          This last code example that we just saw it's the current description
          stored for the previous example at the time that I'm writing this
        </p>
        <p>
          This structure is described by the type{' '}
          <CodeText inLineText>dynamicLayout</CodeText> and this same structure
          can be use to create a <CodeText inLineText>customLayout</CodeText>{' '}
          the type accepted by the prop with the exact same name. Let's see an
          example of a custom layout:
        </p>
        <CodeText>
          {`const customLayout = {
              layout: [
                  {"id": 1697226791867, "key": "1697226791867", "orientation": "vertical", "parentId": -1},
                  {"id": 0, "key": "0how-to-example", "orientation": "horizontal", "parentId": 1697226791867},
                  {"id": 1, "key": "1how-to-example", "orientation": "horizontal", "parentId": 1697226791867},
                  {"id": 2, "key": "2how-to-example", "orientation": "horizontal", "parentId": -1}
              ]
              name: "customLayout"
          }`}
        </CodeText>
        <p>
          Thanks to this prop we can dynamically change layouts, have default
          layouts or even let the user store their own, let's see an example:
        </p>
        <div className="h-[800px] w-full">
          <ExampleSavingLayout></ExampleSavingLayout>
        </div>
      </article>
    </section>
  );
};

export default SavingLayouts;
