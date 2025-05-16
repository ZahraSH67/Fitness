//Code fra Landrup dans

"use client";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ClassesDisplay from "../classes/classesDisplay";

export default function SearchInput({ classes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    if (searchTerm !== "") {
      const results = (Array.isArray(classes) ? classes : []).filter(
        (classData) => {
          const searchLower = searchTerm.toLowerCase();
          return (
            (classData.className && classData.className.toLowerCase().includes(searchLower)) ||
            (classData.trainer.trainerName && classData.trainer.trainerName.toLowerCase().includes(searchLower)) ||
            (classData.classDay && classData.classDay.toLowerCase().includes(searchLower)) ||
            (classData.classDescription && classData.classDescription.toLowerCase().includes(searchLower))
          );
        }
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }, [searchTerm, classes]);
  useEffect(() => {
    const fetchRatings = async () => {
      for (const classData of filteredData) {
        try {
          const response = await fetch(
            `http://localhost:4000/api/v1/classes/${classData.id}/ratings`
          );
          const data = await response.json();
          
          if (Array.isArray(data) && data.length > 0) {
            const averageRating = data.reduce((sum, rating) => sum + rating.rating, 0) / data.length;
            
            const roundedRating = Math.ceil(averageRating * 10) / 10;
  
            setRatings((prevRatings) => ({
              ...prevRatings,
              [classData.id]: roundedRating,
            }));
          } else {
            setRatings((prevRatings) => ({
              ...prevRatings,
              [classData.id]: 0,
            }));
          }
        } catch (error) {
          console.error("Failed to fetch rating:", error);
        }
      }
    };
  
    if (filteredData.length > 0) {
      fetchRatings();
    }
  }, [filteredData]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-4">
      <section className="flex items-center relative mb-6">
        <FiSearch className="absolute ml-3 text-gray-400" size={20} />
        <input
          placeholder="Search classes, instructors, days, or descriptions..."
          type="text"
          className="pl-10 w-full h-[50px] bg-[#FCFBFB] border border-[#D4D4D4] rounded-[25px] placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </section>
      <section className="overflow-x-auto scrollbar-hide">
        {searchTerm !== "" && (
          <div className="flex gap-4 pb-4">
            {filteredData.length === 0 ? (
              <div className="w-full text-center">
                <h1 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold p-4 bg-gray-100 rounded-lg shadow">
                  Your search did not give any results. Try to search for something else.
                </h1>
              </div>
            ) : ( 
              filteredData.map((classData) => (
                <div key={classData.id} className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[250px]"> 
                  <ClassesDisplay classData={classData} rating={ratings[classData.id] ?? 0} interactive={false}/>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}










