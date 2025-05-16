// https://w3collective.com/react-star-rating-component/
"use client";
import { useState } from "react";

export function StarRating({
  rating = 0, 
  onRate, 
  interactive = false, 
}) {
  const [tempRating, setTempRating] = useState(0); 

  const handleClick = (star) => {
    if (interactive && onRate) {
      onRate(star); 
    }
  };


  return (
    <div>
      <div className="flex gap-1 text-[#F1C40E]">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            disabled={!interactive}
            className={`text-2xl ${
              (interactive ? tempRating : rating) >= star
                ? "text-[#F1C40E]"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
            onMouseEnter={() => interactive && setTempRating(star)} 
            onMouseLeave={() => interactive && setTempRating(0)} 
          >
            ★
          </button>
        ))}
      </div>
      {!interactive && rating > 0 && (
        <p className="text-sm text-gray-600 mt-2">
          Rate: {rating}
        </p>
      )}
    </div>
  );
}