"use client";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Burgermenu from "./Burgermenu";
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
        {/* div: En div, der fungerer som en menuknap.

onClick={() => setIsMenuOpen(!isMenuOpen)}: Når denne div klikkes, kaldes setIsMenuOpen-funktionen og
 inverterer tilstanden for isMenuOpen (hvis isMenuOpen er sand, ændres den til falsk og omvendt). */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer"
        >
          <HiMenuAlt3 className="text-3xl text-gray-800" />
        </div>
      </div>
{/* Burgermenu: En komponent, der viser en hamburgermenu. Denne komponent importeres fra Burgermenu-filen.

isOpen={isMenuOpen}:

isOpen: En prop, der sendes til Burgermenu-komponenten.

Denne prop angiver, om menuen er åben (sand) eller lukket (falsk).

setIsOpen={setIsMenuOpen}:

setIsOpen: En prop, der sendes til Burgermenu-komponenten.

Denne prop er en funktion, der bruges til at opdatere isMenuOpen-tilstanden. 
For eksempel, hvis brugeren klikker på luk menu-knappen, kaldes denne funktion 
og ændrer isMenuOpen til falsk. */}
      <Burgermenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </div>
  );
}