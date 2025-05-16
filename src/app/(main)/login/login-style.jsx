export default function LoginStyle() {
  return (
      <div className="relative h-[200px] sm:h-[300px] w-full">
          <div className="absolute top-[40px] sm:top-[74px] left-[20px] sm:left-[46px]">
              <p
                  className="text-[#F1C40E] font-bold tracking-normal"
                  style={{
                      fontSize: "36px",
                      lineHeight: "40px",
                      textAlign: "left",
                      fontFamily: "Poppins, sans-serif",
                      letterSpacing: "0px",
                      color: "#F1C40E",
                      opacity: 1,
                      width: "200px",
                      height: "auto",
                  }}
              >
                  Believe yourself
              </p>
          </div>
          <div className="absolute top-[120px] sm:top-[211px] left-[20px] sm:left-[46px] mt-4">
              <div className="flex items-center gap-[10px]">
                  <p className="text-[16px] sm:text-[20px] font-bold">Train like a pro</p>
              </div>
          </div>
      </div>
  );
}