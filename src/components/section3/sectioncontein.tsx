import { imgs } from "./imgData";
import ButtonContainer from "../Button";

const buttons = [
    
    {label:'see details'}
  ];

interface Section3ContainerProps {
    imgs: Img[]; 
  }

  const Section3Container: React.FC<Section3ContainerProps>=({imgs})=> {
    return(
        <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
            {imgs.map((img, index)=>(
                <div key={index} className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48 col-transparent">
                    <img src={img.src} alt={img.h5} className="object-cover object-top w-full h-full" />
                    </div>
                    <div className="p-0">
                        <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-800">
                            {img.h5}
                        </a>
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
                            {img.p}
                        </p>
                        <ButtonContainer buttons={buttons}/>

                    </div>
                    
                </div>
            ))}
        </div>
    )
  }

export default Section3Container