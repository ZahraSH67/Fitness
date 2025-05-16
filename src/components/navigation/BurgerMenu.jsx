// https://www.youtube.com/watch?v=GGkBwpxV7AI

"use client";
import Link from "next/link";
import { useAuth } from "@/app/auth/context";

export default function BurgerMenu ({ isOpen, setIsOpen }){
  const { currentUser, logout } = useAuth();

  if (!isOpen) return null;

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center gap-[48px]">
      <div
        className="absolute top-5 right-8 cursor-pointer text-lg"
        onClick={handleLinkClick} 
      >
        X
      </div>
      <Link href="/classes" onClick={handleLinkClick}>
        <span className="my-5 text-black text-2xl cursor-pointer">Home</span>
      </Link>
      <Link href="/search" onClick={handleLinkClick}>
        <span className="my-5 text-black text-2xl cursor-pointer">Search</span>
      </Link>
      {currentUser && (
        <Link href="/schedule" onClick={handleLinkClick}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            My Schedule
          </span>
        </Link>
      )}
      {currentUser ? (
        <Link href="/" onClick={() => { handleLinkClick(); logout(); }}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            Log Out
          </span>
        </Link>
      ) : (
        <Link href="/login" onClick={handleLinkClick}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            Log In
          </span>
        </Link>
      )}
    </div>
  );
};


