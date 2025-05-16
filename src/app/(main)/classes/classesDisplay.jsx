"use client";
import Link from "next/link";
import Image from "next/image";
import { StarRating } from "@/components/rating/StarRating";
import { limitText } from "./[id]/limitText";


export default function ClassesDisplay({ classData, rating}) {
  return (
    <Link key={classData.id} href={`/classes/${classData.id}`}>
      <div className= "min-w-[200px] bg-white shadow-md p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform sm:min-w-[150px] md:min-w-[180px]">
        <Image
          src={classData.asset.url}
          alt={classData.className}
          className="w-full h-[120px] object-cover rounded-lg"
          width={200}
          height={120}
        />
        <h3 className="text-lg font-semibold mt-2 text-center sm:text-sm">
        {limitText(classData.className, 10)}
          
      </h3>
        <div className="flex flex-row gap-2 text-[#F1C40E] items-center justify-center mt-2">
           <StarRating rating={rating?? 0} interactive={false} />
        </div>
      </div>
    </Link>
  );
}
