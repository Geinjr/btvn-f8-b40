
import MenuItem from "./menuitem.tsx";


const MenuitemContainer = ({ items }) => (
  <>
    {items.map((item, index) => (
      <MenuItem item={item} key={index} />
    ))}
  </>
);

export default MenuitemContainer;