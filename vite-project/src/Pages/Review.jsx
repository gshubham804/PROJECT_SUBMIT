import { IoStarSharp } from 'react-icons/io5';
import { BiSolidUserCircle } from 'react-icons/bi';

const Review = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 py-16 bg-gray-100' id='review'>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <p className="font-semibold text-2xl mb-2 md:mb-0">Reviews</p>
        <div className='flex items-center space-x-1 text-yellow-400'>
          <p className='text-gray-500'>5.0</p>
          <IoStarSharp className="w-5 h-5"/>
          <IoStarSharp className="w-5 h-5"/>
          <IoStarSharp className="w-5 h-5"/>
          <IoStarSharp className="w-5 h-5"/>
          <IoStarSharp className="w-5 h-5"/>
          <p className='text-gray-500'>(1 Rating)</p>
        </div>
      </div>
      <div className='mb-8 bg-gray-200 p-8 inline-block rounded-lg shadow-xl'>
        <div className='flex items-start space-x-4'>
         <BiSolidUserCircle size={40} className='text-blue-500'/>
         <div>
          <p className='font-semibold text-lg mb-1'>User Name</p>
          <div className='flex space-x-1 text-yellow-400'>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
            <IoStarSharp className="w-4 h-4"/>
          </div>
         </div>
        </div>
        <p className='mt-2'>Awesome bootcamp, I liked it very much!</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-blue-400 cursor-pointer hover:underline'>Prev</p>
        <p className='text-blue-400 cursor-pointer hover:underline'>Next</p>
      </div>
    </div>
  );
};

export default Review;
