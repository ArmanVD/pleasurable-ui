# Pleasurable User Interface

## Pleasurable is in the details
Over het ontwerpen en bouwen van de pleasurable laag van interactie.

### Aanpak
Vandaag ga je met je team convergeren en divergeren op het design van je website. Eerst ga je leren wat pleasurable UI is aan de hand van de _Hierarchy of User Needs_ piramide. Daarna ga je in Figma pleasurable UI ontwerpen en animeren.

<!--

Nog iets met het archief van https://littlebigdetails.com/archive ? Was tussen 2010 en 2017 een enorme bron aan 'Pleasurable is in the details'

Teams/Whiteboard opdracht met https://tympanus.net/codrops/category/articles/ui-interactions-animations-roundups/ ook nog wel vet misschien

-->


## Hierarchy of User Needs
In de piramide van User Needs van Aarron Walter is goed te zien dat een _pleasurable interface_, een interface waar een gebruiker plezier aan beleeft, is gebouwd op een stevig fundament. Dit bereik je door een website te ontwerpen en bouwen volgens het principe van Progressive Enhancement.

<img src="aarron-walter-user-needs.png" alt="piramide van user needs" width="400"> 

*De hierarchy of user needs van Aarron Walter (hij is hoofd UX designer van MailChimp en schrijver van het boek "Designing for Emotion")*



### Functional & Reliable
De _functional_ en _reliable_ laag van een website komen overeen met de eerste twee lagen van Progressive Enhancement,

1. Bepaal eerst de core functionality van wat je gaat maken
2. Bouw die functionaliteit met de simpelste techniek (meestal HTML, met een klein beetje Mobile First CSS voor de huisstijl)

Als je je website server-side bouwt, met behulp van goede HTML, formulieren en basic CSS zorg je ervoor dat je website het altijd doet, voor iedereen. Het is misschien niet super fancy, en met weinig details. Maar de website doet het altijd, in elke browser en in principe kunnen alle mensen de website gebruiken.

### Usable
In de *Usable* laag zorg je ervoor dat je website goed te gebruiken is. Dit doe je bijvoorbeeld met een duidelijke visuele hiërarchie, door Gestalt principes toe te passen, en door het ontwerpen van goede feedback en feedforward.

#### Visuele hiërarchie
Door een duidelijke visuele hiërarchie toe te passen, snappen gebruikers waar ze moeten kijken en welke dingen op het scherm het belangrijkst zijn.
<br>Hierover heb je ook geleerd in de workshop [Visuele Hiërarchie uit Sprint 1](https://github.com/fdnd-task/your-tribe-squad-page/blob/main/docs/visuele-hierarchie.md)

Joshua Porter schrijft hierover in zijn artikel _Principles of User Interface Design_:
>A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time. Weak visual hierarchies give little clue about where to rest one's gaze and end up feeling cluttered and confusing. In environments of great change it is hard to maintain a strong visual hierarchy because visual weight is relative: when everything is bold, nothing is bold. Should a single visually heavy element be added to a screen, the designer may need to reset the visual weight of all elements to once again achieve a strong hierarchy. Most people don't notice visual hierarchy but it is one of the easiest ways to strengthen (or weaken) a design. - [#11 Strong visual hierarchies work best](http://bokardo.com/principles-of-user-interface-design/)

#### Gestalt principes 
Door in je ontwerp rekening te houden met Gestalt principes zorg je ervoor dat informatie duidelijk gegroepeerd is en de gebruiker de pagina goed begrijpt.
<br>Hierover heb je geleerd in de workshop [Layout en compositie uit Sprint 4](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/layout-en-compositie.md)

#### Feedback en feedforward
Door goede feedback en feedforward te tonen, en door duidelijke labels te gebruiken voor formulierelementen en menu-items zorg je ervoor dat gebruikers goed snappen hoe een site werkt.
<br>Hier heb je o.a. over geleerd in de workshop [User Interface Design uit Sprint 5](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/layout-en-compositie.md)

Ook met client-side enhancements voor het posten en laden van data kan je ervoor zorgen dat gebruikers duidelijke feedback krijgen.

Joshua Porter schrijft hierover in zijn artikel _Principles of User Interface Design_:
>Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don't worry about stating the obvious…the obvious almost never is. - [#04 Keep users in control](http://bokardo.com/principles-of-user-interface-design/)

### Pleasurable
De pleasurable laag van de _hierarchy of user needs_ zorgt ervoor dat een gebruiker plezier beleeft aan de website.

<!--
Voorbeeld button die wil dat je erop klikt
focus animatie op item in een reeks (spotify)
veel te hip prototype voorbeeld micro interactie

Pleasurable: 
Animations
Tactile transitions or gestural commands
Microcopy (i.e. injecting humor & slang, predicting users’ questions in advance)
Beautiful, relevant high-resolution imagery
Sound interactions
-->

De pleasurable laag is leuk om te ontwerpen en bouwen, met animaties en leuke of grappige feedback. Het is ook voor je opdrachtgever van belang, want als een interface echt leuk is, zullen mensen de website sneller aanbevelen bij anderen.
<br>Therese Fessenden van Nielsen Norman Group schrijft hierover:
> Users who experience a state of deep delight will be more likely to recommend the product or service to a friend, and to become a passionate return user.

Maar een pleasurable interface zonder _functional_, _reliable_, en _usable_ laag werkt juist averechts. Een mooie website die niet goed werkt is ... aaaargh ... grrrr ... laat maar ...
<br>Het is zelfs zo dat gebruikers een website die _niet goed_ te gebruiken is beter herinneren dan een goede website. Dit heet _negativity bias_; de neiging van mensen om meer aandacht te besteden aan een negatieve ervaring.

### Voorbeelden van pleasurable interfaces

#### Blije button

<video width="712" src="https://github.com/user-attachments/assets/844d642d-7613-4359-bc78-db3713349c6d" muted loop autoplay playsinline></video>






Deze button wil heel graag geklikt worden. Het komt een beetje naar de cursor toe en blijft de cursor volgen.

#### Funky hover state

<video width="1024" src="https://github.com/user-attachments/assets/e5d22837-f17e-436c-ba11-f0cf8d829615" muted loop autoplay playsinline></video>








#### Slicke Slideshow

<video width="1024" src="https://github.com/user-attachments/assets/ada3e561-c4df-4266-b9c1-1bc52a0034ce" muted loop autoplay playsinline></video>








De slideshow op Spotify.design maakt gebruik van verschillende slicke animaties, en je kan de slideshow op verschillende manieren bedienen. Dat is ook een vorm van pleasurable UI. Ook de achtergrondkleur verandert en past zodoende bij de volgende pagina.

👉 Check de Slicke Slideshow op [spotify.design](https://spotify.design). Beantwoord deze vragen op het whiteboard:
- Welke slicke animaties zie je allemaal?
- Op welke manieren kan je de slideshow bedienen?


## Pleasurable UI ontwerpen

Deze sprint gaan we een aantal nieuwe interacties ontwerpen en uitwerken, die de UI meer pleasurable maken. We gaan oefenen met Figma en hoe je _daarin_ animaties kunt _prototypen_. Dit levert nog geen werkende code op, maar je kunt hiermee snel een bepaald idee overbrengen, bijvoorbeeld binnen je team of naar de opdrachtgever. 
<!-- Misschien bedenk je wel iets dat je nog niet in code kunt maken, maar waar je wel in Figma een voorbeeld van kunt maken. -->

Woensdag ga je met je team de prototypes bekijken en in code maken. Zorg ervoor dat je woensdag verschillende Figma prototypes af hebt om in feature branches aan de code te werken. 
<!-- Vrijdag via een pull request de beste implementatie kiest met je team. -->

#### Bronnen
Gebruik de volgende bronnen om onderstaande opdrachten te maken. 

- [Animation basics in Figma @ YouTube](https://www.youtube.com/watch?v=02fO4qVnbc0) + [Figma design file](https://www.figma.com/community/file/1198305561541816622)
- [Mastering Animations in Figma by Building 7 Common UI Animations](https://www.jurn.io/figma-animation-examples/) + [Figma design file](https://www.figma.com/community/file/866532393298219995)
- Voor inspiratie: [UI Interactions and Animations Roundups @ Codrops](https://tympanus.net/codrops/category/articles/ui-interactions-animations-roundups/)
- Uit Sprint 6: [How to Apply Disney’s 12 Principles of Animation to UI Design](https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design)


### Ontwerp pleasurable button states

Ontwerp een pleasurable hover, active en/of focus states voor buttons (of links) in de huisstijl van de opdrachtgever, en prototype deze met animaties in Figma.

Ieder teamlid ontwerpt een eigen versie van de button en/of links aan de hand van de Disney animatie principes.


### Ontwerp een pleasurable micro interactie

Zoek een micro interactie in jullie project, en bepaal samen voor welke interactie je een nieuw pleasurable ontwerp gaat maken. Bijvoorbeeld een carrousel die leuker kan, een blije animatie als je scrollt, of een slicke manier van het openen en sluiten van een menu. Kies samen de interactie, zodat jullie met hetzelfde onderwerp bezig zijn. Ontwerp daarna allemaal individueel een prototype met animatie in Figma. Gebruik de huisstijl van de opdrachtgever, maar varieer naar eigen inzicht.

Ieder teamlid ontwerpt een eigen versie van de micro interactie.


### Ontwerp een pleasurable laag voor het fetchen van data

Je hebt in Sprint 9 of 10 een formulier `POST` verrijkt met een client-side script en een `fetch`, waardoor niet de hele pagina hoeft te verversen. Hiermee heb je de interactie voor User Generated Content iets beter _usable_ gemaakt voor veel bezoekers. Met een loading state en success state heb je deze volledig gemaakt.

Maar er zijn ook interacties die via `GET` requests gaan. Denk aan filteren en sorteren, zoeken, of bijvoorbeeld pagineren, of simpelweg navigeren tussen pagina's. Ook deze kun je meer pleasurable maken, met bijvoorbeeld een soepele overgang tussen pagina's, of een vette animatie terwijl je filtert. 
<!-- Hiervoor heb je al kort met multi-page View Transitions gespeeld, maar in het ontwerp kunnen we ook wat meer tijd steken.-->
