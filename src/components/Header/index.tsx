import ButtonContainer from "../Button";
import imgNeymar from "../img/neymar.jpg";

const buttons = [
    
    {label:'require offer'}
  ];

const JHeader = () => {
    return (
        <>
            <header className="bg-white p-10 mt-20">
                <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
                    <div className="row-start-2 lg:row-auto">
                        <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 lg:text-5xl !leading-tight text-3xl">
                            Welcome to my Web 
                            <br />
                            Development Portfolio!
                        </h1>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
                            Neymar Jr., born on February 5, 1992, in Brazil, is a world-renowned footballer known for his exceptional skill and flair. He began his career at Santos FC before moving to FC Barcelona, where he formed a dynamic trio with Messi and Suárez. In 2017, he transferred to Paris Saint-Germain for a record fee. A key player for the Brazilian national team, Neymar has also won numerous titles and continues to be a significant figure in global football.
                        </p>
                        <div className="grid">
                            <p className="block antialiased font-sans text-sm leading-normal mb-2 text-gray-900 font-medium">Your Email</p>
                            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                                <div className="relative w-full min-w-[200px] h-11 flex gap-5" >
                                    <input type="email" placeholder="Enter your email" className="w-4/6 h-full border border-gray-300 rounded p-2 " />
                                    <ButtonContainer buttons={buttons } />
                                </div>
                            </div>
                            <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500">Read my <a href="#" class="font-medium underline transition-colors">Terms and Conditions</a></p>
                        </div>
                    </div>
                    <img alt="team work" loading="lazy" width="1024" height="1024" decoding="async" data-nimg="1" class="h-[36rem] w-full rounded-xl object-cover" src={imgNeymar}  style={{ color: 'transparent' , objectFit:'cover' }}></img>
                </div>
            </header>
        </>
    );
};
export default JHeader;