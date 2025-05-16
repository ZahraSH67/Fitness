import Image from "next/legacy/image";
import billede1 from "/public/welcome1.jpg";
import billede2 from "/public/welcome2.jpg";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative flex-1">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={billede1}
            alt="Billede"
            layout="fill"
            objectFit="cover"
            objectposition= "50% 30%"
             className="scale-105"
          />
          <div className="absolute top-[60%] left-[5%] transform -translate-y-1/2">
            <p
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal"
              style={{ lineHeight: "1.2" }}
            >
              Believe <br/>yourself
            </p>
            <div className="flex items-center gap-2 pt-4 text-white">
              <div>
                <hr className="border-[#F3F3F3] my-2 w-5" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold">Train like a pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="relative flex-1">
        <div className="relative h-full w-full">
          <Image
            src={billede2}
            alt="Billede"
            layout="fill"
            objectFit="cover"
            className="rounded-none" 
          />
          <Link href="/classes">
            <button
              className="absolute bottom-8 right-0 bg-white text-black text-xl md:text-2xl p-4 cursor-pointer opacity-100 rounded-tl-xl rounded-bl-xl rounded-br-none rounded-tr-none"
              style={{
                width: "200px", 
                height: "60px", 
              }}
            >
              Start Training
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}