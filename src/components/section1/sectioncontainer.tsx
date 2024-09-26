// sectioncontainer.tsx
import { Img } from './imgData'; // Import interface

interface Section1ContainerProps {
  imgs: Img[]; // Nhận props imgs
}

const Section1Container: React.FC<Section1ContainerProps> = ({ imgs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {imgs.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} className="w-40 col-transparent" />
      ))}
    </div>
  );
};

export default Section1Container;
