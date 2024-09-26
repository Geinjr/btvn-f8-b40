// MenuItem component
const MenuItem = ({ item }) => {
  const { label, icon } = item;

  return (
    <li className="flex gap-2">
      {icon}
      <a className="antialiased font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900" href="#">
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
