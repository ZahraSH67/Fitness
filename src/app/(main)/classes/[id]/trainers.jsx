import Image from "next/image";

export default async function Trainers ({ data }){
  if (data != null) {
    const trainerId = data.trainer.id;
    const response = await fetch(
      `http://localhost:4000/api/v1/trainers/${trainerId}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const trainerData = await response.json();

    return (
      <div>
        <section className="w-[300px] flex  flex-row gap-[16px] items-center">
          <div className="w-[88px] h-[88px] relative rounded-xl overflow-hidden ">
            {trainerData && trainerData.asset.url && (
              <Image
                src={trainerData.asset.url}
                width={88}
                height={88}
                objectFit="cover"
                alt="trainer's picture"
              />
            )}
          </div>
          <div>
            <h2
              style={{
                fontSize: "22px",
                color: " #0A0A0A",
                fontFamily: "arial",
              
              }}
            >
              {trainerData.trainerName}
            </h2>
          </div>
        </section>
      </div>
    );
  } else {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    const response = await fetch(`http://localhost:4000/api/v1/trainers`, {
      next: {
        revalidate: 60,
      },
    });
    const allTrainersData = await response.json();

    return (
      <div>
        <section className="w-[214px] flex  flex-col gap-[16px] items-center">
          <div className="flex flex-col gap-[20px]">
            {allTrainersData.map((trainer) => (
              <div
                key={trainer.id}
                className="flex justify-center items-center gap-[20px]"
              >
                <div className="w-[88px] h-[88px] relative rounded-xl overflow-hidden ">
                  <Image
                    src={trainer.asset.url}
                    width={88}
                    height={88}
                    objectFit="cover"
                    alt="trainer's picture"
                  />
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "16px",
                      color: " #0A0A0A",
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                    }}
                  >
                    {trainer.trainerName}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
};


