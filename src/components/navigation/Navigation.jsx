"use client";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import BurgerMenu from "./BurgerMenu";
import BackButton from "./BackButton";

export default function Navigation({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" w-full bg-white">
      <div className="flex flex-row justify-between items-center w-full max-w-[480px] mx-auto px-4 py-3">
   
        <div className="flex items-center">
          <BackButton  />
        </div>

        <h1 className="text-3xl  text-center flex-grow mx-2">
          {title}
        </h1>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          <HiMenuAlt3 className="text-3xl text-gray-800" />
        </div>
      </div>

      <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </div>
  );
}