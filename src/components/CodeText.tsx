const CodeText = ({
  children,
  className,
  split,
}: {
  children: string;
  className?: string;
  split?: boolean;
}) => {
  return (
    <code className={`code ${className}`}>
      {split
        ? children
            .trim()
            .split('\n')
            .map((element, i) => {
              const lastElement = children.split('\n').length - 1;
              console.log('lastElement', lastElement);
              console.log(i);
              if (i === 0 || i === lastElement) {
                console.log(element, i);
                return <span key={element + i}>{`${element.trim()}`}</span>;
              }
              return (
                <p key={`p-${element}-${i}`}>
                  {element
                    .split('  ')
                    .map((e) => (e === '' ? '-' : ` ${e}`))
                    .join('')}
                </p>
              );
            })
        : children}
    </code>
  );
};

export default CodeText;
