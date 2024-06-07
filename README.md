
# RijksRealm

## Quick Start

1. Navigate to the project directory:

2. Obtain Rijksmuseum's API key:
    * Visit Rijksmuseum's website: [https://www.rijksmuseum.nl/en/rijksstudio](https://www.rijksmuseum.nl/en/rijksstudio)
    * Create an account and verify your email
    * Get your API key in your Rijksstudio account

3. Add the API key to the project:
    * Navigate to `components/api.js`
    * Add the API key at the top of the file where it says:
```javascript
const API_KEY = 'your API-key here';
```

4. Install the package needed for the application:
```bash
npm install
```

5. Start the app:
```bash
cd rijksrealm
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Beskrivning av projekt
En webbapplikation som låter användare söka efter konstverk från Rijksmuseum
samlingar, visa detaljerad information om varje konstverk och spara sina favoritkonstverk för framtida referens.

Funktioner:

    Sökning efter konstverk: Användare kan söka efter konstverk genom att ange söktermer i sökrutan och få en lista över matchande konstverk från Rijksmuseum
    databas.

    Visning av detaljer: Användare kan klicka på ett konstverk i sökresultaten för att visa detaljerad information om konstverket, inklusive titel, konstnär, år och en bild.

    Spara favoritkonstverk: Användare kan markera sina favoritkonstverk och spara dem till en lista för enkel åtkomst senare. Dessa favoritkonstverk sparas lokalt i webbläsaren med hjälp av localStorage.

    Ta bort sparade konstverk: Användare kan ta bort konstverk från sin lista över favoriter om de inte längre är intresserade av dem.


### jämförelse
Vid valet av React som vårt primära ramverk för utveckling genomförde vi en noggrann jämförelse med Vue och Angular. React erbjuder flera fördelar som gjorde det till det mest attraktiva alternativet för vårt projekt. En av de främsta fördelarna med React är dess komponentbaserade arkitektur, som gör det enkelt att återanvända kod och bygga modulära, underhållbara applikationer. Detta underlättar även testning och felsökning, vilket är avgörande för större projekt [1]. Dessutom har React en av de största och mest aktiva gemenskaperna bland JavaScript-ramverk, vilket innebär omfattande resurser, tutorials och tredjepartslösningar som underlättar inlärning och problemlösning [2].

En annan viktig faktor är den höga efterfrågan på React-kompetens på arbetsmarknaden. Många jobbannonser specificerar kunskap i React som en nödvändig eller starkt önskvärd färdighet, vilket tyder på att React-kompetens är mycket efterfrågad och ökar våra karriärmöjligheter. React erbjuder också stor flexibilitet och kan enkelt integreras med andra bibliotek och ramverk. Dess opinionated natur ger utvecklare friheten att välja sina egna verktyg och arkitektur metoder [3].

När vi jämförde med Vue noterade vi att Vue saknar samma nivå av företagsstöd som React får från Facebook, vilket kan påverka långsiktig stabilitet och utveckling [4]. Även om Vue erbjuder en komponentbaserad arkitektur och enkel inlärningskurva, är Reacts gemenskap och resurser större, vilket innebär bättre support och fler tillgängliga verktyg och bibliotek för React-utvecklare [2]. Trots att Vue växer i popularitet, är efterfrågan på React-kompetens fortfarande högre på arbetsmarknaden, vilket gör det till ett mer strategiskt val för karriärutveckling.

Jämfört med Angular, erbjuder React lättviktighet och flexibilitet som Angular saknar. Angular är ett fullständigt ramverk med många inbyggda funktioner, vilket kan vara överväldigande och mindre flexibelt än React. Reacts lättviktiga natur och möjlighet att välja egna verktyg gör det mer anpassningsbart [3]. Dessutom har Angular en brantare inlärningskurva, vilket kan göra det mer utmanande för nya utvecklare att snabbt bli produktiva. Trots att Angular har en stor användarbas, har React en större och mer aktiv gemenskap, vilket är en viktig faktor när det gäller tillgång till support och resurser [2].

Sammanfattningsvis baserades vårt val av React på dess komponentbaserad arkitektur, stora gemenskap, höga efterfrågan på arbetsmarknaden, flexibilitet och effektiva redigeringstekniker baserat på JavaScript. Jämfört med Vue och Angular, erbjuder React en bättre balans av inlärningskurva, flexibilitet och framtidsutsikter på arbetsmarknaden, vilket gör det till det mest attraktiva alternativet för vårt projekt.

Källor:

[1] React Documentation, "Components and Props," 2024. [Online]. Available: https://react.dev/reference/rules/react-calls-components-and-hooks.
[2] Stack Overflow, "Developer Survey Results," 2023. [Online]. Available: https://survey.stackoverflow.co/2023/#web-frameworks-and-technologies.
[3] Digvijay Jadhav, "Why Choose React for Frontend," [Online], Available: https://dev.to/digvijayjadhav98/why-choose-react-for-frontend-4m23.
[4] Vue.js Documentation, "Comparison with Other Frameworks," 2024. [Online]. Available: https://vuejs.org/v2/guide/comparison.html.
