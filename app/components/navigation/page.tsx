"use client";
import { useState } from "react";
import Navbar from "./navbar/page";
import Sidebar from "./sidebar/page";
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
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
          
      </>
    );
  };
  
  export default Navigation;