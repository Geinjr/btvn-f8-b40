// Define the Button interface
interface Button {
  label: string;
}

// Component ButtonItem
const ButtonItem = ({ button }: { button: Button }) => {
  const { label } = button; // Destructuring label from button
  const buttonClass = label === "Sign up" 
  ? "hover:bg-gray-900/10 active:bg-gray-900/20"
  : (label === "Blocks" || label === "require offer" || label==="see details")
    ? "text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-black"
    : "bg-default-class text-default";
  return (
    <button className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 ${buttonClass}`}>
    {label} 
  </button>
  );
};

// Export component ButtonItem
export default ButtonItem;