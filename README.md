# Mediahuis
## Inhoudsopgave
* Beschrijving
* Programma
* Likes
* Livechat
* 404
* Installatie

  
## Beschrijving

Mediahuis wou graag een radiogids voor verschillende radiozenders ( Veronica, Slam en 100%NL waarop je kon zien welke shows die dag er zijn met informatie over de show, door wie de show gehost word en de tijden van de show. Wij hebben dit gerealiseert voor hun en wij hebben daarbij een paar extra zelfbedachte features aangebracht en een paar leuke hover animaties, in deze presentatie / readme leer je daar meer over!

### Animated link hover

Dit hebben wij gemaakt omdat wij denken dat dit de bezoeker van de website duidelijkere functionaliteit geeft over dat dit linkjes zijn, dit omdat er een kleurverandering plaatsvind en er een lijn onder onstaat. Ook hebben wij dit relatief simpel maar toch aansprekend gelaten omdat dit goed past bij het uiterlijk van de website

https://github.com/user-attachments/assets/e24db71f-8217-4d4d-8c9a-6cd4c9baaa40



## Programma Pagina 

De programma pagina is grotendeels van het aangeleverde design overgenomen, met een paar kleine aanpassingen vanuit onze kant. Dit hebben wij gedaan om het design wat rustiger en overzichtelijker te maken voor de eindgebruiker. Je ziet duidelijk welke show nu bezig is, aangezien deze blauw is in de kleur van Radio-Veronica. Ook kan er tussen dagen geswitcht worden om het programma van een andere dag te zien. We hebben er op gelet dat de programma pagina in grotendeels dezelfde stijl gemaakt is als de andere pagina's, dit zorgt voor meer visuele hiërarchie, wat als fijn ervaren wordt door de eindgebruiker.

### Iphone 12 Pro
<img width="409" alt="image" src="https://github.com/user-attachments/assets/81e391ed-7255-4f53-93e0-e25d3b39013a" />

### Ipad Air 

<img width="589" alt="image" src="https://github.com/user-attachments/assets/8b0da473-463d-4636-94e6-86a0f696c33a" />

### NestHub Max

<img width="976" alt="image" src="https://github.com/user-attachments/assets/76ed0160-49f8-4c23-a220-8d98b07ce38e" />

## Likes Pagina

De Likespagina is een pagina die wij zelf bedacht hebben! In de programma pagina kan je namelijk programmas liken die jij leuk vind, in de likes pagina krijg je deze programmas terug te zien op volgorde van oud naar nieuw ( nieuw dus onderop de pagina ). Je kan ook programmas weer unliken als je deze toch niet leuk vind!. dit is in de toekomst mogelijk uit te bouwen naar een algemene likepagina waar je de meest gelikede programmas kan zien! Wij hebben ervoor gekozen om deze pagina in ongeveer dezelfde stijl te houden als de programma pagina zodat de eindgebruikers niet in de war raken, ook hebben wij ervoor gekozen om de live radiozender met de dagen / tijden eruit te houden omdat dit ook voor verwarring kan zorgen bij de eindgebruiker. Hieronder zijn een paar voorbeelden te zien van de pagina in 3 verschillende groottes, mobiel, tablet en desktop. wij hebben 3 random groottes gepakt zodat wij zeker weten dat het op elk scherm correct werkt.

### Iphone 12 Pro
<img width="357" alt="Screenshot 2025-05-27 at 15 58 02" src="https://github.com/user-attachments/assets/dea27f3b-eed5-48db-9693-588131166699" />

### Ipad Air

<img width="530" alt="Screenshot 2025-05-27 at 16 02 24" src="https://github.com/user-attachments/assets/6edf1879-3482-490c-ad6b-4bef1dc73f35" />

### NestHub Max

<img width="1214" alt="Screenshot 2025-05-27 at 16 03 42" src="https://github.com/user-attachments/assets/31e58420-af1e-45bc-88f4-534142f05e5a" />
<img width="1214" alt="Screenshot 2025-05-27 at 16 03 52" src="https://github.com/user-attachments/assets/195c6f61-80e6-4650-8524-71dc1e956f99" />

Zoals u ziet werkt de website op elk soort scherm correct!

### gebruikte technieken Likespagina

* liquid templates
* server
* API directus
* CSS met custom properties
* CSS keyframes voor animaties en loadingstate
* CSS mediaqueries voor responsive design

### hoe werkt een programma liken?

de programmas kan je liken omdat wij in de server een app.post hebben opgezet die linkt naar de directus database. dit hebben wij gedaan doormiddel van het opvragen van de id binnen de post aan de body een JSON.stringify met daarin een request te doen naar mh_accounts_id en mh_show_id ( dit is het id waarop er word gepost en het id van het programma dat geliked word. ) hierna word dit doorgestuurd met een response.redirect naar de programma pagina. Om een programma te kunnen liken hebben wij ook nog een HTML Form type submit gemaakt zodat de like daadwerkelijk verstuurd kan worden.

https://github.com/ArmanVD/pleasurable-ui/blob/eaf225adccfa943953dfe44e5a8d91937a7e2996/views/radio-template.liquid#L173-L199

https://github.com/ArmanVD/pleasurable-ui/blob/eaf225adccfa943953dfe44e5a8d91937a7e2996/server.js#L74-L88


## Livechat Pagina
De LiveChat pagina is een extra feature die wij bedacht hebben voor op de website! Op deze manier kunnen gebruikers met elkaar communiceren over van alles en nog wat! Ze kunnen praten over Shows, DJ's, Muziek, etc. De styling hebben wij gedaan met de roze kleur die aangeleverd was en de blauwe kleur van radio veronica, om zo in de huidige styling te blijven. De gebruiker moet eerst inloggen, dit gebeurd eenvoudig door het invoeren van een gebruikersnaam. Het systeem checkt of er dan eerder berichten zijn gestuurd door deze gebruikersnaam, en zorgt er dan voor dat de gebruiker zijn/haar eigen berichten in het blauw ziet, en die van andere in het roze.

### Iphone 12 Pro

<img width="410" alt="image" src="https://github.com/user-attachments/assets/532121b6-669b-42e2-a189-b189da004e11" />

### Ipad Air

<img width="597" alt="image" src="https://github.com/user-attachments/assets/0969cb20-93ab-446f-bc6e-47a1b308fd27" />

### NestHub MAx

<img width="982" alt="image" src="https://github.com/user-attachments/assets/e391efc1-19ac-40bf-b7ac-28f3a4aeb730" />

## 404 Pagina 
### ontwerpkeuzes
De 404 pagina is een pagina die wij ook zelf bedacht hebben om nog toe te voegen, dit leek ons handig voor als eindgebruikers op links klikken die nog niet werken / zijn verlopen. Wij hebben hier er voor gezorgd dat je makkelijk kan terugkeren naar de home of een gewenst radio zender. Wij hebben dit in de huisstijl van Veronica gehouden omdat dit ook de "homepage" is van de website daarom leek dit ons een gepast idee. Ook hebben wij dezelfde verschillende groottes gebruikt zodat het overeen komt met de homepage styling, hier hebben we alleen op groot scherm de footer weggelaten omdat je wilt dat je in deze pagina snel terugkan naar een gewenste pagina en daarvoor vonden wij een footer op groot sherm ongeschikt

### Iphone 12 pro

<img width="353" alt="Screenshot 2025-05-28 at 10 00 49" src="https://github.com/user-attachments/assets/a5c95881-058b-4a63-a07c-25b553d24ad3" />

### Ipad Air

<img width="529" alt="Screenshot 2025-05-28 at 10 04 07" src="https://github.com/user-attachments/assets/c894ca79-0427-4aaf-8718-890c18a8e030" />


### Nesthub Max

<img width="1213" alt="Screenshot 2025-05-28 at 10 04 31" src="https://github.com/user-attachments/assets/bcb4f026-ad91-4149-aa5f-076fc7361381" />

### Gebruikte technieken

* liquid
* server.js met een 404 redirect
* CSS mediaqueries voor responsive
* CSS keyframes voor geanimeerde links

### hoe werkt het doorlinken naar een 404 pagina

wij hebben gekozen voor een custom 404 ( foutmelding ) pagina omdat wij dit ervaren als een fijne manier voor de eindgebruikers, een 404 pagina werkt bijvoorbeeld als je de verkeerde /url intoetst. Hiervoor hebben wij in de server een app.use moeten gebruiken die daarmee doorlinkt naar de custom 404 page ( 404.liquid ).

https://github.com/ArmanVD/pleasurable-ui/blob/ab54a6e5aa83224ba6039a6e23429c59dc153aca/server.js#L291-L293

## Installatie
Clone de repo lokaal, in de terminal van je code editor moeten de volgende commands uitgevoerd worden:

* npm install
* npm install node-fetch express-session
* npm start

Vervolgens kan er via de localhost een live sessie gestart worden.

