"use client";
import { motion } from "framer-motion";


export default function CustomSwiper({ children }) {
  const swiperRef = useRef(null);

  return (
    <div className="mt-6 overflow-hidden relative">
      <motion.div
        ref={swiperRef}
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