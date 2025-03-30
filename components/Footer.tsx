import Image from "next/image";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-10 pb-10 bg-white shadow-md p-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
      <div className="flex flex-col items-start">
        <Image src="/Thodibaat_logo.jpg" width={35} height={30} alt="Thodi Baat Logo" className="h-8 mb-4 ml-4" />
        <p className="text-lg font-medium mb-4">All In One Chat App With Task Management</p>
        <p className="text-sm">Built by Indians for Indians</p>
      </div>
      <div className="flex items-center space-x-4">
        <span>Contact</span>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaGithub size={20} />
        </a>
      </div>
    </footer>
  );
}
