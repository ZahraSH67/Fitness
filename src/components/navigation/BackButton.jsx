// https://stackoverflow.com/questions/51843119/go-back-to-the-previous-page

"use client";

import { useRouter, usePathname } from "next/navigation"; 
import { IoCaretBack, IoCaretUp } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isSchedule = pathname === "/schedule";
  const isSearch = pathname === "/search";
  const isDynamicClass = pathname.startsWith("/classes/") && pathname.split("/").length === 3;  
  const isDisabledPage = ["/classes", "/login", "/registration"].includes(pathname);

  const isActive = isSchedule || isSearch || isDynamicClass;

  const handleClick = () => {
    if (isActive) {
      router.push("/classes");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabledPage}
      className={`
        flex items-center gap-2 transition-transform
        ${isActive ? "text-orange-500 hover:scale-105" : "text-gray-400 cursor-not-allowed"}
      `}
    >
      {isActive ? (
        <>
          <IoCaretBack className="text-2xl" />
          <span className="text-2xl">Back</span>
        </>
      ) : (
        <IoCaretUp className="text-2xl" />
      )}
    </button>
  );
}
