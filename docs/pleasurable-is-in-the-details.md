# Pleasurable User Interface

## Pleasurable is in the details
Over het ontwerpen en bouwen van de pleasurable laag van interactie.

### Aanpak
Vandaag ga je met je team convergeren - divergeren op het design en de uitwerking van je website. Eerst ga je leren wat pleasurabel ui is aan de hand van de _Hierarchy of User Needs_ piramide.


## Hierarchy of User Needs
In de piramide van User Needs van Aaron Walters is goed te zien dat een _pleasurable interface_, een interface waar een gebruiker plezier aan beleeft, is gebouwd op een stevig fundament. Dit bereik je door een website te ontwerpen en bouwen volgens het principe van Progressive Enhancement.

<img src="aarron-walter-user-needs.png" alt="piramide van user needs" width="400"> 

*De hierarchy of user needs van Aaron Walters (hij is hoofd UX designer van MailChimp en schrijver van het boek "Designing for Emotion")*

### Functional & Reliable
De _functional_ en _reliable_ laag van een website komen overeen met de de eerste twee lagen van Progressive Enhancement,

1. Bepaal eerst de core functionality van wat je gaat maken
2. Bouw die functionaliteit met de simpelste techniek (meestal HTML, met een klein beetje Mobile First CSS voor de huisstijl)

Als je je website server-side bouwt, met behulp van goede HTML, formulieren en basic CSS zorg je ervoor dat je website het altijd doet, voor iedereen. Het is misschien niet super fancy, en met weinig details, maar de website doet het altijd, in elke browsers en in principe kunnen alle mensen de website gebruiken.

### Usable
In de *Usable* laag zorg je ervoor dat je website goed te gebruiken is. Dit doe je bijvoorbeeld met een duidelijk visuele hiërarchie, door Gestalt principes toe te passen, en door het ontwerpen van goede feedback en feedforward.

#### Visuele hiërarchie
Door een duidelijke Visuele hiërarchie toe te passen snappen gebruikers waar ze moeten kijken en welke dingen op het scherm het belangrijkst zijn.
<br>Hierover heb je ook geleerd in de workshop [Visuele Hiërarchie uit sprint 1](https://github.com/fdnd-task/your-tribe-squad-page/blob/main/docs/visuele-hierarchie.md)

Joshua Porter schrijft hierover in zijn artikel _Principles of User Interface Design_:
>A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time. Weak visual hierarchies give little clue about where to rest one's gaze and end up feeling cluttered and confusing. In environments of great change it is hard to maintain a strong visual hierarchy because visual weight is relative: when everything is bold, nothing is bold. Should a single visually heavy element be added to a screen, the designer may need to reset the visual weight of all elements to once again achieve a strong hierarchy. Most people don't notice visual hierarchy but it is one of the easiest ways to strengthen (or weaken) a design. - [#11 Strong visual hierarchies work best](http://bokardo.com/principles-of-user-interface-design/)

#### Gestalt principes 
Door in je ontwerp rekening te houden met Gestalt principes zorg je ervoor dat informatie duidelijk gegroepeerd is en de gebruiker de pagina goed begrijpt.
<br>Hierover heb je geleerd in de workshop [Layout en compositie uit sprint 4](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/layout-en-compositie.md)

#### Feedback en feedforward
Door goede feedback en feedforward te tonen, en door duidelijke labels te gebruiken voor formulierelementen en menu-items zorg je ervoor dat gebruikers goed snappen hoe een site werkt.
<br>Hier heb je o.a. over geleerd in de workshop [User interface design uit sprint 5](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/layout-en-compositie.md)

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

De pleasurable laag is leuk om te ontwerpen en bouwen, met animaties en leuke of grappige feedback. Het is ook voor je opdrachtgever van belang, want als een interface echt leuk is zullen mensen de website sneller aanbevelen bij anderen.
<br>Therese Fessenden van Nielson Norman Group schrijft hierover:
> Users who experience a state of deep delight will be more likely to recommend the product or service to a friend, and to become a passionate return user.

Alleen een pleasurable interface zonder _functional_, _reliable_, en _usable_ laag werkt juist averechts. Een mooie website die niet goed werkt is ... aaaargh ... grrrr ... laat maar ....
<br>Het is zelfs zo dat gebruikers een website die niet goed te gebruiken is beter herinneren dan een goede website. Dit heet _negativity bias_, de neiging van mensen om meer aandacht te besteden aan een negatieve ervaring.

Voorbeelden van een pleasurable interface zijn:

#### Blije button

<video width="712" src="https://github.com/user-attachments/assets/b3ad692e-7d34-4d80-860e-cb44dd49f84c" muted loop autoplay playsinline></video>

Deze button wil heel graag geklikt worden. Het komt een beetje naar de cursor toe en blijft de cursor volgen.

#### Funky focus state

<video width="1024" src="https://github.com/user-attachments/assets/f1055f50-3d1f-4a81-8e58-585577bf9aac" muted loop autoplay playsinline></video>

De hover state over de elementen geeft mooie feedback met animaties, de visuele elementen komen in de vervolgpagina terug. 

#### Slicke Slideshow

<video width="1024" src="https://github.com/user-attachments/assets/eef09048-2ea6-43e7-bbe7-8939c3cac504" muted loop autoplay playsinline></video>

De slideshow op de Spotify.design maakt gebruik van verschillende slicke animaties, en je kan de slideshow op verschillende manieren bedienen, dat is ook een vorm van pleasurable UI. Ook de achtergrond kleur verandert en past zodoende bij de volgende pagina.

👉 Check de Slicke Slideshow op [spotify.design](https://spotify.design). Beantwoord deze vragen op het whiteboard: <br>- Welke slicke animatie zie je allemaal? <br>- Op welke manieren kan je de slideshow bedienen?


## Pleasurable UI ontwerpen en maken

Convergeren en divergeren

Prototyping in Figma, verschillende versies maken met je team: Duup and varieren. Animeren in Figma. 


### Pleasurable - button states
:hover :active states animeren in Figma

In de huisstijl

Team maakt verschillende versies mbv de disney animatie principes

### Pleasurable - micro interactie
carousel, scroll, open/close element zoals menu
animeren in Figma

In de huisstijl

Team maakt verschillende versies



### Pleasurable - Client side enhancement
POST functionaliteit, zoals filteren/sorteren, paginatie en ...

Design pattern uitwerken in Figma
met interactie en animatie

Link maken naar feature branches

Breakdown maken en bespreken hoe je dit met client-side js kan maken
(Verwijs naar 3 stappenplan in fix the flow)

