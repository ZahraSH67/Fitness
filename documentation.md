# Trainer - Projekt Dokumentation

## Projekt Oversigt

**Navn:** Trainer


**Udvikler:** Zahra Shahabi

**Hold:** WU-11  

**GitHub Repo:** [https://github.com/CMK-WU11/svendepr-ve-eud-b-ZahraSH67](https://github.com/CMK-WU11/svendepr-ve-eud-b-ZahraSH67)

**Planing:**  [https://app.clickup.com/9015932220/v/l/li/901509042633](https://app.clickup.com/9015932220/v/l/li/901509042633)

## Tech-stack

I udviklingen af Trainer har jeg brugt følgende teknologistack:

- **Next.js**
- **TailwindCSS**
- **React Icons**
- **Framer Motion**


## Tech-stack
* [**NextJS**](https://nextjs.org)  
Jeg valgte Next.js, fordi det understøtter server-side rendering (SSR), hvilket hjælper med bedre SEO og hurtigere indlæsning af siderne. Det er en anden tilgang end Create React App, som fokuserer på client-side rendering. Next.js gør det nemt at lave både dynamiske og statiske sider. Det gør også routing og API-håndtering simpelt og kræver næsten ingen opsætning, hvilket gjorde det til det bedste valg for mig.

* [**TailwindCSS**](https://tailwindcss.com/)  
Tailwind CSS blev valgt til dette projekt, fordi Tailwind CSS gør styling meget enklere og hurtigere sammenlignet med traditionel CSS. I stedet for at skrive lange og komplekse CSS-regler, kan du anvende klasser direkte på HTML-elementerne, hvilket gør det lettere at styre designet. Det kræver mindre tid at opdatere eller ændre stilarter, da alt er mere fleksibelt og kan håndteres hurtigt uden at skulle gå tilbage til en separat CSS-fil. Dette gør det muligt at skabe responsivt design meget nemt, og det er let at integrere med moderne frameworks ligsom Next.js.


* [**React Icons**](https://react-icons.github.io/react-icons/)  
Jeg valgte React Icons, fordi det gør det nemt at bruge ikoner i et React-projekt eller Next project. Med React Icons kan jeg arbejde med ikoner som komponenter, hvilket gør det nemt at ændre størrelsen, farven og andre egenskaber direkte i koden.  

  Sammenlignet med andre ikonpakker som Font Awesome eller Material Icons, er React Icons lettere at bruge, fordi man ikke skal arbejde med CSS-klasser. I stedet bruger man React-komponenter, hvilket gør det hurtigere og nemmere at tilpasse ikonerne.


* [**Framer Motion**](https://www.npmjs.com/package/framer-motion)  
Jeg valgte Framer Motion til mit Next.js-projekt, fordi det gør animationer nemme at implementere og meget fleksible. Det er designet specielt til React, så det integreres perfekt med Next.js. Framer Motion giver mulighed for at tilføje dynamiske animationer hurtigt og intuitivt, uden at gøre koden kompleks.  

  Sammenlignet med andre animationsbiblioteker som CSS-animationer , er Framer Motion mere brugervenligt i et React- og Next.js-miljø. Det giver mig mulighed for at skabe komplekse animationer på en enkel måde, og det holder koden ren og let at vedligeholde.


## Kode-eksempel  

  Denne kode definerer en tilbage-knap i en Next.js-applikation, hvor funktionaliteten afhænger af, hvilken side brugeren befinder sig på.

  🔹 Navigation & URL-håndtering:

  Den bruger useRouter fra next/navigation til at håndtere navigationen og usePathname til at hente den aktuelle URL-sti.

  🔹 Logik for aktivering:

  Hvis brugeren er på "/schedule", "/search" eller en dynamisk klasse-side (f.eks. "/classes/123"), bliver knappen aktiv og kan klikkes for at navigere til "/classes".
  Hvis brugeren er på "/classes", "/login" eller "/registration", bliver knappen deaktiveret.

  🔹 Styling & UI:

  Når knappen er aktiv, får den en orange farve og en let "hover"-effekt.
Når knappen er inaktiv, bliver den grå og kan ikke klikkes.
Der vises en tilbage-pil (IoCaretBack) ved aktiv tilstand og en opadgående pil (IoCaretUp) ved inaktiv tilstand.
Kort sagt sørger koden for, at brugeren kun kan navigere tilbage, hvis det giver mening i forhold til sidens kontekst. 

[components navigation BackButton](/src/components/navigation/BackButton.jsx)
```js
"use client";

import { useRouter, usePathname } from "next/navigation"; 
import { IoCaretBack, IoCaretUp } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();


  const isSchedule = pathname === "/schedule";
  const isSearch = pathname === "/search";
  const isDynamicClass = pathname.startsWith("/classes/") && pathname.split("/").length === 3;  
  const isDisabledPage = ["/classes", "/login", "/registration"].includes(pathname);

  const isActive = isSchedule || isSearch || isDynamicClass;

  const handleClick = () => {
    if (isActive) {
      router.push("/classes");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabledPage}
      className={`
        flex items-center gap-2 transition-transform
        ${isActive ? "text-orange-500 hover:scale-105" : "text-gray-400 cursor-not-allowed"}
      `}
    >
      {isActive ? (
        <>
          <IoCaretBack className="text-2xl" />
          <span className="text-2xl">Back</span>
        </>
      ) : (
        <IoCaretUp className="text-2xl" />
      )}
    </button>
  );
}




```

## VALG FRIOPGAVE
Jeg har valgt at lave den valgfri opgave A og B


## REFLEKTION
Man kunne tilføje en darkmode og light mode switch, så brugeren selv kan vælge darkmode og lightmode.
Der kunne tilføjes mulighed for login for trænerne, så kan de tilgå deres holdoversigt med tilmeldte inden på schedule.
Tilføje en side med oversigter over hver træners hold, så når man søger på en specifik træner på search-siden, sendes brugeren videre til den valgte træners hold.
