export default function Heading ({ title, paddingTop, paddingLeft, paddingBottom }){
const dynamicClass = ` text-4xl text-[#0C0B0B] ${paddingTop ? `pt-[${paddingTop}px]` : ''} ${paddingLeft ? `pl-[${paddingLeft}px]` : ''} ${paddingBottom ? `pb-[${paddingBottom}px]` : ''}`;
  
    return (
      <div className={dynamicClass}>
        <h2>{title}</h2>
      </div>
    );
};
  

  