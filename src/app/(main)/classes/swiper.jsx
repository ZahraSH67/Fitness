// https://swiperjs.com/react
// https://framermotionexamples.com/example/drag-constraints
// https://framer.mighty.guide/some-examples/11-drag-constraints/
// useRef bevarer en værdi på tværs af komponentgengivelser uden at forårsage en gengivelse. 
// Denne funktion er nyttig, hvis du vil gemme en værdi, hvis ændring ikke bør få komponenten til at gengives.
//  I denne kode bruges swiperRef som en reference til DOM-elementet og kræver ikke gengivelse.
// Fjernelse af useRef fra denne kode vil ikke forårsage nogen problemer,
//  og komponenten vil stadig fungere korrekt. Men hvis du har brug for 
//  direkte adgang til DOM-elementet eller mere udvidelsesmuligheder i fremtiden,
//   er det bedre at beholde useRef i din kode. Hvis du er sikker på, at du ikke har brug for 
//   disse funktioner, kan du fjerne dem.
"use client";
import { motion } from "framer-motion";
// import { useRef } from "react";

export default function Swiper({ children }) {
  // const swiperRef = useRef(null);

  return (
    <div className="mt-6 overflow-hidden relative">
      <motion.div
        // ref={swiperRef}
        className="flex space-x-4 p-2 w-max"
        drag="x"
        // Med andre ord bestemmer det, hvor langt elementet kan trækkes til venstre eller højre.
        dragConstraints={{ left: -((children.length - 1) * 220), right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.div>
    </div>
  );
}