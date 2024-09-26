// sectioncontainer.tsx
import { imgs } from './imgData'; // Import interface


const Section1Container = ({ imgs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {imgs.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} className="w-40 col-transparent" />
      ))}
    </div>
  );
};

export default Section1Container;
