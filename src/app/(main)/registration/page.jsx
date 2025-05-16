import RegistrationForm from "./registration-form";
import Navigation from "@/components/navigation/Navigation";
export default function Registration() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Navigation title="Registration" />
            <div className="w-full max-w-md p-4">
                <RegistrationForm />
            </div>
        </div>
    );
}
