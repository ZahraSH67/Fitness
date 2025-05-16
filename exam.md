**Client-side og Server-side Komponenter**
Client-side Komponenter
Client-side komponenter er dele af en webapplikation, der kører i brugerens browser. Disse komponenter er typisk skrevet i JavaScript og bruges til at håndtere interaktioner på brugerens side, såsom klik, inputvalidering og dynamisk opdatering af indhold uden at genindlæse hele siden. Eksempler på client-side komponenter inkluderer React, Angular og Vue.js.

Server-side Komponenter
Server-side komponenter er dele af en webapplikation, der kører på serveren. Disse komponenter genererer HTML, CSS og JavaScript, som derefter sendes til brugerens browser. Server-side komponenter bruges ofte til at håndtere kompleks logik, databaseforespørgsler og sikkerhedsrelaterede opgaver. Eksempler på server-side komponenter inkluderer PHP, Ruby on Rails og ASP.NET.

Sammenligning af Client-side og Server-side Komponenter
Fordele ved Client-side Komponenter
Interaktivitet: Client-side komponenter gør det muligt at oprette meget interaktive og dynamiske brugergrænseflader.

Hurtig respons: Efter den indledende indlæsning kan applikationen reagere hurtigt på brugerhandlinger uden at skulle kontakte serveren.

Reduceret serverbelastning: Da meget af logikken kører på klienten, reduceres belastningen på serveren.

Ulemper ved Client-side Komponenter
Indledende indlæsningstid: Den indledende indlæsningstid kan være længere, da hele applikationen skal hentes og køres i browseren.

SEO-udfordringer: Søgemaskiner kan have svært ved at indeksere dynamisk indhold, der genereres af client-side komponenter.

Sikkerhed: Da koden kører på klienten, kan den være mere sårbar over for angreb.

Fordele ved Server-side Komponenter
SEO-venlig: Server-side genereret indhold er nemmere for søgemaskiner at indeksere.

Sikkerhed: Følsom logik og data kan holdes på serveren, hvilket gør det sværere for angribere at få adgang til dem.

Konsistens: Da indholdet genereres på serveren, er det mere konsistent på tværs af forskellige enheder og browsere.

Ulemper ved Server-side Komponenter
Manglende interaktivitet: Server-side komponenter kan være mindre interaktive, da hver handling kræver en round-trip til serveren.

Serverbelastning: Da al logik kører på serveren, kan det øge belastningen på serveren, især ved mange samtidige brugere.

Langsommere respons: Hver handling, der kræver serverinteraktion, kan føre til en forsinkelse i brugeroplevelsen.

Static Site Generation (SSG)
Static Site Generation (SSG) er en metode til at generere statiske HTML-filer på serveren under byggetiden. Disse filer kan derefter serveres til brugeren uden yderligere behandling på serveren. SSG bruges ofte til at oprette hurtige, sikre og SEO-venlige hjemmesider.

Fordele ved SSG
Hastighed: Statiske filer indlæses meget hurtigt, da de ikke kræver server-side behandling.

Sikkerhed: Da der ikke kører dynamisk kode på serveren, reduceres risikoen for sikkerhedsbrud.

SEO: Statiske sider er nemme for søgemaskiner at indeksere.

Ulemper ved SSG
Manglende dynamisk indhold: SSG er ikke velegnet til applikationer, der kræver hyppige opdateringer eller dynamisk indhold.

Byggetid: Ved store hjemmesider kan byggetiden være lang, da alle sider skal genereres på forhånd.

Konklusion
Valget mellem client-side og server-side komponenter afhænger af applikationens behov. Client-side komponenter er ideelle til interaktive applikationer, mens server-side komponenter er bedre til indhold, der kræver høj sikkerhed og SEO. SSG er en fremragende løsning til statiske hjemmesider, der kræver høj hastighed og sikkerhed.

**Optional Chaining** er god til nested properties og undgå error, hvis en dele af chaining er undefined eller null. fx user.address.number, hvis address er undifined, user == undifined, så undgå error. 

✅ Destrukturering bruges til at udtrække værdier fra arrays og objekter.
✅ Spread Operator bruges til at kombinere, kopiere eller udvide arrays og objekter.

**Hvad er en callback function?**
En tilbagekaldsfunktion er en funktion, der:
Det sendes som et argument til en anden funktion.
Kaldes efter en asynkron operation eller en specifik hændelse er afsluttet.

**revalidate:60**
asynkron før funktionen gør den asynkron.
await får funktionsudførelsen til at vente på resultatet af løftet.
try/catch bruges til at håndtere fejl.

Når genvalideringsværdien er indstillet til 60:

Next.js sender anmodningen og cacher resultatet.
I op til 60 sekunder vil eventuelle yderligere anmodninger modtage cachelagrede data i stedet for at sende dem til serveren.
Efter 60 sekunder vil en indgående anmodning hente nye data fra serveren og opdatere cachen.
Ydeevneoptimering: Ved at reducere antallet af direkte anmodninger til serveren øges sideindlæsningshastigheden.
✅ Reducerer presset på serveren: Faste data skal ikke læses fra serveren hver gang.
✅ Bedre kontrol over opdateringstid (genvalidering): Du kan angive, hvor ofte data opdateres.



**useState:** useState er en af ​​de grundlæggende React-hooks, der bruges til at styre tilstand i funktionelle komponenter. I Next.js, som er et React-baseret framework, bruges useState på samme måde og på samme måde, som det er i React. useState bruges til at tilføje tilstand til funktionelle komponenter.

Tilstand tillader komponenter at administrere dynamiske data og re-render komponenten, hvis den ændres.
const [state, setState] = useState(initialValue);

state: Den aktuelle værdi af staten.

setState: En funktion til at opdatere tilstand.
useState:  Denne funktion kaldes og modtager startværdien af ​​tilstand som et argument (her en tom streng "").

[brugernavn, sætBrugernavn]: Dette er en destrukturering af det array, som useState returnerer.
2. Hvorfor er useState en funktion?
useState er en funktion, fordi:

Henter startværdien af ​​tilstand: Du kan overføre startværdien af ​​tilstand som et argument til den.

Returnerer et array: Dette array indeholder to elementer: den aktuelle værdi af tilstand og funktionen til at opdatere tilstand.

initialValue: Den initiale værdi, som tilstanden oprindeligt tager.

Vigtige punkter om useState
1. Startværdi
Starttilstandsværdien bruges kun på den første rendering af komponenten. I efterfølgende gengivelser ignoreres denne værdi.

Startværdien kan være af enhver datatype: tal, streng, matrix, objekt og endda null eller udefineret.

2. Tilstandsopdatering
For at opdatere tilstand skal du bruge en funktion, der returnerer useState (f.eks. setCount).

Direkte opdatering af tilstand (f.eks. antal = 5) virker ikke og forårsager en fejl.

3. Gengive
Hver gang tilstanden opdateres, gengives komponenten igen for at afspejle ændringerne.

4. Angiv i Next.js
I Next.js fungerer useState præcis som i React. Der er ingen forskel i dens ydeevne.

Hvis du bruger useState i komponenter på klientsiden, skal du sørge for at din komponent er gengivet på klientsiden (ved at bruge "brug klient";).

useState er kun egnet til simple, uafhængige stater. Hvis din tilstand er mere kompleks, eller du har brug for tilstandsstyring på et højere niveau, skal du muligvis bruge Reducer eller Context API.
Ved at bruge useState kan du definere tilstand, opdatere den og afspejle ændringerne i brugergrænsefladen(UI)



**useForm**
useForm er en populær hook fra react-hook-form-biblioteket, der bruges til at håndtere formularer i Next.js og React-projekter. Denne krog optimerer formydelsen og reducerer behovet for manuelt at administrere inputtilstanden.

useForm er en funktion, der returnerer flere nyttige egenskaber til formularstyring. 


**useAuth**
I Next.js udføres autentificeringsstyring normalt ved hjælp af useAuth. UseAuth eksisterer dog ikke som en indbygget hook i Next.js, men skal implementeres ved hjælp af forskellige biblioteker såsom next-auth eller custom-built. I denne forklaring vil vi udforske de to vigtigste måder at bruge useAuth på:

Brug af useAuth i next-auth (et færdigt bibliotek til godkendelse)
Opret en brugerdefineret useAuth (for fuld kontrol over godkendelse)

**useRouter**
UseRouter-hook i Next.js er et kraftfuldt værktøj til styring af ruter og navigation.

1. Når vi bruger useRouter, kan vi få ruteoplysningerne via router.query. Antag, at vi har en dynamisk side ved navn [id].js på sider:
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>پست شماره {id}</h1>;
}

2. Navigation mellem sider (router.push og router.replace)
useRouter giver os mulighed for at redirect til andre sider.

1) Brug af router.push (tilføj browserhistorik): I dette tilfælde kan brugeren vende tilbage til den forrige side med knappen "Tilbage".
2) Brug af router.replace(uden at tilføje historik): Hvis du ikke ønsker, at brugeren skal kunne vende tilbage til den forrige side, skal du bruge replace:

**useEffect**


[app (main) login loginForm](src/app/(main)/login/lofinForm.jsx)
```js

// code fra Landrup dans og dinmægler
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginStyle from "./login-style";
import { useAuth } from "@/app/auth/context";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogInFrom(){
//  useAuth(): Denne hook indeholder sandsynligvis autentificeringsrelaterede funktioner, og her er login-funktionen afledt fra den.
// Vi har en funktion kaldet login i context, som vi vil udtrække her ved hjælp af denne kode.   
  const { login } = useAuth();

//   useRouter(): For at redirect siden efter vellykket login.
  const router = useRouter();

//   Initialisering af useFrom til formularhånderting
// register: Denne funktion bruges til at binde form input til react-hook-form.
// handleSubmit: Den funktion, der udføres, når formularen indsendes.
// formState.errors: Indeholder formularinputvalideringsfejl.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

// isLoading: Indikerer, at login-anmodningen behandles (for at vise loading).
// loginError: For at vise en login-fejlmeddelelse.
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");


// onSubmit-funktion til at håndtere formularindsendelse
// data indeholder formularens inputoplysninger (brugernavn og adgangskode).
// Først er isLoading sat til true, og loginError er ryddet.
// Den forsøger at logge på brugeren (await login(data.brugernavn, data.password)):
// Hvis det lykkes, vil du blive redirect til /schedule-siden.
// Hvis login mislykkes, vises en fejlmeddelelse, og isLoading indstilles til falsk igen.
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
// Start af UI-komponentsektionen
  return (
    <article >
      <LoginStyle />
      <section className="pl-[20px]">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
// register("brugernavn", { påkrævet: "Brugernavn er påkrævet" }):
// Brugernavn er påkrævet, og hvis det er tomt, vises en fejlmeddelelse.
            {...register("username", {
              required: "Username is required",
            })}
            placeholder="Enter your username..."
            className={`text-center w-[335px] h-[50px] bg-[#FBFBFB] border ${
              errors.username ? "border-red-500" : "border-[#D4D4D4]"
            } rounded-full opacity-100`}
// Denne kodelinje (disabled={isLoading}) er en egenskab (prop) i React, der føjes til et element (f.eks. en <input> eller <button>) for at kontrollere, om det element er deaktiveret. Her anvendes denne egenskab betinget og afhænger af en tilstand kaldet isLoading. Nedenfor vil jeg forklare denne kodelinje i detaljer:

// 1. Deaktiveret mål
// Disabled-attributten er en standard HTML-attribut, der bruges til at deaktivere et element (såsom <input>, <button>, <select> osv.).

// Når et element er inaktivt:

// Brugeren kan ikke interagere med den (f.eks. klik på en knap eller skriv i et inputfelt).

// Typisk ændres elementets udseende (det bliver f.eks. nedtonet) for at angive, at det er deaktiveret.

// isLoading: er en tilstand, der almindeligvis bruges til at angive indlæsningsstatus.

// Hvis isLoading er sand, er elementet deaktiveret.

// Hvis isLoading er falsk, aktiveres elementet.
            disabled={isLoading}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}
// This code creates a Password Input field in a form and uses the react-hook-form library to handle and validate the field. It also includes displaying validation errors and login errors. Below, I will explain each part of this code in detail:
// register: Denne funktion bruges af react-hook-form til at registrere inputfeltet og validere det.
// "password": Feltnavn (navnet tildelt dette felt i formularen).
// { required: "Adgangskode er påkrævet" }: Valideringsregler. Her er adgangskodefeltet obligatorisk, og hvis det er tomt, vil fejlmeddelelsen "Password er påkrævet" blive vist.
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password..."
            className={`text-center w-[335px] h-[50px] bg-[#FBFBFB] border ${
              errors.password ? "border-red-500" : "border-[#D4D4D4]"
            } rounded-full opacity-100`}
            disabled={isLoading}
          />
            // errors.password
            // Denne værdi modtages fra react-hook-form og angiver valideringsfejl relateret til password feltet.Hvis password feltet er tomt, vil errors.password indeholde et objekt med en fejlmeddelelse.
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

```



[app (main) auth context](src/app/(main)/auth/context.jsx)
```js
//Code fra Landrup dans

// Denne kode opretter en godkendelseskontekst i React, der logger brugere ind og ud og administrerer deres oplysninger.
"use client";

// React: Til oprettelse af React-komponenter.
// createContext: At skabe en global kontekst, der kan bruges i hele applikationen.
// useContext: For at bruge værdier gemt i konteksten.
// useState: For at administrere intern tilstand, såsom brugeroplysninger.
// useEffect: for at udføre sidekode (f.eks. få information fra LocalStorage)
import React, { createContext, useContext, useState, useEffect } from "react";

// Denne linje opretter en ny kontekst, hvis standardværdi er null.
// Denne kontekst gemmer information relateret til brugergodkendelse.
// Denne kontekst vil være tilgængelig i alle dele af programmet.
const AuthContext = createContext(null);


// Dette er en komponent, der styrer godkendelsesoplysninger.
// { children } betyder, at denne komponent vil være en forælder for andre dele af applikationen.
export const AuthProvider = ({ children }) => {

// Denne state bruges til at gemme oplysninger om den aktuelle bruger, der er logget på.
// null: Hvis brugeren ikke er logget ind, er værdien af ​​currentUser null.
// Et objekt: Hvis brugeren er logget ind, vil denne tilstand indeholde brugeroplysninger (såsom navn, e-mail, rolle osv.).
  const [currentUser, setCurrentUser] = useState(null);

// Denne state bruges til at gemme godkendelsestokenet. Tokens modtages typisk fra serveren, efter at en bruger er logget ind og bruges til at få adgang til beskyttede ressourcer.
// null: Hvis brugeren ikke er logget ind, eller der ikke er et gyldigt token, er tokenværdien null.
// En streng: Hvis brugeren er logget ind, vil denne tilstand indeholde godkendelsestokenet.
  const [token, setToken] = useState(null);

// Denne tilstand bruges til at styre indlæsningstilstanden. Denne tilstand bruges typisk til at angive, om godkendelsesrelaterede data (såsom en bruger eller token) indlæses.
// true: Hvis data indlæses, er værdien af ​​indlæsning (loading) true.
// false: Hvis dataene er blevet indlæst, er værdien af ​​indlæsningen false.
  const [loading, setLoading] = useState(true);


// Denne kode kontrollerer, om brugeren allerede er logget ind. Hvis brugeren er logget ind, hentes godkendelsestokenet fra localStorage, og brugeroplysningerne hentes fra serveren ved hjælp af dette token.

// useEffect: Denne hook bruges til at udføre bivirkninger(side effects) såsom at hente data fra serveren, oprette abonnementer eller manipulere DOM.

// []: Afhængighedsarrayet(dependency array) er tomt, hvilket betyder, at denne useEffect kun udføres én gang efter den første gengivelse af komponenten.
  useEffect(() => {


// localStorage: En lagerplads i browseren, der gemmer data permanent (selv efter lukning af browseren).
// getItem("token"): Denne funktion henter værdien for nøglen "token" fra localStorage.
// Hvis tokenet findes, returneres dets værdi som en streng.
// Hvis tokenet ikke eksisterer, returneres null.
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
//Hvie token finde:
// JSON.parse(storedToken): Tokenet gemmes i localStorage som en streng. JSON.parse bruges til at konvertere det til et objekt.
      const parsedToken = JSON.parse(storedToken);
// setToken(parsedToken): Denne funktion opdaterer token state og giver det parsedToken-værdien.
      setToken(parsedToken);
fetchUserData(parsedToken.userId, parsedToken.token)
// Denne funktion (som sandsynligvis er defineret andetsteds) bruges til at hente brugeroplysninger fra serveren.
// parsedToken.userId: Bruger-id'et, der er gemt i tokenet.
// parsedToken.token: Godkendelsestokenet, der bruges til at sende anmodningen til serveren.
      fetchUserData(parsedToken.userId, parsedToken.token);
    } else {
// Hvis tokenet ikke findes, sætter det loadingsværdien til falsk.
      setLoading(false);
    }
  }, []);


// Denne kode definerer en async-funktion kaldet fetchUserData, der modtager to parametre: userId og authToken. Denne funktion bruges til at hente brugeroplysninger fra en API.
// async: Dette nøgleord angiver, at fetchUserData-funktionen er en asynkron funktion. Det betyder, at funktionen kan bruge await til at vente, mens den udfører asynkrone operationer såsom netværksanmodninger.
  async function fetchUserData(userId, authToken) {

// try: Denne blok bruges til at udføre kode, der kan forårsage en fejl. Hvis der opstår en fejl, overføres kontrollen til catch blokken.
    try {

// await: Dette nøgleord får funktionsudførelsen til at pause, indtil promise, der er knyttet til fetch, resolves. Derefter gemmes resultatet i response.
// fetch: Denne funktion bruges til at sende en HTTP-request til serveren. Her sendes en GET-request til adressen http://localhost:4000/api/v1/users/${userId}.
// metode: "GET": Specificerer typen af ​​anmodning, som her er GET.
// header: Denne sektion indeholder anmodningsoverskrifterne:
// Autorisation: Bærer ${authToken}: Placerer godkendelsestokenet i autorisationsoverskriften.
// "Content-Type": "application/json": Specificerer indholdstypen for anmodningen, som her er JSON.
      const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

// response.ok: Denne værdi er sand, hvis HTTP-svarstatus er i intervallet 200 til 299 (dvs. anmodningen lykkedes). Hvis response.ok er falsk, opstår der en fejl med beskeden "Kunnet ikke hente brugerdata".
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
// response.json(): Denne funktion konverterer reponse til et JSON-objekt. Da denne funktion også returnerer en promise, bruges await til at vente, indtil konverteringen er fuldført.
      const userData = await response.json();
// Hvis oplysningerne blev modtaget med succes, Den currentUser er opdateret.
// setCurrentUser: Denne funktion (som sandsynligvis bruger et tilstandsstyringsbibliotek som React) bruges til at gemme brugeroplysninger og godkendelsestoken.
// ...userData: Denne syntaks (spread-operator) kopierer alle egenskaberne for userData-objektet til det nye objekt.
// token: authToken: Godkendelsestokenet tilføjes også til userDataobjektet.
      setCurrentUser({
        ...userData,
        token: authToken, 
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    } 
// finally: Denne blok udføres uanset om der opstår en fejl eller ej. Her kaldes setLoading(false)-funktionen, som sandsynligvis bruges til at ændre loading-tilstanden til false.
    
    finally {
      setLoading(false);
    }
  }
// Denne kode definerer en asynkron funktion kaldet login, der modtager to parametre: brugernavn og adgangskode. Denne funktion bruges til at udføre brugerlogin-processen.
  async function login(username, password) {
    // setLoading(true): Denne funktion (bruger sandsynligvis et tilstandsstyringsbibliotek som React) bruges til at indstille indlæsningstilstanden til sand. Dette bruges typisk til at vise en spinner- eller "loading"-besked til brugeren.
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
// body: Dette afsnit indeholder de data, der sendes til serveren. Her konverteres brugernavnet og adgangskoden til JSON-format ved hjælp af JSON.stringify.
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

// authData: Dette objekt indeholder data returneret fra serveren, såsom userId, token og validUntil.
      const authData = await response.json();
// tokenData: Dette objekt indeholder de oplysninger, der er nødvendige for at godkende brugeren:
// bruger-id: Bruger-id.
// token: Godkendelsestoken.
// gyldig Indtil: Tokens udløbsdato.
      const tokenData = {
        userId: authData.userId,
        token: authData.token,
        validUntil: authData.validUntil,
      };

// setToken(tokenData): Denne funktion (bruger sandsynligvis et tilstandsstyringsbibliotek som React) bruges til at gemme tokenet i state.
// localStorage.setItem("token", JSON.stringify(tokenData)): Denne kode gemmer tokenet i browserens localStorage, så tokenet er tilgængeligt, selv efter siden er opdateret.
        setToken(tokenData);
        localStorage.setItem("token", JSON.stringify(tokenData));

    // fetchUserData(authData.userId, authData.token): Denne funktion (sandsynligvis defineret andetsteds) bruges til at få brugeroplysninger ved hjælp af userId og token.
      await fetchUserData(authData.userId, authData.token);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

// Denne funktion logger brugeren ud af systemet og rydder currentUser og token.
// Udfører localStorage.removeItem("token") for at fjerne tokenet fra hukommelsen.
  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

// AuthContext.Provider: Dette afsnit gør godkendelsesoplysninger tilgængelige i hele applikationen.
// AuthContext.Provider: Dette er en kontekstudbyder, der har alle godkendelsesrelaterede oplysninger.
// værdi={{ ... }}: Dette objekt indeholder værdier, der vil være tilgængelige i alle underkomponenter (dvs. børn).

// Værdierne i værdi
// Disse værdier er gemt i AuthContext og kan læses hvor som helst i applikationen:

// Forklaringsværdi
// currentUser Log-in brugeroplysninger (oprindeligt null)
// setCurrentUser En funktion til at ændre brugeroplysninger
// token Godkendelsestoken brugt til API-anmodninger
// loading Indlæses brugeroplysningerne stadig? (sandt eller falsk)
// login En funktion, der logger brugeren ind i systemet.
// logout En funktion, der logger brugeren ud af systemet.
// 🔹 Hvad er børn?
// Disse børn tillader enhver komponent placeret inde i <AuthProvider> at få adgang til godkendelsesoplysningerne.
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

Dette er en tilpasset hook, der gør arbejdet med AuthContext nemmere.
Denne værdi får direkte AuthContext.Provider-oplysningerne.
Hvis AuthProvider er til stede omkring en komponent, vil kontekstværdien være { currentUser, token, login, logout, ... }.
Hvis der ikke er nogen AuthProvider omkring denne komponent, vil kontekstværdien være udefineret.
I dette tilfælde kaster programmet en fejl for at forhindre mulige problemer.
Dette hjælper med at forhindre fejl.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

// Context: Returnerer alle værdier i AuthContext.Provider.
// Men hvorfor returnerer den currenUser og token separat igen?
// Dette gør nøgleværdier klarere og mere tilgængelige, når du bruger useAuth().
// For eksempel kan du i en anden komponent nemt få disse værdier
  return {
    ...context,
    currentUser: context.currentUser,
    token: context.token, 
  };
};
```



[app (main) search searchInput](src/app/(main)/search/searchInput.jsx)
```js

// Denne komponent implementerer et søgefelt for klasser. Ved at indtaste input, vises en liste over klasser, der indeholder søgetermen. Den gennemsnitlige score for hver klasse modtages også fra serveren og vises.
"use client";

// useState til at administrere tilstand såsom søgeinputværdi og filtrerede data.
// useEffect til at håndtere bivirkninger (såsom API-anmodninger).
// FiSearch bruger react-ikoner-biblioteket til at vise et forstørrelsesglasikon i søgefeltet.
// ClassesDisplay er en komponent, der bruges til at vise klasseinformation.
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ClassesDisplay from "../classes/classesDisplay";

// export default: Denne erklæring angiver, at denne funktion (eller komponent) betragtes som standardeksporten fra denne fil. Det betyder, at når denne fil importeres et andet sted, vil denne funktion være tilgængelig som standard.

// Parameter { classes }: Dette afsnit viser, at SearchInput-funktionen modtager et objekt kaldet props og udtrækker classes-egenskaben fra det. Dette gøres ved hjælp af Destructuring Assignment.
// props: I React er props (forkortelse for egenskaber) data, der overføres fra en forælder til en underordnet komponent. Her er classes en af ​​disse data.
export default function SearchInput({ classes }) {

// searchTerm → Gemmer den indtastede(typed) værdi i søgefeltet. (Første "")
// filteredData → gemmer klasser filtreret baseret på søgeværdien. (Første [])
// rating → Gemmer den gennemsnitlige rating af klasser. (Et {} objekt, der knytter klasse-id'et til ratingsværdien.)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [ratings, setRatings] = useState({});


// Denne kode er en useEffect in React, der bruges til at filtrere data baseret på en søgeterm (searchTerm).
// useEffect(() => { ... }, [søgeTerm, klasser]): Denne linje definerer en useEffect. useEffect er en hook i React, der bruges til at udføre sidekode (såsom asynkrone operationer, tilstandsændringer eller arbejde med DOM).
// Denne useEffect afhænger af to variabler: searchTerm og klasser. Når værdien af ​​disse to variabler ændres, udføres koden i useEffect igen.
  useEffect(() => {
// Denne linje kontrollerer, om searchTerm er tom eller ej. Hvis searchTerm ikke er tom, udføres koden inde i if-blokken. Ellers kaldes setFilteredData([]), hvilket får filteredData til at blive sat til et tomt array. Hvis brugeren ikke har indtastet noget i søgefeltet, vil der ikke blive vist nogen resultater.


// const resultater = (Array.isArray(klasser) ? klasser: []).filter(...): Denne linje definerer en variabel kaldet resultater, der gemmer resultatet af filtrering af dataene.

// Array.isArray(klasser) ? klasser: []: Dette afsnit kontrollerer, om klasser er et array eller ej. Hvis klasser er et array, bruges det. Ellers antages et tomt array ([]) som standardværdien.

// .filter(...): Filtermetoden udføres på klassens array (eller et tomt array) og beholder kun de elementer, der opfylder betingelsen i filteret i resultatarrayet.

// (classData) => { ... }: Dette er en tilbagekaldsfunktion, der overføres til filtermetoden. Denne funktion udføres for hvert element (classData) i klasse-arrayet og kontrollerer, om dette element matcher søgetermen (searchTerm).

// const searchLower = searchTerm.toLowerCase():Forklaring: Denne linje konverterer søgeordet (searchTerm) til små bogstaver og gemmer det i variablen searchLower. Dette er at sikre, at søgningen ikke skelner mellem store og små bogstaver.
    if (searchTerm !== "") {
      const results = (Array.isArray(classes) ? classes : []).filter(
        (classData) => {
          const searchLower = searchTerm.toLowerCase();


// returnere (...): Denne linje kontrollerer, om mindst et af classData-felterne indeholder søgeordet (searchLower). Hvis det er tilfældet, returnerer det sandt, og elementet beholdes i resultatarrayet.
          return (

// classData.className && classData.className.toLowerCase().includes(searchLower)): Dette afsnit kontrollerer, om feltet className findes i classData, og om det indeholder søgetermen (searchLower) eller ej.
// classData.className: Kontrollerer om klassenavn findes.
// .toLowerCase(): Konverterer className-værdien til små bogstaver.
// .includes(searchLower): Kontrollerer, om searchLower findes i className eller ej.
            (classData.className && classData.className.toLowerCase().includes(searchLower)) ||
            (classData.trainer.trainerName && classData.trainer.trainerName.toLowerCase().includes(searchLower)) ||
            (classData.classDay && classData.classDay.toLowerCase().includes(searchLower)) ||
            (classData.classDescription && classData.classDescription.toLowerCase().includes(searchLower))
          );
        }
      );
// setFilteredData(resultater): Denne linje gemmer de filtrerede resultater i en tilstand kaldet filteredData.
// Dette vil få React-komponenten til at re-render og vise søgeresultaterne for brugeren.
      setFilteredData(results);
    } else {
// else { setFilteredData([]); }: Hvis searchTerm er tom, sætter denne linje filteredData til et tomt array. Dette vil medføre, at der ikke vises nogen resultater, hvis brugeren ikke har indtastet noget i søgefeltet.
      setFilteredData([]);
    }
// Denne kode implementerer et søgesystem, hvor klassedata filtreres baseret på searchTerm. Hvis searchTerm ikke er tom, gemmes data, der indeholder søgetermen i felterne className, trainerName, classDay eller classDescription i filteredData. Hvis searchTerm er tom, sættes filteredData til et tomt array.
  }, [searchTerm, classes]);





// useEffekt til at få point useEffect(() => { ... }, [filteredData]): Denne linje definerer en useEffect. useEffect er en hook i React, der bruges til at udføre sidekode (såsom at kalde en API eller opdatere tilstand).

// Afhængigheder(dependencies): Denne brugseffekt afhænger af filtrerede data. Når filteredData ændres, udføres koden i useEffect igen.

// const fetchRatings = async () => { ... }: Denne linje definerer en funktion kaldet fetchRatings, der fungerer asynkront. Denne funktion er ansvarlig for at få klassepoint fra API'et.


  useEffect(() => {
    const fetchRatings = async () => {
// for (const classData of filteredData) { ... }: Denne linje definerer en for...of-løkke, der itererer over hvert element (classData) i filteredData-arrayet.For hver klasse i filteredData hentes de tilsvarende scores fra API'et.
      for (const classData of filteredData) {

// try{ ... } catch (error) { ... }: Denne try...catch-blok bruges til at håndtere fejl. Hvis der opstår en fejl i API-kaldet eller databehandlingen, håndteres fejlen i catch-blokken.
        try {
        // await: Venter på svar fra serveren.
        // const respons = await fetch(...): Denne linje sender en GET-anmodning til adressen http://localhost:4000/api/v1/classes/${classData.id}/ratings. Få klassepoint fra API.
          const response = await fetch(
        // classData.id: Klasse-id'et, der er dynamisk placeret i URL'en.
            `http://localhost:4000/api/v1/classes/${classData.id}/ratings`
          );
// const data = await reponse.json(): Denne linje konverterer svaret modtaget fra serveren til JSON-format og gemmer det i datavariablen. Konverter API-svaret til et objekt eller array, der kan bruges i JavaScript.
          const data = await response.json();

// if (Array.isArray(data) && data.length > 0) { ... }: Denne linje kontrollerer, om data er et array, og om det har mindst ét ​​element.Hvis der modtages gyldige scores fra API'et, beregnes den gennemsnitlige score.        
          if (Array.isArray(data) && data.length > 0) {
            // Denne linje beregner de gennemsnitlige klasse scores.
            // data.reduce(...): Reduceringsmetoden bruges til at summere alle scorerne.

            // Jeg kunne bruge "for" eller "foreach" i stedet for reduceringsmetoden, men jeg valgte denne metode, fordi den bruges til at konvertere et array til en enkelt værdi (her summen af ​​scorerne), og den vil have kortere og mere læsbar kode sammenlignet med en af ​​disse to.

            
                // Hvis klassen har point:
            // sum + rating.rating: Ved hver iteration lægges den aktuelle rating (rating.rating) til summen (summen).

            // /data.length: Summen af ​​scoringerne divideres med antallet af scores for at beregne gennemsnittet.

            // const roundedRating = Math.ceil(averageRating * 10) / 10;
            // Denne linje afrunder gennemsnitsscoren til et decimaltal med én decimal.

            // Math.ceil(...): Runder tallet op.

            // * 10 / 10: Dette gøres for at afrunde til én decimal.
            const averageRating = data.reduce((sum, rating) => sum + rating.rating, 0) / data.length;
            
            const roundedRating = Math.ceil(averageRating * 10) / 10;
  

//   Denne del af koden handler om opdatering af ratings state. I denne kode opdateres ratings state for at gemme den gennemsnitlige ratings for hver klasse (roundedRating) eller standardværdien på 0 (hvis der ikke er nogen ratings). Formålet er at gem den gennemsnitlige score for hver klasse i rating state.

//   Statens struktur: ratings state er et objekt, hvor:
// Nøgler(keys): Klasse-id (classData.id).
// Værdier(values): Gennemsnitlig score for hver klasse (roundedtRating) eller 0 (hvis ingen score).

// - setRatings((prevRatings) => ({ ...prevRatings, [classData.id]: roundedRating }));
// setRatings: Denne funktion bruges til at opdatere ratings state.
// prevRatings: Denne værdi er den tidligere status for ratings. Da state i React er uforanderlig, skal vi oprette en ny kopi af state for at opdatere state.
// { ...prevRatings }: Denne sektion opretter en kopi af den tidligere state (prevRatings). Dette gøres ved at bruge spread (...) operatoren til at bevare alle nøgler og værdier fra den tidligere state.
// [classData.id]: roundedRating: Denne sektion tilføjer en ny nøgle til tilstand eller opdaterer en eksisterende nøgle.
// classData.id: Klasse-id'et brugt som nøgle.

// Example: const ratings = {
//   "class1": 4.5,
//   "class2": 3.8,
// };
// setRatings((prevRatings) => ({
//   ...prevRatings,
//   ["class3"]: 4.2,
// }));
// const ratings = {
//   "class1": 4.5,
//   "class2": 3.8,
//   "class3": 4.2,
// };

// Hvorfor bruge prevRatings?
// Bevar tidligere værdier: Ved at bruge prevRatings bevares tidligere ratings state værdier, og kun den nye nøgle tilføjes eller opdateres.

// Undgå overskrivning(overwrite): Hvis prevRatings ikke bruges, erstattes den tidligere tilstand fuldstændigt, og alle tidligere nøgler og værdier går tabt.
// Hvorfor bruges [classData.id]?
// Dynamisk nøgle: Da klasse-id'et (classData.id) er en dynamisk værdi, bruges symbolet [] til at bruge det som en nøgle i objektet. Dette giver os mulighed for dynamisk at oprette eller opdatere nøgler.
            setRatings((prevRatings) => ({
              ...prevRatings,
              [classData.id]: roundedRating,
            }));
          } else {
            setRatings((prevRatings) => ({
              ...prevRatings,
              [classData.id]: 0,
            }));
          }
        } catch (error) {
          console.error("Failed to fetch rating:", error);
        }
      }
    };

// if (filteredData.length > 0) { fetchRatings(); }: Denne linje kontrollerer, om filteredData ikke er tom. Hvis filteredData indeholder data, kaldes fetchRatings-funktionen.
// Mål: Forhindre API-kald, når der ikke er nogen data at søge i.
    if (filteredData.length > 0) {
      fetchRatings();
    }
  }, [filteredData]);


// const handleInputChange = (event) => { ... };: Denne linje definerer en funktion kaldet handleInputChange, som bruges til at håndtere ændringer i søgefeltet.
// setSearchTerm(event.target.value): Denne linje gemmer den nye værdi, der er indtastet i søgefeltet i searchTerm state.
// event.target.value: Den aktuelle værdi af søgefeltet.

// Formål: Opdater searchTerm state med den nye værdi indtastet af brugeren.

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-4">
      <section className="flex items-center relative mb-6">
        <FiSearch className="absolute ml-3 text-gray-400" size={20} />
        <input
          placeholder="Search classes, instructors, days, or descriptions..."
          type="text"
          className="pl-10 w-full h-[50px] bg-[#FCFBFB] border border-[#D4D4D4] rounded-[25px] placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </section>
      <section className="overflow-x-auto scrollbar-hide">
        {searchTerm !== "" && (
          <div className="flex gap-4 pb-4">
            {filteredData.length === 0 ? (
              <div className="w-full text-center">
                <h1 className="text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold p-4 bg-gray-100 rounded-lg shadow">
                  Your search did not give any results. Try to search for something else.
                </h1>
              </div>
            ) : (
              // Vis en liste over klasser (filteredData) i form af ClassesDisplay-komponenter.
              filteredData.map((classData) => (
                //Nøglen er en unik værdi, der hjælper React med at gengive mere effektivt.
                // Nøgleværdien her er classData.id, som er en unik identifikator for hver klasse.
                // Hvis det ikke er en nøgle eller er duplikeret, vil React advare og miste sin optimale ydeevne.
                <div key={classData.id} className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[250px]">
                {/* ClassesDisplay er en anden komponent, der er ansvarlig for at vise klasseinformation.
                  Denne komponent modtager 3 props:
                  📌 classData={classData}
                  classData indeholder alle klasseoplysninger.
                  📌 rating={ratings[classData.id] ?? {0}
                  ratingsværdien er lig med den klassescore, der er modtaget fra ratings.
                  Hvis ratings[classData.id] har en værdi, får den den.
                  Hvis ratings[classData.id] ikke har nogen værdi (er udefineret), er den som standard 0.
                  (Dette betyder, at hvis serveren ikke returnerer en score, vises værdien 0.)
                  📌 interaktiv={false}
                  Denne prop specificerer, at denne version af ClassesDisplay ikke er interaktiv.
                  Denne komponent kan have yderligere funktioner, såsom:
                  Klasseregistreringsknap
                  Mulighed for at ændre point
                  Klik for at se detaljer
                  Men når interactive={false}, kan brugeren ikke interagere med kortet, og det vises kun. */}
                  <ClassesDisplay classData={classData} rating={ratings[classData.id] ?? 0} interactive={false}/>
                                    {/* I denne kodelinje er classData={classData} en prop, der overføres fra den overordnede komponent til den underordnede komponent (ClassesDisplay). Denne rekvisit indeholder information om en klasse, der skal vises i ClassesDisplay-komponenten.
                  classData: er navnet på prop. Dette navn bruges af den underordnede komponent (ClassesDisplay) til at få adgang til de indsendte data.

                  {classData}: er prop-værdien. Denne værdi er et objekt, der indeholder klasseinformation.

                  2. Hvad er classData?
                  classData: Et objekt, der indeholder information om en bestemt klasse. Dette objekt modtages normalt via API eller uddrages fra tilstanden for den overordnede komponent. */}
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}


```


[app (main) search page](src/app/(main)/search/page.jsx)
```js
//Code fra Landrup dans

import Navigation from "@/components/navigation/Navigation";
import Heading from "@/components/Heading";
import Trainers from "../classes/[id]/trainers";
import SearchInput from "./searchInput";
// Suspense → React-komponent for at vise indlæsningstilstanden ved modtagelse af data fra API'en.
import { Suspense } from "react";
import ClassesDisplay from "../classes/classesDisplay";
import { serverFetch } from "@/lib/server-fetch";

export const metadata = {
  title: "Search",
};

export default async function Search() {
  const classes = await serverFetch("http://localhost:4000/api/v1/classes/");

// تابع Promise.all() در جاوا اسکریپت برای اجرای چندین Promise به‌طور همزمان و منتظر ماندن تا اتمام همه آن‌ها استفاده می‌شود. در کد بالا، Promise.all() به‌کار رفته تا برای تمام کلاس‌ها، امتیاز آن‌ها را از API دریافت کند و پس از اتمام تمام درخواست‌ها، نتیجه را در متغیر classesWithRatings ذخیره کند.

// Funktionen Promise.all() i JavaScript bruges til at udføre flere promises samtidigt og vente, indtil de alle er fuldført. I ovenstående kode bruges Promise.all() til at få ratings for alle klasser fra API'et og gemme resultatet i classesWithRatings-variablen, efter at alle requests er gennemført.
// promise.all retunerer et array som resultate
// Promise.all() udfører alle anmodninger samtidigt og behøver ikke vente på, at en anmodning er færdig, før den næste sendes.
// Hvis vi har 10 klasser, vil Promise.all() få alle 10 anmodninger til at blive sendt på samme tid, i stedet for at udføre en efter en. promise.all er hurtigere i sammenligner med at for...of loop with await. alle klasser bliver sendt sammetidigt 1 sekund til 1o klasse, i for...of loop with await 10 sekunder til 10 klasser. 

  const classesWithRatings = await Promise.all(
        classes.map(async (classData) => {
          try {
            const ratings = await serverFetch(
              `http://localhost:4000/api/v1/classes/${classData.id}/ratings`
            );
    
            const averageRating =
              ratings.length > 0
                ? Math.ceil((ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length) * 10) / 10
                : 0;
    
    // Det beholder det originale klasseobjekt (classData), men tilføjer en ny værdi kaldet rating til det.
    // Dette nye objekt vil til sidst erstatte den originale version af klassen i arrayet classesWithRatings.
    // Promise.all() venter på, at alle anmodninger er fuldført.
//     Promise.all([...]) skaber et globalt promise, der venter på, at alle promiser inde i map() er fuldført.
// Når alle anmodninger er gennemført, returnerer Promise.all() en række resultater.
// Returværdien af ​​Promise.all() er gemt i classesWithRatings.
            return { ...classData, rating: averageRating };
          } catch (error) {
            console.error(`Error fetching rating for class ${classData.id}:`, error);
            return { ...classData, rating: 0 };
          }
        })
      );

  return (
    <div className="min-h-screen bg-white">
      <Navigation title="Search" />
      <article className="w-full max-w-[480px] mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <section className="mb-8">
          <SearchInput classes={classes}  />
        </section>
        <section className="mb-8">
          <div className="mb-4">
            <Heading title="Popular Classes" />
          </div>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-4 pl-4">
              {classesWithRatings.map((classData) => (
                <div key={classData.id} className="min-w-[200px]">
                  <ClassesDisplay classData={classData} rating={classData.rating}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <Heading title="Popular Trainers" />
          </div>
          <div className="flex flex-col gap-4">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-[200px] bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800">
                      Trainers are loading...
                    </p>
                    <div className="mt-4">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800 inline-flex"
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
                      Vent venligst...
                    </div>
                  </div>
                </div>
              }
            >
              <Trainers />
            </Suspense>
          </div>
        </section>
      </article>
    </div>
  );
}
```



[ src components ratings RateClass](src/components/rating/RateClass.jsx)
```js


// Denne RateClass-komponent bruges til at vise et ratingssystem for en klasse. Loggede brugere kan rate  klassen. Hvis de allerede har givet point, vil de ikke kunne registrere point igen.

// "use client"; → Denne linje viser, at denne komponent udføres på klientsiden (specifik for Next.js 13+).
// ✅ useState og useEffect → Disse to hooks bruges til at styre komponentens tilstand og udføre operationer, når data indlæses.
// ✅ useAuth → Denne kontekst bruges til at få de loggede brugeroplysninger.
"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/auth/context";


// ✅ classId → Denne props specificerer, hvilken klasse rating hører til.
// ✅ interaktiv → Denne prop specificerer, om scoringen er interaktiv eller ej (default true).
// ✅ currentUser → kommer fra useAuth() og indeholder de loggede brugeroplysninger.
// ✅ rating → Resultat modtaget fra serveren.
// ✅ tempRating → Midlertidig rating valgt af brugeren.
// ✅ hasRated → Hvis true, betyder det, at brugeren allerede har rated.
// ✅ isLoading → Når det er true, betyder det, at dataene stadig loading.
export default function RateClass({ classId, interactive = true }) {
  const { currentUser } = useAuth();
  const [rating, setRating] = useState(0); 
  const [tempRating, setTempRating] = useState(0); 
  const [hasRated, setHasRated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



// Her vil vi kontrollere, om brugeren allerede har rated denne klasse eller ej. Hvis det har givet os en rate, kan vi få adgang til den rate.


// ✅ Denne useEffect udføres hver gang den currentUser eller classId ændres.
// ✅ Hvis brugeren er logget ind (currentUser og currentUser.token findes), udføres fetchRatings()-funktionen.
// ✅ Hvis brugeren ikke er logget ind, indstiller vi isLoading til false for at opdatere UI.
  
  useEffect(() => {
    if (currentUser && currentUser.token) {
      fetchRatings();
    } else {
      setIsLoading(false);
    }
  }, [currentUser, classId]);

// En GET-anmodning sendes til serveren for at hente ratings listen.
// ✅ Autorisation: Bærer ${currentUser.token} → Vi sender brugertokenet i headeren, så serveren kan være sikker på, at denne request er gyldig.
  const fetchRatings = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/classes/${classId}/ratings`,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

// ✅ Hvis anmodningen(request) ikke lykkes, vil der blive genereret en fejl.
// ✅ Hvis det lykkes, konverterer vi de modtagne data til JSON.
      if (!response.ok) {
        throw new Error("Failed to fetch ratings");
      }
      const data = await response.json();


// Denne sektion af kode er relateret til behandling af resultatet af fetch request fra serveren og kontrollerer specifikt, om den currentUser har rated til den ønskede klasse.
// Denne code søger i ratings listen og finder rate for den loggede bruger.
      const userRatingData = data.find(
        (rating) => rating.userId === currentUser.id
      );

// Denne betingelse kontrollerer, om userRatingData eksisterer.
// userRatingData er resultatet af søgning i dataarrayet modtaget fra serveren. Denne variabel indeholder den currentUser ratingsoplysninger for den ønskede klasse.
// Hvis userRatingData eksisterer, betyder det, at brugeren allerede har rated denne klasse.
      if (userRatingData) {
// Hvis brugeren allerede har rated, gemmes deres rates (userRatingData.rating) i rating state.
// Også hasRated-state opdateres til true for at vise, at brugeren allerede har rated denne klasse.
        setRating(userRatingData.rating);
        setHasRated(true);
      }
// Hvis userRatingData ikke eksisterer, betyder det, at brugeren ikke har rated denne klasse endnu.
// I dette tilfælde logges en besked i konsollen for at vise, at brugeren endnu ikke har rated til denne klasse. 
      else {
        console.log("User has not rated this class yet.");
      }
    } 
    
//  Hvis der opstår en fejl under processen med at modtage data fra serveren (f.eks. er serveren utilgængelig eller returnerer et ugyldigt svar), fanges denne fejl i catch-blokken.
// Fejlen, der opstod, vises i konsollen for at være nyttig til fejlretning.   
    catch (error) {
      console.error("Failed to fetch ratings:", error);
    } 
// Den finally blok udføres altid, uanset om operationen lykkes eller sker en fejl.
// Her opdateres isLoading-state til false for at vise, at dataloadingsoperationen er fuldført (uanset om den er vellykket eller ej).     
    finally {
      setIsLoading(false);
    }
  };



// Her ønsker vi, at en bruger kan indsende sin rating, hvis de ikke har rated en klasse.

// Hvis brugeren ikke er logget ind, vises en advarselsmeddelelse, og funktionen stopper.
  const handleRate = async () => {
    if (!currentUser || !currentUser.token) {
      alert("Please log in to rate this class.");
      return;
    }
// Hvis brugeren allerede har rated, får de ikke lov til at rate igen.
    if (hasRated) {
      alert("You have already rated this class.");
      return;
    }

// Hvis der ikke er valgt noget ratings stars, når du klikker på indsend-knappen, vises en advarselsmeddelelse.
    if (tempRating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
// Mål: Send brugerrate til serveren.
    try {
      const response = await fetch(
        // classId: ID'et for den klasse, brugeren ønsker at rate.
        `http://localhost:4000/api/v1/classes/${classId}/ratings`,
        {
          method: "POST",
          headers: {
            // "Content-Type": "application/json": Specificerer, at dataene sendes som JSON.
            "Content-Type": "application/json",
            // Autorisation: Bærer ${currentUser.token}: Brugergodkendelsestoken til API-adgang.
            Authorization: `Bearer ${currentUser.token}`,
          },
// body: Data sendt til serveren:
// userId: ID'et for den bruger, der vil rate klassen.
// rating: Den rating, brugeren har valgt (tempRating).
          body: JSON.stringify({
            userId: currentUser.id,
            rating: tempRating,
          }),
        }
      );

// Formål: Kontroller, om anmodningen til serveren var vellykket.
// Hvis serversvaret ikke lykkes (dvs. HTTP-statuskoden er uden for området 200-299), vises en fejl med meddelelsen "Failed to submit rating".
      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

// Formål: Modtage og behandle serversvaret.
// Serversvaret modtages som JSON (response.json()).
      const data = await response.json();

// setRating(tempRating): Den rate, der er valgt af brugeren (tempRating), gemmes i rating state.
// setHasRated(true): HasRated-state opdateres til true for at vise, at brugeren allerede har bedømt den.
// alert("Rating submitted successfully!"!"): En succesmeddelelse vises til brugeren.
      setRating(tempRating);
      setHasRated(true);
      alert("Rating submitted successfully!");
    } 
// Håndtere fejl, der opstår under POST processen.
// Hvis der opstår en fejl i try-blokken (f.eks. hvis serveren ikke er tilgængelig eller returnerer et ugyldigt svar), overføres kontrollen til catch-blokken.
// Fejlen, der opstod, vises i konsollen (console.error).
// En fejlmeddelelse vises til brugeren (alarm), som indeholder fejlteksten (error.message).
    catch (error) {
      console.error("Failed to submit rating:", error);
      alert(`Failed to submit rating: ${error.message}`);
    }
  };

// Hvis den currentUser ikke eksisterer (dvs. brugeren ikke er logget ind), vises en besked til brugeren, der beder dem om at logge ind for at rate.
// Komponenten vender tilbage på dette tidspunkt(return), og resten af ​​koden udføres ikke.
  if (!currentUser) {
    return <p  className="text-white">Please log in to rate this class.</p>;
  }

// Denne kodelinje (hvis (isLoading) { return <p>Indlæser...</p>; }) bruges til at styre din komponents indlæsningstilstand. Årsagen til at bruge denne kode og dens betydning er fuldt ud forklaret nedenfor:

// 1. Overordnet mål
// Denne kode bruges til at vise en meddelelse eller indlæsningsindikator til brugeren for at informere dem om, at dataene indlæses, og de bør vente.

// 2. Hvorfor er denne kode nødvendig?
// A) Bedre brugeroplevelse:
// Mens data indlæses, kan brugergrænsefladen (UI) forekomme tom eller ufuldstændig i et øjeblik.

// Visning af en besked som "Indlæser..." eller en spinner informerer brugeren om, at appen virker, og data vil snart blive vist.

// Dette forhindrer brugerforvirring og forbedrer brugeroplevelsen.

// B) Forhindrer ufuldstændige data i at blive vist:
// Hvis dataene endnu ikke er modtaget fra serveren, kan komponenten forsøge at vise ikke-eksisterende data, hvilket resulterer i en fejl eller forkert visning.

// Ved at bruge denne kode sikrer du, at intet vises, før dataene er fuldt indlæst.

// 3. Hvordan virker det?
// A) Status indlæses:
// I din kode er isLoading en tilstand, der styrer status for dataindlæsning.

// isLoading er sand, når komponenten først gengives eller modtager data fra serveren.

// Når dataene er indlæst, ændres isLoading til falsk.

// b) Kontrol af if (isLoading) tilstand:
// Hvis isLoading er sand, viser komponenten en "Loading..."-meddelelse.

// Hvis isLoading er falsk, fortsætter komponenten med at gengive resten af ​​indholdet.

// 4. Praktisk eksempel
// Scenarie:
// Brugeren kommer ind på en side, der skal vise resultaterne for en klasse.

// Komponenten begynder at modtage data fra serveren.

// I løbet af denne tid er isLoading true, og meddelelsen "Loading..." vises.

// Når dataene er fuldt modtaget, ændres isLoading til falsk, og komponenten viser resultaterne.
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-8">
      <div className="flex gap-1">
{/* For at oprette 5 stjerner, brugte jeg en simpel array ([1, 2, 3, 4, 5]), 
og for hvert tal i denne array oprettede jeg en knap (<knap>) med et ★-tegn indeni. Derefter ændrede jeg ved hjælp af betinget logik farven på stjernerne baseret på den rating, som brugeren valgte:
Hvis brugeren allerede har rated (hasRated === sand):rating (lagret score) bruges til at farve stjernerne.
Hvis brugeren ikke har rated endnu: tempRating bruges til at farve stjernerne.
Hvis rating (rating eller tempRating) er større end eller lig med stjerneværdien (stjerne), 
vil stjernefarven være gul (tekst-[#F1C40E]). Ellers forbliver stjernefarven grå (tekst-grå-300).
"På denne måde kan brugeren vælge deres score ved at klikke på stjernerne, 
og stjernerne vil blive farvet baseret på deres valg." */}
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setTempRating(star)} 
            disabled={hasRated}
            className={`cursor-pointer text-2xl transition-transform hover:scale-110 ${
              (hasRated ? rating : tempRating) >= star
                ? "text-[#F1C40E]"
                : "text-gray-300"
            }`}
          >
       
            ★
          </button>
        ))}
      </div>
// Denne del af din kode er til at vise knappen Send rate og vise den indsendte rate.
// Denne betingelse kontrollerer, om brugeren allerede har ratet, og om komponenten er interaktiv.
// !hasRated: Denne betingelse er sand, hvis brugeren ikke tidligere har bedømt (hasRated === falsk).
// interaktiv: Denne betingelse er sand, hvis komponenten er interaktiv (interaktiv === sand).
2
      {!hasRated && interactive && (
        <button
          onClick={handleRate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Rating
        </button>
      )}
// Hvis brugeren allerede har vurderet (hasRated === sand), er denne betingelse opfyldt, og meddelelsen vises.
      {hasRated && (
        <p className="text-sm text-white mt-2">
          You rated this class: {rating}
        </p>
      )}
    </div>
  );
}
```




[ src components ratings StarRating](src/components/rating/StarRating.jsx)
```js
"use client";
import { useState } from "react";

export function StarRating({
  rating = 0, 
  onRate, 
  interactive = false, 
}) {
  const [tempRating, setTempRating] = useState(0); 

  const handleClick = (star) => {
    if (interactive && onRate) {
      onRate(star); 
    }
  };

  console.log("Rating in StarRating:", rating); 

  return (
    <div>
      <div className="flex gap-1 text-[#F1C40E]">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            disabled={!interactive}
            className={`text-2xl ${
              (interactive ? tempRating : rating) >= star
                ? "text-[#F1C40E]"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
            onMouseEnter={() => interactive && setTempRating(star)} 
            onMouseLeave={() => interactive && setTempRating(0)} 
          >
            ★
          </button>
        ))}
      </div>
      {!interactive && rating > 0 && (
        <p className="text-sm text-gray-600 mt-2">
          Your rating: {rating}
        </p>
      )}
    </div>
  );
}
```




[ src components ratings RateClass](src/components/rating/RateClass.jsx)
```js

// Jeg brugte "user server", fordi dette er en serverhandling og vil blive udført på serversiden.
// Jeg importerede zod, som er et valideringsbibliotek, der hjælper mig med at tjekke formularinput.
"use server"
import { z } from "zod";

Denne funktion vil tage forminformationen og udføre registreringsopgaven.
prevState(parameter):indeholder tilstandsværdien før funktionen blev udført. Denne værdi kan bruges til at sammenligne eller opdatere den nye tilstand.
formData(parameter): Indeholder de oplysninger, som brugeren har indtastet i formularen.

export default async function RegistrationAction(prevState, formData) {
// Her bruger jeg formData.get() til at få de oplysninger, som brugeren har indtastet i formularen.
// Disse oplysninger omfatter fornavn, efternavn, brugernavn, adgangskode og bekræftet adgangskode.
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmedpassword = formData.get("confirmedpassword");

// Denne kode bruger Zod-biblioteket til at oprette et skema til datavalidering. Her bruges skema til at validere registreringsformularen.
// Jeg tjekker, at hvert felt har mindst ét ​​tegn, hvilket betyder, at det ikke kan stå tomt.
    const schema = z.object({
        firstname: z.string().min(1, "You should write your firstname!"),
        lastname: z.string().min(1, "You should write your lastname!"),
        username: z.string().min(1, "You should write your username!"),
        password: z.string().min(1, "You should write your password!"),
        confirmedpassword: z.string().min(1, "Please confirm your password!"),
// I dette afsnit er der tilføjet en tilpasset validering for at sikre, at adgangskoden og gentagelsen af ​​adgangskoden er den samme:

// .refine: En måde at tilføje tilpassede valideringer til skemaet.

// Valideringsbetingelse: data.password === data.confirmedpassword

// Denne betingelse kontrollerer, om adgangskode og bekræftet adgangskode er det samme.

// Fejlmeddelelse: Hvis betingelsen ikke er opfyldt, vises meddelelsen "Adgangskoder matcher ikke!" vises.
    }).refine((data) => data.password === data.confirmedpassword, {
        message: "Passwords do not match!",
  
// Denne fejl tilskrives feltet for bekræftet adgangskode.
        path: ["confirmedpassword"],
    });

// Her implementerede jeg safeParse() for at sammenligne dataene med skemaet og tjekke om det er gyldigt eller ej.
    const validate = schema.safeParse({
        firstname,
        lastname,
        username,
        password,
        confirmedpassword,
    });


Denne kode er en betinget blok, der kontrollerer, om valideringsoperationen var vellykket eller ej. Hvis valideringsoperationen ikke lykkes (!validate.success), udføres koden inde i if-blokken.
    if (!validate.success) {
        return {
// formData: Denne sektion indeholder de formulardata, som brugeren har indtastet. Disse data inkluderer:
            formData: {
                firstname,
                lastname,
                username,
                password,
                confirmedpassword,
            },
// fejl: Dette afsnit indeholder fejl, der opstod under validering. Disse fejl uddrages fra validate.error-objektet via format()-metoden. Denne metode returnerer normalt fejl i en struktureret og læsbar form for udvikleren.
// Hvis validate.success er falsk, betyder det, at brugeren har indtastet noget forkert.
// I dette tilfælde returnerer jeg formulardataene sammen med fejl, så fejlmeddelelser kan vises til brugeren.
            errors: validate.error.format(),
        };
    }

// Her sender jeg en POST-anmodning til http://localhost:4000/api/v1/users om at registrere brugeren på serveren.
// Content-Type: application/json betyder, at jeg sender dataene i JSON-format.
// Jeg sender kun fornavn, efternavn, brugernavn og adgangskode (fordi bekræftet adgangskode kun er til kontrol på frontend).
    try {
        const response = await fetch("http://localhost:4000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                username,
                password,
            }),
        });
// Her konverterer jeg svaret fra serveren til JSON.
        const data = await response.json();

        // Hvis status var 400 (brugerfejl)
// Det betyder, at brugeren har et problem (f.eks. er brugernavnet duplikeret).
// Jeg returnerer data.message for at vise serverfejlen til brugeren.
        if (response.status === 400) {
            return {
                formData: {
                    firstname,
                    lastname,
                    username,
                    password,
                    confirmedpassword,
                },
                error: data.message || "Registration failed",
            };
        }
// Hvis anmodningen mislykkedes (enhver anden fejl)
// Hvis status er en anden end 200 eller 201, sender jeg en fejl.
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong!");
        }
        // Hvis der ikke var nogen fejl, vises meddelelsen "Registrering lykkedes!" Jeg vender om.

        return { success: "Registration successful! You can now log in." };


// Hvis der er et problem med serveren eller internetforbindelsen, håndterer dette afsnit fejlen og viser en passende meddelelse til brugeren.
    } catch (error) {
        console.error("Registration error:", error);
        return {
            formData: {
                firstname,
                lastname,
                username,
                password,
                confirmedpassword,
            },
            error: error.message || "An error occurred during registration",
        };
    }
}


```


[ app (main) registration registration-form](src/app/(main)/registration/registration-form.jsx)
```js
// Brian's code
//Shake Animation from Landrup dans and dinmægler
"use client";

import { useActionState, useEffect, useState } from "react";
import RegistrationAction from "./registration-action";
import LoginStyle from "../login/login-style";

// Denne kode opretter en registreringsformular i en React-applikation. 
// Denne formular bruger useActionState til at administrere formulartilstanden 
// og useEffect til at anvende animationer og håndtere fejl.

export default function RegistrationForm() {
    // useActionState: En tilpasset hook, der bruges til at administrere formularens tilstand og registreringsoperationen.
// formState: Den aktuelle tilstand af formularen (inklusive data, fejl og succesmeddelelser).
// registrationAction: Funktionen der kaldes når formularen indsendes.
// isPending: En boolesk status, der angiver, om registreringshandlingen er i gang.
// shakeFields: Et objekt, der styrer tilstanden for "shake"-animationen for hvert formularfelt.
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
                setTimeout(() => setShakeFields((prev) => ({ ...prev, [field]: false })), 5000);
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
                // // action={registrationAction}: Funktionen registrationAction kaldes, når formularen indsendes.
                // noValidate er en attribut i HTML <form>-tagget. Når du tilføjer denne egenskab til en formular, beder du browseren om at deaktivere standardformularvalideringen.
                // Moderne browsere (som Chrome, Firefox, Edge osv.) har indbyggede valideringsfunktioner til formularer. Disse valideringer fungerer baseret på HTML-attributter som påkrævet, type (f.eks. type="email"), minLength, maxLength osv.
                // Nogle gange vil du selv håndtere formularvalidering og ikke bruge browserens valideringsmuligheder.
                <form action={registrationAction} noValidate className="flex flex-col gap-3 sm:gap-4">
                Denne sektion af kode render dynamisk registreringsformularens felter (såsom fornavn, efternavn, brugernavn, adgangskode og gentagelse af adgangskode). Dette gøres ved hjælp af 
                map på et array.
                map far loop på array og opretter en input-komponent for hvert felt.
                    {["firstname", "lastname", "username", "password", "confirmedpassword"].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <input
                                defaultValue={formState?.formData?.[field]}
                                type={field.includes("password") ? "password" : "text"}
                                name={field}
                                placeholder={`Enter your ${field}...`}
                                className={`text-center w-full h-10 sm:h-12 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F1C40E] transition ${
                                    shakeFields[field] ? "animate-shake border-red-500" : ""
                                }`}
                            />
                            {formState?.errors?.[field]?._errors[0] && (
                                <span className="text-red-500 text-sm mt-1">{formState.errors[field]._errors[0]}</span>
                            )}
                        </div>
                    ))}

                    <span className="text-red-600 text-center text-sm sm:text-base">{formState?.error}</span>
// Hvis formState har værdien succes (hvilket betyder, at registreringen lykkedes), vil dette span blive vist.
                    {formState?.success && (
                        <span className="text-green-600 text-lg font-semibold text-center">
                            {formState.success}
                        </span>
                    )}
                    // Denne knap er til indsendelse af formularen (type="submit"), og når der klikkes på den, indsendes registreringsformularen.

                    <button
                        type="submit"
                        className="w-full h-10 sm:h-12 bg-[#F1C40E] text-black rounded-full transition-all duration-300 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                        // Når værdien af ​​isPending er sand, er knappen deaktiveret.
                        disabled={isPending}
                    >
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


```

[ app (main) schedule scheduleDetails](src/app/(main)/schedule/sheduleDetails.jsx)
```js
// Denne komponent viser listen over klasser for den loggede bruger.
// ✔️ Hvis brugeren ikke er logget ind, omdirigerer den dem til login-siden (/login).
// ✔️ Hvis brugeren ikke har tilmeldt sig klassen, vil der blive vist en besked om, at de endnu ikke er medlem af en klasse.
// ✔️ Hvis brugeren har klasser, viser den en liste over klasser som et ScheduleCard.

"use client";

// ✅ brug Auth fra @/app/auth/context
// Vi bruger useAuth til at få oplysninger om den loggede bruger.

// ✅ useEffect og useState fra reagere

// useEffect til at udføre handlinger efter den indledende gengivelse (f.eks. kontrol af brugerstatus).
// useState til at administrere isLoading-tilstanden, som bestemmer, om komponenten er klar til at blive vist eller ej.
// ✅ brug Router fra næste/navigation
// For at omdirigere brugeren til /login, hvis de ikke er logget ind.
import { useAuth } from "@/app/auth/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ScheduleCard from "./scheduleCard";

export default function ScheduleDetails() {
// loading: loading værdien modtages direkte fra useAuth().
// Denne værdi viser, om godkendelsesoplysningerne er loading eller ej.
// Når informationen modtages fra serveren, bliver dens værdi falsk.
  const { currentUser, loading } = useAuth();
  const router = useRouter();

// Denne værdi styres af os i komponenten.
// Når brugeren ikke er logget ind, og vi omdirigerer dem til /login, forbliver isLoading-værdien sand for at forhindre uønsket siderendering.
// Hvis brugeren er logget ind, er isLoading = false for at vise indholdet.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
// Når loading er færdig (det bliver falsk):
// Hvis den currentUser ikke havde nogen værdi (nul eller udefineret) → betyder det, at brugeren ikke er logget ind, så den sender ham til /login (router.push("/login").
// Hvis acurrentUser har en værdi → , hvilket betyder, at brugeren er logget ind, sætter den isLoading til falsk for at vise siden.
    if (!loading) {
      if (!currentUser) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    }
  }, [currentUser, loading, router]);

// Hvis loading eller isLoading er sandt, vises teksten "Loading...", og siden er ikke klar endnu.
  if (loading || isLoading) {
    return <p className="text-center text-lg font-bold mt-10">Loading...</p>;
  }

// Hvis brugeren ikke er logget ind, eller hvis deres klasseliste (currentUser.classes) ikke har nogen værdi eller er tom (længde === 0), viser den denne meddelelse:
// 📝 "Du har ikke tilmeldt dig nogen klasser endnu." (Du er ikke tilmeldt nogen klasser endnu.)
  if (!currentUser || !currentUser.classes || currentUser.classes.length === 0) {
    return <p className="text-center text-lg mt-10">You have not enrolled in any classes yet.</p>;
  }

  return (
    <article className="w-[335px] mx-auto">
      <h1 className="text-5xl text-center mt-4 mb-8">My Schedule</h1>
      <section className="flex flex-col gap-4">
        {currentUser.classes.map((userClass) => (
          <div key={userClass.id}>
            <Link href={`/classes/${userClass.id}`} passHref>
              <ScheduleCard userClass={userClass} />
            </Link>
          </div>
        ))}
      </section>
    </article>
  );
}
```


[ app (main) classes [id] detailsButton](src/app/(main)/classes/[id]/detailsButton.jsx)
```js
// code fra Landrup Dans

// Denne komponent håndterer en knap til tilmeld eller framelding til klasser.
// Hvis brugeren ikke er registreret, vil knappen "Tilmeld" blive vist.
// Hvis brugeren allerede er registreret, vil en "Forlad"-knap blive vist, så de kan forlade klassen.
"use client";
import Link from "next/link";
// importere { useAuth } fra "@/app/auth/context"; → Vi får brugeroplysningerne fra useAuth().
// 🔹 importer { useState, useEffect } fra "react"; → Bruges til at administrere tilstand (useState) og udføre kode, når der sker ændringer (useEffect).
import { useAuth } from "@/app/auth/context";
import { useState, useEffect } from "react";


// eksport standardfunktion DetailsButton({ classData }) → Dette er en React-komponent, der modtager klasseinformation (classData) som en egenskab.
// 🔹 classData indeholder information såsom id, classDay osv. om klassen.
export default function DetailsButton({ classData }) {

signUp → Indikerer om brugeren er tilmeldt denne klasse eller ej.
🔹 Startværdien er falsk, hvilket betyder, at vi antager, at brugeren endnu ikke er registreret.
🔹 currentUser → Henter de aktuelle brugeroplysninger fra useAuth().
🔹 setCurrentUser → Bruges til at opdatere brugeroplysninger.
🔹 token → Indeholder godkendelsestoken for server request.
  const [signedUp, setSignedUp] = useState(false);
  const { currentUser, setCurrentUser, token } = useAuth();

// classId indeholder id-værdien for den aktuelle klasse.
// 🔹 Denne værdi bruges i API'et til at tilføje eller fjerne en bruger fra klassen.
  const classId = classData.id;


// 🔹 Denne useEffect udføres, når den aktuelle bruger eller klasse-id ændres.
// 🔹 some() → Kontrollerer om currentUser.classes indeholder en klasse med det aktuelle classId.
// 🔹 Hvis brugeren er registreret i denne klasse, er værdien signedUp = true.
// 🔹 Hvis ikke registreret, forbliver værdien signedUp = false.
  useEffect(() => {
    const isClassAddedToMyList = currentUser?.classes?.some(
      (classObj) => classObj.id === classId
    );
    setSignedUp(isClassAddedToMyList);
//   }, [currentUser, classId]);

// 🔹 Hvis signUp har værdien true, betyder det, at brugeren har registreret sig → knapteksten bliver "Leave".
// 🔹 Hvis signUp har værdien false, betyder det, at brugeren ikke er registreret → knapteksten bliver "signUp".
  const buttonText = signedUp ? "Leave" : "Sign Up";

// Når en bruger tilmelder sig en klasse eller forlader en klasse, ændres oplysningerne om deres klasser på serveren, men oplysningerne i currentUser på klientsiden forbliver forældede.
// Derfor, efter at have udført registreringsændringsoperationen, skal vi hente brugeroplysningerne fra serveren igen for at se ændringerne.
  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
// Hvis anmodningen lykkes, udføres setCurrentUser(updatedUserData), og brugeroplysningerne opdateres.
      const updatedUserData = await response.json();
      setCurrentUser(updatedUserData);
    } catch (error) {
      console.error(error);
    }
  };

// Hvis brugeren allerede er tilmeldt en klasse samme dag, vil den ikke tillade tilmelding til den nye klasse (sameDayClassExists).
// 🔹 Hvis der ikke er noget problem, sendes en POST-anmodning til serveren for at tilføje brugeren til klassen.
// 🔹 Hvis anmodningen lykkes, får vi de nye brugeroplysninger fra serveren (getCurrentUser()).
  async function addUserToClass(cId) {
    try {
      const sameDayClassExists = currentUser?.classes?.some(
        (item) => item.classDay === classData.classDay
      );

      if (sameDayClassExists) {
        alert("You are already signed up for a class on this day.");
        return;
      }

      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}/classes/${cId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add user to class");
      }

      getCurrentUser();
    } catch (error) {
      console.error(error);
    }
  }

// Denne funktion fjerner brugeren fra klassen (DELETE request).
// 🔹 Hvis anmodningen lykkes, får vi de nye brugeroplysninger (getCurrentUser()).
  async function removeUserFromClass(cId) {
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/users/${token.userId}/classes/${cId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove user from class");
      }

      getCurrentUser();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {currentUser != null ? (
        Hvis brugeren er logget på → Viser knappen Registrer/Afregistrer.
// 🔹 Hvis brugeren ikke er logget ind → "Tilmeld"-knappen vises og leder dem til login-siden.
        <button
          className="w-[200px] h-[50px] bg-[#F1C40E] text-black text-lg font-semibold 
                    rounded-lg
                    hover:bg-[#D4AC0D] hover:scale-105 hover:shadow-lg 
                    focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          onClick={() => (signedUp ? removeUserFromClass(classId) : addUserToClass(classId))}
        >
          {buttonText}
        </button>
      ) : (
        <Link href="/login">
          <button
            className="w-[200px] h-[50px] bg-[#F1C40E]  text-black text-lg font-semibold 
                       rounded-lg
                       hover:bg-[#D4AC0D] hover:scale-105 hover:shadow-lg 
                      focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          >
            Sign Up
          </button>
        </Link>
      )}
    </div>
  );
}
```


[src components navigation BurgerMenu](src/components/navigation/BurgerMenu.jsx)
```js
// https://www.youtube.com/watch?v=GGkBwpxV7AI

// Denne kode opretter en burgermenu, som almindeligvis bruges som en rullemenu på mobil- eller computerwebsteder. Denne menu åbnes med et klik på en knap og inkluderer links til forskellige sider samt brugerlogin og logout-funktioner.
"use client";
import Link from "next/link";
// useAuth: En tilpasset hook, der sandsynligvis bruges til at administrere brugergodkendelsesstatus (login og logout).
import { useAuth } from "@/app/auth/context";

// BurgerMenu: er en funktionel komponent, der modtager to props:

// isOpen: En boolesk værdi, der angiver, om menuen er åben eller lukket.

// setIsOpen: En funktion til at opdatere isOpen-statussen.

// useAuth(): Denne hook bruges til at få adgang til brugertilstanden (currentUser) og logout-funktionen.
export default function BurgerMenu ({ isOpen, setIsOpen }){
  const { currentUser, logout } = useAuth();

// Hvis isOpen er falsk, vil menuen ikke blive vist, og komponenten vil returnere null.
  if (!isOpen) return null;

// Denne funktion bruges til at lukke menuen, når du klikker på et link.

// setIsOpen(false): Ændrer isOpen-tilstanden til false for at lukke menuen.
  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col justify-center items-center gap-[48px]">
      <div
        className="absolute top-5 right-8 cursor-pointer text-lg"
        onClick={handleLinkClick} 
      >
        X
      </div>
      <Link href="/classes" onClick={handleLinkClick}>
        <span className="my-5 text-black text-2xl cursor-pointer">Home</span>
      </Link>
      <Link href="/search" onClick={handleLinkClick}>
        <span className="my-5 text-black text-2xl cursor-pointer">Search</span>
      </Link>
      {currentUser && (
        <Link href="/schedule" onClick={handleLinkClick}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            My Schedule
          </span>
        </Link>
      )}
//     Hvis brugeren er logget ind (nuværende bruger findes):

// Linket Log ud vil blive vist.

// Ved at klikke på linket lukkes menuen (handleLinkClick) og brugeren logges ud (log ud).

// Hvis brugeren ikke er logget ind:

// Log ind-linket vil blive vist.

// Ved at klikke på linket lukkes menuen (handleLinkClick).
      {currentUser ? (
        <Link href="/" onClick={() => { handleLinkClick(); logout(); }}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            Log Out
          </span>
        </Link>
      ) : (
        <Link href="/login" onClick={handleLinkClick}>
          <span className="my-5 text-black text-2xl cursor-pointer">
            Log In
          </span>
        </Link>
      )}
    </div>
  );
};



```

[src components navigation BackButton](src/components/navigation/BackButton.jsx)
```js
// https://stackoverflow.com/questions/51843119/go-back-to-the-previous-page

"use client";

import { useRouter, usePathname } from "next/navigation"; 
import { IoCaretBack, IoCaretUp } from "react-icons/io5";

export default function BackButton() {

// useRouter: En hook fra Next.js, der giver dig adgang til routerobjektet. Dette objekt bruges til navigation.
// usePathname: En hook fra Next.js, der returnerer den aktuelle sti (URL).
  const router = useRouter();
  const pathname = usePathname();
//   isSchedule: Kontrollerer, om brugeren er på /schedule-siden.

// isSearch: Kontrollerer, om brugeren er på /search-siden.

// isDynamicClass: Kontrollerer om brugeren er på en dynamisk side såsom /classes/[id]. Dette gøres ved at tjekke om stien starter med /classes/ og har 3 dele i URL'en.

// isDisabledPage: Kontrollerer, om brugeren er på en af ​​/classes, /login eller /registreringssiderne. Disse sider har en deaktiveret tilbage-knap.
  const isSchedule = pathname === "/schedule";
  const isSearch = pathname === "/search";

//   Denne kodelinje tjekker, om brugeren er på en dynamisk side (f.eks. /classes/[id]). Dynamiske sider er sider, hvor en del af deres URL ændres (f.eks. id'et for en klasse).

// pathname.startsWith("/classes/"):Dette afsnit kontrollerer, om det aktuelle stinavn starter med /classes/.

// For eksempel, hvis stinavn er /classes/123, vil denne betingelse være sand.

// pathname.split("/").length === 3:

// pathname.split("/"): Opdeler stien i separate dele baseret på /.

// For eksempel, hvis stinavn er /classes/123, vil resultatet af split være: ["", "classes", "123"].

// længde === 3: Kontrollerer, om antallet af stisegmenter er lig med 3.

// For /classes/123 er matrixlængden 3 (["", "klasser", "123"), så denne betingelse bliver sand.
  const isDynamicClass = pathname.startsWith("/classes/") && pathname.split("/").length === 3;  
  const isDisabledPage = ["/classes", "/login", "/registration"].includes(pathname);

// isActive: Denne værdi er sand, hvis brugeren er på en af ​​/schedule, /search eller en dynamisk /classes/[id] side. Ellers er det falsk.
  const isActive = isSchedule || isSearch || isDynamicClass;

  const handleClick = () => {
    if (isActive) {
      router.push("/classes");
    }
  };

  return (
    <button
      onClick={handleClick}
    // disabled={isDisabledPage}: Hvis brugeren er på en af ​​de deaktiverede sider (/classes, /login, /registration), vil knappen blive deaktiveret.
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


