import { useState } from "react";
import { TiTick } from "react-icons/ti";

const OverView = () => {
  const [activeTab, setActiveTab] = useState("overview"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="#overview" className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 bg-gray-100 flex flex-col md:flex-row ">
      <div className="mb-8 md:w-1/2 md:pr-4">
        <div className="flex flex-row space-x-8 mb-10">
       <a href="#overview"
          className={`text-xl font-semibold cursor-pointer ${
            activeTab === "overview" ? "border-b-2 border-orange-500" : ""
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </a>
        <a href="#review"
          className={`text-xl font-semibold cursor-pointer ${
            activeTab === "reviews" ? "border-b-2 border-orange-500" : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </a>
        </div>
        <p className="text-2xl font-semibold mb-4">Overview</p>
        <p className="text-gray-700 text-lg leading-9">
          BurpSuite Bootcamp brings you a detailed and structured way of learning
          and practicing this industry-used tool. BurpSuite is mainly employed
          for conducting Web Application Penetration Testing (WAPT). This
          bootcamp covers every aspect and sub-tool of BurpSuite. It includes
          practice labs to get hands-on experience with BurpSuite and theory
          lectures with interactive video demonstrations.
        </p>
      </div>
      <div className="md:w-1/2 md:pl-20 md:mt-16">
        <p className="text-2xl font-semibold mb-4">Top Skills You Will Learn</p>
        <div className="space-y-4">
        <ul>
            <li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Understanding of BurpSuite</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Know the tools offered by BurpSuite</span>
            </li><li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Use BurpSuite with ease in your testing</span>
            </li><li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Know the difference between the Pro & Free editions</span>
            </li><li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Perform full-fledged WAPT using only BurpSuite</span>
            </li><li className="flex items-center space-x-2 mb-2">
              <TiTick className="rounded-full p-1 bg-green-500 text-white" size={20} />
              <span className="text-gray-700 text-lg">Learn real-world techniques</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverView;
