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
            if (i === 0) {
              return element;
            }
            return (
              <>
                <br key={element} />
                {element}
              </>
            );
          })
        : children}
    </code>
  );
};

export default CodeText;
