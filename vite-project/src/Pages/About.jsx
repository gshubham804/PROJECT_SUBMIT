const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-8 bg-[#dcfce7]">
      <p className="text-2xl font-semibold mb-4">About the Author</p>
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        {/* Hide the image on screens smaller than medium (md) */}
        <img
          src="https://www.cyberyami.com/_next/image?url=%2Fimages%2Flogo-black.png&w=1200&q=75"
          alt="Author"
          className="w-44 h-44 rounded-full object-cover hidden md:block"
        />
        <div className="mt-4 md:mt-0">
          <p className="text-xl font-semibold mb-6">Team Cyberyami</p>
          <p className="text-gray-700 text-lg text-justify">
            CyberYami brings you a plethora of custom-designed bootcamps and
            courses. The learning material focuses on hands-on practice that is
            much needed in cybersecurity. We have included labs and challenges
            to help you understand how things work and are done in the industry.
            You can showcase your skills on your resume with our certification,
            proving that you can apply the knowledge gained in real-world
            scenarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
