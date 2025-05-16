//unicode star: https://symbl.cc/en/collections/star-symbols/
// https://codepen.io/search/pens?q=interactive+rating+system

"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/auth/context";

export function RateClass({ classId, interactive = true }) {
  const { currentUser } = useAuth();
  const [rating, setRating] = useState(0); 
  const [tempRating, setTempRating] = useState(0); 
  const [hasRated, setHasRated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (currentUser && currentUser.token) {
      fetchRatings();
    } else {
      setIsLoading(false);
    }
  }, [currentUser, classId]);

  const fetchRatings = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/classes/${classId}/ratings`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch ratings");
      }
      const data = await response.json();
  
      const userRatingData = data.find(
        (rating) => rating.userId === currentUser.id
      );

      if (userRatingData) {
        console.log("User rating data:", userRatingData);
        setRating(userRatingData.rating);
        setHasRated(true);
      } else {
        console.log("User has not rated this class yet.");
      }
    } catch (error) {
      console.error("Failed to fetch ratings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRate = async () => {
    if (!currentUser || !currentUser.token) {
      alert("Please log in to rate this class.");
      return;
    }

    if (hasRated) {
      alert("You have already rated this class.");
      return;
    }

    if (tempRating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/classes/${classId}/ratings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: JSON.stringify({
            userId: currentUser.id,
            rating: tempRating,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      const data = await response.json();
      console.log("Rating submitted successfully:", data);

      setRating(tempRating);
      setHasRated(true);
      alert("Rating submitted successfully!");
    } catch (error) {
      console.error("Failed to submit rating:", error);
      alert(`Failed to submit rating: ${error.message}`);
    }
  };

  if (!currentUser) {
    return <p  className="text-white">Please log in to rate this class.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-8">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setTempRating(star)} 
            disabled={hasRated}
            className={`cursor-pointer text-2xl transition-transform hover:scale-110 ${
              (hasRated ? rating : tempRating) >= star
                ? "text-[#F1C40E]"
                : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {!hasRated && interactive && (
        <button
          onClick={handleRate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Rating
        </button>
      )}

      {hasRated && (
        <p className="text-sm text-white mt-2">
          You rated this class: {rating}
        </p>
      )}
    </div>
  );
}