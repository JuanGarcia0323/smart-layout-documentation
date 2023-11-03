const stepOne = `const ExampleOnClose = () => {
    const [elements, setElements] = useState([1, 2, 3, 4]); 
    return (
        <ComponentLayout
          config={{
            onClose: (e) => setElements(elements.filter((el) => el !== e.id)), 
          }}
          id="testBroke"
        >
          {elements.map((e) => (
            <div key={e}>
              {e}
            </div>
          ))}
        </ComponentLayout>
    );
};
export default Example;`;

const stepTwo = `const ExampleOnClose = () => {
    const [elements, setElements] = useState([1, 2, 3, 4]); 
    return (
        <ComponentLayout
          config={{
            onClose: (e) => setElements(elements.filter((el) => el !== e.name)),
            elementsNames: elements,
          }}
          id="testFixed"
        >
          {elements.map((e) => (
            <div key={e}>
              {e}
            </div>
          ))}
        </ComponentLayout>
    );
};
export default Example;`;

export { stepOne, stepTwo };
