import CodeText from '@components/CodeText';
import ExampleHowTo from './BasicExampleLayout';

const HowTo = () => {
  return (
    <div className="section h-auto" id="starting">
      <h1 className="font-semibold text-3xl border-b border-primary font-">
        Getting Started
      </h1>
      <article className="flex flex-col gap-2 p-4 text-lg">
        <p>
          Embarking on the journey with Smart-layout? You're in for a treat!
          This tool is built to make your web design experience fluid,
          intuitive, and remarkably powerful. Here's a straightforward guide to
          get you up and running:
        </p>
        <ul className="flex flex-col gap-8 ">
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
            {[
              '<ComponetLayout id="myLayout">',
              '------ <List />',
              '------ <div className="h-full w-full bg-primary" />',
              '------ <Form />',
              '</ComponetLayout>',
            ]}
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
            project.
          </li>
          <CodeText>
            {[
              '{',
              '------ children: ReactNode; // The content to be displayed inside the layout',
              '------ id: string; // The id used to identify it in the DOM and save it on the local-storage',
              '------ hideMenuBar?: boolean; // Whether to hide the menu bar or not',
              '------ limitMovement?: "vertical" | "horizontal" // Limit the selectable positions";',
              '}',
            ]}
          </CodeText>
        </ul>
      </article>
    </div>
  );
};

export default HowTo;
