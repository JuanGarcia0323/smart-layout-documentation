const CodeText = ({
  children,
  className,
}: {
  children: string | string[];
  className?: string;
}) => {
  return (
    <code className={`code ${className}`}>
      {Array.isArray(children)
        ? children.map((element, i) => {
            const lastElement = children.length - 1;
            if (i === 0 || i === lastElement) {
              return <span key={element + i}>{element}</span>;
            }
            return (
              <p key={`p-${element}-${i}`}>
                <span>{element}</span>
              </p>
            );
          })
        : children}
    </code>
  );
};

export default CodeText;
