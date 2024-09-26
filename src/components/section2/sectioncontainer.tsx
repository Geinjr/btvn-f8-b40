import { Logo } from "./imgData2";

interface Section2ContainerProps {
  logos: Logo[]; 
}

const Section2Container: React.FC<Section2ContainerProps> = ({ logos }) => {
    return (
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo, index) => (
          <div 
            key={index}  // Thêm key để đảm bảo tính duy nhất
            className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none"
          >
            <div className="p-6 grid justify-center text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
                {logo.icon}
              </div>
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
                {logo.h5}
              </h5>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
                {logo.p}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Section2Container;
  