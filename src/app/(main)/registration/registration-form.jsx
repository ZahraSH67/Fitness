// Brian's code
//Shake Animation from Landrup dans and dinmægler
"use client";
import { useActionState, useEffect, useState } from "react";
import RegistrationAction from "./registration-action";
import LoginStyle from "../login/login-style";

export default function RegistrationForm() {
    const [formState, registrationAction, isPending] = useActionState(RegistrationAction, null);
    const [shakeFields, setShakeFields] = useState({
        firstname: false,
        lastname: false,
        username: false,
        password: false,
        confirmedpassword: false,
    });

    useEffect(() => {
        if (formState?.errors) {
            const newShakes = { ...shakeFields };
            Object.keys(formState.errors).forEach((field) => {
                newShakes[field] = true;
                setTimeout(() => setShakeFields((prev) => ({ ...prev, [field]: false })), 500);
            });
            setShakeFields(newShakes);
        }
    }, [formState]);

    useEffect(() => {
        if (formState?.errors || formState?.error || formState?.success) {
            const timer = setTimeout(() => {
                formState.errors = null;
                formState.error = null;
                formState.success = null;
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [formState]);

    return (
        <article className="flex flex-col justify-center items-center min-h-screen px-4 bg-white">
            <LoginStyle />
            <section className="w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
                    Create an Account
                </h2>
                <form action={registrationAction} noValidate className="flex flex-col gap-3 sm:gap-4">
                    {["firstname", "lastname", "username", "password", "confirmedpassword"].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <input
        // defaultValue={formState?.formData?.[field]}: Henter standardværdien for 
        // feltet fra formState.formData. Hvis brugeren indsender formularen, 
        // og der er en fejl, bevares den tidligere værdi af felterne.
                                defaultValue={formState?.formData?.[field]}

                //  Hvis feltnavnet indeholder ordet "password", er felttypen adgangskode (teksten er skjult). Ellers er felttypen tekst.
                                type={field.includes("password") ? "password" : "text"}
                                name={field}
                                placeholder={`Enter your ${field}...`}
                                className={`text-center w-full h-10 sm:h-12 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F1C40E] transition ${
                                    shakeFields[field] ? "animate-shake border-red-500" : ""
                                }`}
                            />
                            {/* Hvis der er en fejl for det aktuelle felt, vises den første fejl (_errors[0]). */}
                            {formState?.errors?.[field]?._errors[0] && (
                                <span className="text-red-500 text-sm mt-1">{formState.errors[field]._errors[0]}</span>
                            )}
                        </div>
                    ))}

                    <span className="text-red-600 text-center text-sm sm:text-base">{formState?.error}</span>

                    {formState?.success && (
                        <span className="text-green-600 text-lg font-semibold text-center">
                            {formState.success}
                        </span>
                    )}

                    <button
                        type="submit"
                        className="w-full h-10 sm:h-12 bg-[#F1C40E] text-black rounded-full transition-all duration-300 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={isPending}
                    >
                        {/* Hvis værdien af ​​isPending er true, hvilket betyder, at formularen indsendes, vil et loading spinner ikon blive vist i stedet for teksten "Registrer". */}
                        {isPending ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
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
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>
            </section>
        </article>
    );
}

