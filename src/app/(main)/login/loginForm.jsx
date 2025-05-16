// code fra Landrup dans og dinmægler
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginStyle from "./login-style";
import { useAuth } from "@/app/auth/context";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogInFrom(){
  const { login } = useAuth();
  const router = useRouter();
//Initialisering af useFrom til formularhånderting
// register: Denne funktion bruges til at binde form input til react-hook-form.
// handleSubmit: Den funktion, der udføres, når formularen indsendes.
// formState.errors: Indeholder validation error af form input.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // isLoading: Indikerer, at login-anmodningen behandles (for at vise indlæsning).
  // loginError: For at vise en login-fejlmeddelelse.
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError("");
    try {
      await login(data.username, data.password);
      router.push("/schedule");
    } catch (error) {
      console.error("Login fejlede: ", error);
      setLoginError("Invalid username or password"); 
      setIsLoading(false);
    }
  };

  return (
    <article >
      <LoginStyle />
      <section className="pl-[20px]">


      {/* Denne kodelinje opretter en formular i React og bruger react-hook-form-funktionerne
       til at håndtere formularen og validere felterne. */}
       {/* Hvad er onSubmit?
onSubmit er en  event handler, der kaldes, når brugeren indsender formularen 
(for eksempel ved at klikke på indsend-knappen eller trykke på Enter).

Hvad er handleSubmit?
handleSubmit er en funktion, der modtages fra useForm hook i react-hook-form biblioteket. 
Denne funktion gør to hovedting:

Feltvalidering: Inden formularen indsendes, kontrollerer den felterne baseret 
på valideringsreglerne defineret af registret.

Kaldning af onSubmit-funktionen: Hvis alle felter er gyldige, kaldes onSubmit-funktionen.

Hvad er onSubmit?
onSubmit er en funktion, jeg har defineret, og som skal kaldes,
 når formularen er indsendt. Denne funktion bruges typisk til at behandle formulardata (f.eks. sende dem til serveren).

Hvordan det virker?
Brugeren indsender formularen.

handleSubmit validerer felterne.

Hvis felterne er gyldige, kaldes onSubmit-funktionen.

Valideringsfejl vises, hvis felterne er ugyldige. */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("username", {
              required: "Username is required",
            })}
            placeholder="Enter your username..."
            className={`text-center w-[335px] h-[50px] bg-[#FBFBFB] border ${
              errors.username ? "border-red-500" : "border-[#D4D4D4]"
            } rounded-full opacity-100`}
            disabled={isLoading}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password..."
            className={`text-center w-[335px] h-[50px] bg-[#FBFBFB] border ${
              errors.password ? "border-red-500" : "border-[#D4D4D4]"
            } rounded-full opacity-100`}
            disabled={isLoading}
          />

          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          {loginError && (
            <div className="text-red-500 text-sm">{loginError}</div>
          )}
          <button
            type="submit"
            className="w-[334px] h-[50px] bg-[#F1C40E] rounded-full opacity-100 flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              </>
            ) : (
              "LOG IN"
            )}
          </button>
          <div className="mt-4 flex justify-center items-center space-x-2 text-sm">
          <p className="text-gray-600">Don't have an account?</p>
          <Link href="/registration" className="text-blue-500 font-semibold hover:underline">
            Sign up
          </Link>
        </div>
        </form>
      </section>
    </article>
  );
};








