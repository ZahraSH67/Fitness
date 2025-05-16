import Image from "next/legacy/image";
import Heading from "@/components/Heading";
import Trainers from "./trainers";
import DetailsButton from "./detailsButton";
import Navigation from "@/components/navigation/Navigation";
import { limitText } from "./limitText";
import { RateClass } from "@/components/rating/RateClass";

export async function generateMetadata({ params }) {
  const classId = params.id;
  const product = await fetch(
    `http://localhost:4000/api/v1/classes/${classId}`
  ).then((res) => res.json());

  return {
    title: product.className,
  };
}

export default async function ClassDetails({ params }) {
  const classId = params.id;

  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/classes/${classId}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const classData = await response.json();

    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <article className="pb-11">
          <section className="relative w-full h-[300px] sm:h-[400px]">
            <Image
              src={classData.asset.url}
              alt="Class"
              layout="fill"
              objectFit="cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <h2 className="text-3xl sm:text-4xl text-white font-bold">
                  {limitText(classData.className, 10)}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                     <RateClass classId={classId} />
                </div>
             
              </div>
            </div>
            </div>
          </section>

          <section className="w-full max-w-[480px] mx-auto px-4 pt-6">
            <Heading title="Schedule" />
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold">{classData.classDay}</span>
              <span className="text-xl font-semibold">{classData.classTime}</span>
            </div>
            <p className="text-lg mt-4">{classData.classDescription}</p>
            <div className="mt-8">
              <Heading title="Trainer" />
              <div className="mt-4">
                <Trainers data={classData} />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <DetailsButton classData={classData} />
            </div>       
          </section>
        </article>
      </div>
    );
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}