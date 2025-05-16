//Code fra Landrup dans

import Navigation from "@/components/navigation/Navigation";
import Heading from "@/components/Heading";
import Trainers from "../classes/[id]/trainers";
import SearchInput from "./searchInput";
import { Suspense } from "react";
import ClassesDisplay from "../classes/classesDisplay";
import { serverFetch } from "@/lib/server-fetch";

export const metadata = {
  title: "Search",
};

export default async function Search() {
  const classes = await serverFetch("http://localhost:4000/api/v1/classes/");

  const classesWithRatings = await Promise.all(
        classes.map(async (classData) => {
          try {
            const ratings = await serverFetch(
              `http://localhost:4000/api/v1/classes/${classData.id}/ratings`
            );
    
            const averageRating =
              ratings.length > 0
                ? Math.ceil((ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length) * 10) / 10
                : 0;
    
            return { ...classData, rating: averageRating };
          } catch (error) {
            console.error(`Error fetching rating for class ${classData.id}:`, error);
            return { ...classData, rating: 0 };
          }
        })
      );

  return (
    <div className="min-h-screen bg-white">
      <Navigation title="Search" />
      <article className="w-full max-w-[480px] mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <section className="mb-8">
          <SearchInput classes={classes}  />
        </section>
        <section className="mb-8">
          <div className="mb-4">
            <Heading title="Popular Classes" />
          </div>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 pl-4">
              {classesWithRatings.map((classData) => (
                <div key={classData.id} className="min-w-[200px]">
                  <ClassesDisplay classData={classData} rating={classData.rating}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <Heading title="Popular Trainers" />
          </div>
          <div className="flex flex-col gap-4">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-[200px] bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800">
                      Trainers are loading...
                    </p>
                    <div className="mt-4">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800 inline-flex"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Vent venligst...
                    </div>
                  </div>
                </div>
              }
            >
              <Trainers />
            </Suspense>
          </div>
        </section>
      </article>
    </div>
  );
}