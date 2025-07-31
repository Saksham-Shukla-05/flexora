import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ Make sure this is installed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-4 px-4 sm:px-[100px] lg:px-[200px] shadow bg-white relative"
    >
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold font-bricolage">
          flex<span className="text-blue-600">ora</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-gray-600 font-medium">
          <ul className="flex gap-6">
            <li className="text-blue-600 text-[18px] font-semibold cursor-pointer">
              Home
            </li>
            <li className="text-blue-600 text-[18px] hover:text-blue-500">
              About
            </li>
            <li className="text-blue-600 text-[18px] hover:text-blue-500">
              Services
            </li>
            <li className="text-blue-600 text-[18px] hover:text-blue-500">
              Blog
            </li>
            <li className="text-blue-600 text-[18px] hover:text-blue-500">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-600 hover:text-white transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>

        <div
          className="lg:hidden cursor-pointer text-blue-600 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "menu"}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
