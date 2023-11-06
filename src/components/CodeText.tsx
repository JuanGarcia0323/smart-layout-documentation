const CodeText = ({
  children,
  className,
  inLineText,
}: {
  children: string;
  className?: string;
  inLineText?: boolean;
}) => {
  return (
    <code
      className={`code ${className} ${inLineText ? 'p-0 py-[2px] px-1' : ''}`}
    >
      {children
        .trim()
        .split('\n')
        .map((element, i) => {
          const lastElement = children.split('\n').length - 1;
          if (i === 0 || i === lastElement) {
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
        })}
    </code>
  );
};

export default CodeText;
