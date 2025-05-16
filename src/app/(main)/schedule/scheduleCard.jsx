//code fra landrup dans
"use client";
export default function ScheduleCard ({ userClass }){
  return (
    <div>
      <section className="rounded-[12px] w-[335px] h-[100px] flex justify-start items-center pl-5">
        <div className="flex gap-[20px] flex-col py-4 border-b-2 border-dotted border-black w-[300px]">
          <div className="text-xl leading-4 text-[#070707] flex justify-between items-center">
            <span >{userClass.classDay}</span>
            <span >{userClass.classTime}</span>
          </div>
          <h2 className="text-2xl">
            {userClass.className}
          </h2>
        </div>
      </section>
    </div>
  );
};


