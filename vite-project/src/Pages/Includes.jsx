const Includes = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-16 bg-gray-100">
      <p className="text-2xl font-semibold mb-12">This course includes:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="h-72 bg-white shadow-md p-6 rounded-lg flex justify-center flex-col text-center">
          <img
            src="https://www.cyberyami.com/images/courses/theory.svg"
            alt="Theory"
            className="mx-auto mb-4 h-24"
          />
          <p className="text-gray-700 font-semibold text-xl">Self-paced - Pragmatic Topics</p>
        </div>
        <div className="h-72 bg-white shadow-md p-6 rounded-lg flex justify-center flex-col text-center">
          <img
            src="https://www.cyberyami.com/images/courses/practice-lab.svg"
            alt="Practice Lab"
            className="mx-auto mb-4 h-24"
          />
          <p className="text-gray-700 font-semibold text-xl">Hands-on Practice Labs</p>
        </div>
        <div className="h-72 bg-white shadow-md p-6 rounded-lg flex justify-center flex-col text-center">
          <img
            src="https://www.cyberyami.com/images/courses/cert-completion.svg"
            alt="Certificate"
            className="mx-auto mb-4 h-24"
          />
          <p className="text-gray-700 font-semibold text-xl">Certificate of Completion</p>
        </div>
      </div>
    </div>
  );
};

export default Includes;
