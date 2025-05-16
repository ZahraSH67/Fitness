//code fra landrup dans

"use client";
import { useAuth } from "@/app/auth/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ScheduleCard from "./scheduleCard";

export default function ScheduleDetails() {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    }
  }, [currentUser, loading, router]);

  if (loading || isLoading) {
    return <p className="text-center text-lg font-bold mt-10">Loading...</p>;
  }

  if (!currentUser || !currentUser.classes || currentUser.classes.length === 0) {
    return <p className="text-center text-lg mt-10">You have not enrolled in any classes yet.</p>;
  }

  return (
    <article className="w-[335px] mx-auto">
      <h1 className="text-5xl text-center mt-4 mb-8">My Schedule</h1>
      <section className="flex flex-col gap-4">
        {currentUser.classes.map((userClass) => (
          <div key={userClass.id}>
            {/* passHref:Hvis du bruger en brugerdefineret komponent som underordnet <Link>, 
            sender Next.js ikke automatisk href til den. Dette skyldes, at Next.js ikke ved, 
            hvordan din brugerdefinerede komponent skal bruge href. Ved at bruge passHref siger 
            vi til Next.js om at den skal sende href til den underordnede(børn) komponent. */}
            <Link href={`/classes/${userClass.id}`} passHref>
              <ScheduleCard userClass={userClass} />
            </Link>
          </div>
        ))}
      </section>
    </article>
  );
}