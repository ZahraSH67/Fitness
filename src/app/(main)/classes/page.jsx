import { serverFetch } from "@/lib/server-fetch";
import ClassesDisplay from "./classesDisplay";
import CustomSwiper from "./CustomSwiper";    // Your custom component
import Navigation from "@/components/navigation/Navigation";


export default async function Classes() {
  const classes = await serverFetch("http://localhost:4000/api/v1/classes");


  if (!Array.isArray(classes) || classes.length === 0) {
    return <p className="text-gray-500">No classes available</p>;
  }

  const randomIndex = Math.floor(Math.random() * classes.length);
  const highlightedClass = classes[randomIndex];

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
    <div>
      <Navigation title="Popular Classes"/>
    
      <div className="p-6 sm:p-4 md:p-6">
  
      {highlightedClass && (
        <div
          className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden bg-gray-200"
          style={{
            backgroundImage: `url(${highlightedClass.asset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-4 left-4 bg-opacity-60 text-white px-4 py-2 rounded-lg">
            <h2 className="text-[20px] sm:text-[30px] md:text-[50px] font-bold">{highlightedClass.className}</h2>
          </div>
        </div>
      )}
      <h2 className="text-4xl  mt-6 sm:mt-4 md:mt-6 text-left">Classes for you</h2>
        {classesWithRatings.length > 0 ? (
                  <CustomSwiper>
                    {classesWithRatings.map((classData) => (
                      <ClassesDisplay
                        key={classData.id}
                        classData={classData}
                        rating={classData.rating} 
                      />
                    ))}
                  </CustomSwiper>
                ) : (
                  <p className="text-gray-500 text-center">No other classes available</p>
                )} 
      </div>
    </div>  
  );
}
