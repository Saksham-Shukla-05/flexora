import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pu-4 px-4 sm:px-[100px] lg-px-[200px] shadow bg-white relative"
      ></motion.div>
    </>
  );
}

export default Navbar;
