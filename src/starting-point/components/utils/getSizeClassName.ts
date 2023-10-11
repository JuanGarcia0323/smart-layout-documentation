const getSizeClassName = (className?: string): string => {
  return className?.match(/(\w*-[hw]-\w*)|(\w*[hw]-\w*)/g)?.join(' ') ?? '';
};

export default getSizeClassName;
