import { imgs } from "./imgData";
import Section3Container from "./sectioncontein";

const JSection3 =()=> {
    return (
        <section className="py-28 px-8">
            <div className="container mx-auto mb-20 text-center">
                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">My Projects</h2>
                <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
                Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
                </p>
            </div>
            <Section3Container imgs={imgs}/>
        </section>
    )

}

export default JSection3;