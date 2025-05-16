// code fra Landrup Dans
"use client";
import Link from "next/link";
import { useAuth } from "@/app/auth/context";
import { useState, useEffect } from "react";

export default function DetailsButton({ classData }) {
  const [signedUp, setSignedUp] = useState(false);
  const { currentUser, setCurrentUser, token } = useAuth();

  const classId = classData.id;

  useEffect(() => {
    const isClassAddedToMyList = currentUser?.classes?.some(
      (classObj) => classObj.id === classId
    );
    setSignedUp(isClassAddedToMyList);
  }, [currentUser, classId]);

  const buttonText = signedUp ? "Leave" : "Sign Up";

  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const updatedUserData = await response.json();
      setCurrentUser(updatedUserData);
    } catch (error) {
      console.error(error);
    }
  };

  async function addUserToClass(cId) {
    try {
      const sameDayClassExists = currentUser?.classes?.some(
        (item) => item.classDay === classData.classDay
      );

      if (sameDayClassExists) {
        alert("You are already signed up for a class on this day.");
        return;
      }

      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}/classes/${cId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add user to class");
      }

      getCurrentUser();
    } catch (error) {
      console.error(error);
    }
  }

  async function removeUserFromClass(cId) {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}/classes/${cId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove user from class");
      }

      getCurrentUser();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {currentUser != null ? (
        <button
          className="w-[200px] h-[50px] bg-[#F1C40E] text-black text-lg font-semibold 
                    rounded-lg
                    hover:bg-[#D4AC0D] hover:scale-105 hover:shadow-lg 
                    focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          onClick={() => (signedUp ? removeUserFromClass(classId) : addUserToClass(classId))}
        >
          {buttonText}
        </button>
      ) : (
        <Link href="/login">
          <button
            className="w-[200px] h-[50px] bg-[#F1C40E]  text-black text-lg font-semibold 
                       rounded-lg
                       hover:bg-[#D4AC0D] hover:scale-105 hover:shadow-lg 
                      focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          >
            Sign Up
          </button>
        </Link>
      )}
    </div>
  );
}
