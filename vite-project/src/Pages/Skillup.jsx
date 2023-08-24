import { CourseIndex } from "../Components";
import { IoStarSharp } from 'react-icons/io5';

const Skillup = () => {
  return (
    <div className="bg-gradient-to-r from-white to-green-200 px-4 md:px-8 lg:px-16 xl:px-32 py-8 flex flex-col md:flex-row py-12">
      <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
        <p className="text-xl md:text-lg font-semibold mb-6">Skillup</p>
        <p className="text-sm md:text-xs font-semibold mb-4">Skillup/Burpsuite Bootcamp</p>
        <p className="text-3xl md:text-2xl font-bold mb-4">Burpsuite Bootcamp</p>
        <p className="text-base md:text-lg leading-7 md:leading-9 text-justify mb-4">
          BurpSuite is an all-in-one tool used for Web Application Penetration Testing (WAPT). There are various functions that BurpSuite can perform that help in the process of penetration testing a website. It allows you to intercept traffic, analyze requests and responses sent to web servers, and perform security assessments. This bootcamp covers all aspects of BurpSuite, from its features to real-world techniques.
        </p>
        <div className="flex items-center mb-4">
          <div className='flex space-x-1 text-yellow-400'>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
          </div>
          <p className="text-lg ml-2">5.0</p>
        </div>
        <button className="hover:bg-[#6ff39d] bg-[#aae7bf] h-12 px-4 rounded-lg text-sm md:text-base">Login To Enroll</button>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <CourseIndex />
      </div>
    </div>
  );
};

export default Skillup;
