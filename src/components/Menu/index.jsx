
import MenuItem from "./menuitem.jsx";


const MenuitemContainer = ({ items }) => (
  <>
    {items.map((item, index) => (
      <MenuItem item={item} key={index} />
    ))}
  </>
);

export default MenuitemContainer;