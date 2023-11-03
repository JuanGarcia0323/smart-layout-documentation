import CodeText from '@components/CodeText';
import ExampleHowTo from './BasicExampleLayout';

const HowTo = () => {
  return (
    <div className="section h-auto" id="starting">
      <h1 className="title">Getting Started</h1>
      <article className="flex flex-col gap-2 p-4 text-lg">
        <p>
          Embarking on the journey with Smart-layout? You're in for a treat!
          This tool is built to make your web design experience fluid,
          intuitive, and remarkably powerful. Here's a straightforward guide to
          get you up and running:
        </p>
        <ul className="flex flex-col gap-4">
          <li>
            <span className="text-primary font-bold text-base ">
              1 - Installation:
            </span>{' '}
            Just like any other library, the first step is to integrate
            Smart-layout into your project. We've made this process painless and
            quick.
          </li>
          <CodeText>$ npm i smart-layout</CodeText>
          <li>
            <span className="text-primary font-bold text-base ">
              2 - Design & Development:
            </span>{' '}
            Now, it's time to craft. Use the library's functions to create
            dynamic, adaptive layouts that react to user interactions in
            real-time.
          </li>
          <CodeText>
            {`return (
              <ComponetLayout id="myLayout">
                    <List />
                    <div className="h-full w-full bg-primary" />
                    <Form />
              </ComponetLayout>
              )`}
          </CodeText>
          <div className="w-full h-[800px]">
            <ExampleHowTo />
          </div>
          <li>
            <span className="text-primary font-bold text-base ">
              3 - Configuration:
            </span>{' '}
            While Smart-layout works wonderfully out of the box, it's fully
            customizable. Adjust settings to fit the unique needs of your
            project passing the prop <CodeText inLineText>config</CodeText>
          </li>
          <CodeText>
            {`<ComponentLayout 
              id="yourId"
              config={{
                      disableFullscreen?: boolean // disable the fullscreen button;
                      disableMove?: boolean // disable the move button;
                      disableMoveToTheTop?: boolean // disable the move to the top button;
                      disableClose?: boolean // disable the close button;
                      onFullScreen?: (element: layoutElement) => void // callback when the fullscreen button is clicked;
                      onMove?: (element: layoutElement) => void // callback when the move button is clicked;
                      onMoveToTheTop?: (element: layoutElement) => void // callback when the move to the top button is clicked;
                      onClose?: (element: layoutElement) => void // callback when the close button is clicked;
                      hideMenubar?: boolean // hide the menu bar that contains the buttons on each element;
                      limitMovement?: posibleMovement // limit the movement of the elements to "horizontal" or "vertical;
                      customLayout?: customLayout // pass a custom layout to the component;
                      classNameLayoutElement?: string // className for the layout elements;
                      elementsNames?: string[] | number[] // names that will be mapped to the elements;
                    }}
              />`}
          </CodeText>
        </ul>
      </article>
    </div>
  );
};

export default HowTo;
