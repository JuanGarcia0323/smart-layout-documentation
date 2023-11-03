const TextExample = `const layoutExamples = [...];
const options = [...];
const ExampleSavingLayout = () => {
    const [layoutOptions, setLayoutOptions] = useState<DefaultOptionType[]>(options);
    const [layouts, setLayouts] = useState<{ name: string; layout: string }[]>(layoutExamples);
    const [layoutSelected, setLayoutSelected] = useState<string>();
    const [showCode, setShowCode] = useState(false);
    const handleNewElement = (name: string) => {
        const currentLayout = localStorage.getItem('example-saving-layout');
        if (!currentLayout) {
            return;
        }
        setLayouts([...layouts, { name, layout: currentLayout }]);
        setLayoutOptions([...layoutOptions, { label: name, value: name }]);
        setLayoutSelected(name);
      };
    const selectItem = (name: string) => {
              const selectedLayout = layouts.find((l) => l.name === name);
              localStorage.setItem('example-saving-layout', selectedLayout?.layout ?? '');
              if (!selectedLayout) {
                  return;
              }
              setLayoutSelected(name);
      };
    const layout = layouts.find((l) => l.name === layoutSelected); 
    return (
      <ComponentLayout
        id="example-saving-layout"
        config={{customLayout:layout && ({name: layout.name,layout: JSON.parse(layout.layout)})}}
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
      </ComponentLayout>
      )};`;
export default TextExample;
