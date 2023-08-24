import {FaDiscord,FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-0">
        <div className="">
              <div>
                <img src="https://www.cyberyami.com/images/logo.svg" alt="" />
              </div>
              <div className="flex space-x-4 my-4">
                <FaDiscord/>
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
              </div>
            </div>
          <div className="flex items-center">
           
          </div>
          <div>
            <p className="text-gray-500 font-semibold mb-4 md:text-lg">RESOURCES</p>
            <ul className="mb-4">
              <li className="mb-2 text-base hover:text-green-400">LeaderBoard</li>
              <li className="mb-2 text-base hover:text-green-400">About us</li>
              <li className="mb-2 text-base hover:text-green-400">Contact us</li>
              <li className="mb-2 text-base hover:text-green-400">Blogs</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-500 font-semibold mb-4 md:text-lg">LEGALS</p>
            <ul className="mb-4">
              <li className="mb-2 text-base hover:text-green-400">Terms & Conditions</li>
              <li className="mb-2 text-base hover:text-green-400">Privacy Policy</li>
              <li className="mb-2 text-base hover:text-green-400">Refund Policy</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-500 font-semibold mb-4 md:text-lg">FOR BUSINESSES</p>
            <ul className="mb-4">
              <li className="mb-2 text-base hover:text-green-400">Business Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;