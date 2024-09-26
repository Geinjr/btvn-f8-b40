// JSection1.tsx

import Section1Container from './sectioncontainer';
import { imgs } from './imgData'; // Import imgs từ imgData

const JSection1: React.FC = () => {
  return (
    <section className="px-8 py-28"> 
      <div className="container mx-auto text-center">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
          My awesome clients
        </h6>
          <Section1Container imgs={imgs} />
      </div>
    </section>
  );
};

export default JSection1;
