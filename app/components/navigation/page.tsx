"use client";
import { useState } from "react";
// import Navbar from "./navbar/page";
// import Sidebar from "./sidebar/page";
import { Sidebar1 } from "./sidebar/sidebar";
import { Navbar1 } from "./navbar/navbar";
import Button from "./navbar/Button";
import image from "./image.svg"

const Navigation = () => {
    // toggle sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Sidebar1 isOpen={isOpen} toggle={toggle} />
        <Navbar1 toggle={toggle} />
          
      </>
    );
  };
  
  export default Navigation;