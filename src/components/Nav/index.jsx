// Assuming MenuitemContainer is exported from "../Menu/index.tsx"
import MenuitemContainer from "../Menu/index.jsx";
import { RiPagesFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { SiDocsdotrs } from "react-icons/si";
import ButtonContainer from "../Button/index.jsx";
// Define or import items array here
const items = [
  {
    label: 'Page',
    icon: <RiPagesFill size="1.5rem" />,
  },
  {
    label: 'Home',
    icon: <IoHome size="1.5rem" />,
  },
  {
    label: 'Documents',
    icon: <SiDocsdotrs size="1.5rem" />,
  },
];

const buttons = [
  { label : 'Sign up' },
  { label: 'Blocks' }
];


const JNav = () => {
  return (
    <>
      <nav className="py-4 px-10  bg-slate-300 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <p className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">
            Material Tailwind
          </p>
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            <MenuitemContainer items={items} />
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <ButtonContainer buttons={buttons} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default JNav;
