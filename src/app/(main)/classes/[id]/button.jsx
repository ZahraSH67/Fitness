export default function Button ({
    width,
    height,
    bgColor,
    borderRadius,
    children,
    onClick,
  })
  {
    const buttonClasses = `inline-flex justify-center items-center cursor-pointer border-2 ${bgColor} ${borderRadius} ${width} ${height}`;
  
    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    );
  };
  
 