# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Joppe Koops

  #### Je startniveau:
  rood

  #### Je focus:
  surface plane
 
</details>





## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:  

  | Screenshot(s) van de eerste pagina (small screen)                                         | Screenshot(s) van de eerste pagina (small screen)                                                  |
  | ---                                                                                       | ---                                                                                                |
  | [Decoratie Ikea](https://www.ikea.com/nl/nl/cat/decoratie-de001/)                         | [Bloemen en planten Ikea](https://www.ikea.com/nl/nl/cat/bloemen-planten-pp003/)                   |
  | ![Screenshot van de decoratie pagina van de Ikea website](readme-images/ikea_pagina1.png) | ![Screenshot van de bloemen en planten pagina van de Ikea website](readme-images/ikea_pagina2.png) |

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Met screen reader is de Ikea website redelijk goed te gebruiken. Alle elementen zitten worden voorgelezen en het is daarbij duidelijk waar je bent. Wel hebben veel element een kryptische omschrijving, die de developer waarschijnlijk wel begrijpt, maar de gebruiker niet. Bijvoorbeeld "search combobox". Bovendien is dit niet de enige beschrijving die dat element heeft, het hele element wordt voorgelezen als "search combox zoek product waar ben je naar opzoek?" Terwijl de ui automatisch een popup opent met onnodig veel opties.  

  <img src="readme-images/searchbox.png" width="375px" alt="Screenshot van de searchbox popup van Ikea">  

  Verder zijn er lange lijsten met productcategorieën en specifieke producten, waarvan sommige kunnen worden overgeslagen en anderen niet. Ook hebben de lijsten geen omschrijving van wat voor lijst het is.
  Dan zijn er nog gallerijen met productlinkjes in de afbeeldingen. Omdat elk onderdeel eigenlijk uit drie element bestaat (de afbeelding, de popup van het product, de link naar het product), wordt er drie keer hetzelfde voorgelezen.  

  <img src="readme-images/gallerij_met_linkjes.png" width="375px" alt="Sreenshot van de product gallery van Ikea met drie elementen">  


  Alle elementen moeten een duidelijk omschrijving hebben die de gebruiker kan begrijpen. Van een lijst moet duidelijk zijn wat voor lijst het is en die moet kunnen worden overgeslagen. Maar er zijn ook elementen die voor een blinde gebruiker niet nuttig zijn, die kunnen uit de screen reader flow gehaald.


  #### Muis en Toetsenbord 
  Met gebruik van de tab-toets kom je eigenlijk dezelfde problemen tegen als met een screenreader. Er zijn lange lijsten die je niet kan overslaan, de search popup die vanzelf in beeld komt en de drie dubbele elementen in de gallery.

  Ook hier is het handig om een aantal skip linkje toe te voegen en wat elementen uit de tab-index te halen.


  #### Motoriek (shocks, elastiekjes)
  Een motorieke stoornis maakt het moeilijk om de website te gebruiken, maar dit ligt niet zo zeer aan de website zelf. Dit komt meer door het device waarop je de website bekijkt.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Voor kleurenblinden is er eigenlijk niet een groot probleem. Alleen is het op de plaatjes lastig te zien wat de kleur van het product is, maar dit wordt al opgelost door in de product omschrijving te zetten welke kleur het product heeft.  
    
  Wel zijn er problemen met contrast. De zoekbalk is te licht om van de achtergrond te onderscheiden als je zicht niet scherp is. Ook de button voor de popup in de gallery is afhangelijk van het plaatje niet goed te onderscheiden.

  Ook is veel tekst te klein om te lezen als je niet goed kan zien, met een grootte van 14px.

  Om dit op te lossen moet op sommige plekken het contrast verbeterd. De buttons in de gallery kunnen bijvoorbeeld een box-shadow krijgen.
  De tekst grootte kan iets groter. Natuurlijk kunnen gebruikers ook de tesktgrootte van hun browser aanpassen als ze het niet kunnen lezen.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/ikea_1_breakdown.png" width="375px" alt="breakdown van de hele pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Er is voor mij tot nu toe wel een goede voortgang geweest. Ik loop niet helemaal op schema, maar het is niet iets wat ik onmogelijk kan inhalen. Ik heb tot nu toe bijna één pagina van de site volledig af. Meestal kom ik er zelf wel uit en anders wel samen met een klasgenoot. Wel zit ik soms nog te twijfelen over welk html element ik waar moet gebruiken. Google komt daarbij meestal met meer onduidelijkheid, omdat niet iedereen het daar blijkbaar over eens is. Dit is iets waar ik misschien meer naar kan vragen.

  <img src="readme-images/site_voortgang_1.png" width="375px" alt="Screenshot nagemaakte Ikea website">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: Enis| student 2: Joppe          | student 3: Leon     | student 4: Raúl     |
  | ---            | ---                       | ---                 | ---                 |
  | dit bespreken  | voortgang bespreken       | voortgang bespreken | voortgang bespreken |
  |                | navigatie als er tijd is  |                     |                     |
  | ...            | ...                       | ...                 | ...                 |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik ben eigenlijk best wel ver en gewoon bij. Ik kan het beste eerst wat ik heb helemaal goed maken, want ik hoef niet de hele pagina na te maken.
  - De gallerij zijn niet articles, maar een unordered list met afbeeldingen.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Het gaat eigenlijk best wel goed. Het is vaak wel even zoeken naar hoe iets werkt, maar ik kom er altijd zelf we uit. Ik doe de volgorde wel wat anders; ik ben namelijk al begonnen met de tweede pagina, in plaats van de eerste pagina helemaal compleet te maken. Hierdoor heb ik nog niet echt gekeken naar welke keuzes voor surface plane ik wil gaan doen.
  Soms vraag ik me nog een beetje af waarom iets nu werkt zoals het werkt, ook zit ik nog altijd met de vraag welk html element ik nu precies moet gebruiken, vooral article begrijp ik helemaal niets van.


  <img src="readme-images/site_voortgang_2.png" width="375px" alt="Screenshot nagemaakte Ikea website">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: Enis| student 2: Joppe          | student 3: Leon     | student 4: Raúl     |
  | ---            | ---                       | ---                 | ---                 |
  | dit bespreken  | voortgang bespreken       | voortgang bespreken | voortgang bespreken |
  |                | surface plane keuzes      |                     |                     |
  | ...            | html als er tijd is       | ...                 | ...                 |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik ben goed op schema qua voortgang.
  - Ik heb veel onderdelen van surface plane er eigenlijk al in zitten. Ik ga nu verder met: dark-mode, meer micro interacties, advanced positioning, animaties en DOM manipulatie.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Veel omschrijvingen van elementen zijn een stuk beter dan die op de Ikea website. Alleen form inputs, zoals de zoekbalk blijven lastig. De screenreader ratelt hier nog steeds een hele lijst op, al is die wel iets korter en duidelijker.  

  ![Joppe die screenreader gebruikt](readme-images/screenreader_1.jpg)  
  ![Screenreader tekst bij zoekbalk](readme-images/screenreader_2.jpg)  

  Lijsten kunnen nu worden overgeslagen en hebben een omschrijven, waardoor de gebruiker weet wat hij overslaat.


  #### Muis en Toetsenbord 
  Ook voor mensen die de tab-toets gebruiken is het goed dat lijsten overgeslagen kunnen worden. Ook is het erg handig dat je niet gelijk door hele menu heen hoeft.
  Daarnaast heb ik de focus states verbeterd, waardoor het duidelijk te zien is wat gefocust is.


  #### Motoriek (shocks, elastiekjes)
  Voor iemand met een motorieke stoornis is alles eigenlijk een beetje hetzelfde gebleven. Ik denk dat de website hier niet veel voor verbeterd kan en dat het meer aan de device ligt.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  De zoekbalk is nu een stuk beter te zien, ook door dark-mode is er op veel plekken meer contrast.
  De tekstgroote lijkt een klein verschil, maar maakt de tekst toch leesbaarder voor mensen die wat slechter zien. (Nu 16px in plaats van 14px)  

  <img src="readme-images/bril.jpg" width="375px" alt="Joppe kijkt door een bril naar zijn scherm">

  Bij de filters in dark-mode is het contrast nog niet goed.  

  <img src="readme-images/filters.png" width="375px" alt="Filters in dark-mode">

  Als je heel wazig ziet, zoals bij de wazige bril, dan is de tekst nog steeds te klein. Dit kan je wel oplossen door in de browser settings de tekst groter te zetten, maar daardoor vallen sommige delen buiten beeld op de website.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  Mijn website is bijna af, dus het gaat heel goed. Ik moet nog een paar dingetjes voor surface plane afmaken en er zijn wat kleine toegankelijkheids dingen die nog verbeterd kunnen worden.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: Enis      | student 2: Joppe          | student 3: Leon     | student 4: Raúl     |
  | ---                  | ---                       | ---                 | ---                 |
  | voortgang bespreken  | voortgang bespreken       | voortgang bespreken | voortgang bespreken |
  |                      | toegankelijkheid          |                     |                     |
  | ...                  |                           | ...                 | ...                 |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Blijf niet te veel hangen op die toegankelijkheid en de screenreader.
  - Ga nog iets leuks maken om wat nieuws te leren.

</details>





## Eindgesprek (week 5)

<details open>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:  
  
  <img src="readme-images/slider.png" width="375px" alt="slider">  

  <img src="readme-images/menu.png" width="375px" alt="menu">  

  <img src="readme-images/zoeken.png" width="375px" alt="zoekbalk">  

  <img src="readme-images/grid.png" width="375px" alt="producten grid">  


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb beter gebruik leren maken van flex-box en grid en goed leren begrijpen wat er allemaal mee mogelijk is. Zoals bijvoorbeeld de header die ik gemaakt heb:  
  
  <img src="readme-images/header.png" width="375px" alt="header">  
  
  Maar ook het producten grid en de sliders. Met voor de sliders ook overflow en hoe ik de scrollbar een beetje kan vormgeven.  
    
  <img src="readme-images/grid.png" width="375px" alt="producten grid">

  Daarnaast heb ik vooral heel veel geleerd over toegankelijkheid. Ik wist wel dat het iets was waar rekening mee gehoeden moest worden, maar niet hoe dat kon.

  ### Dit was lastig/Is niet gelukt:
  Iets wat niet gelukt is, is om de tekst en het icoon in de zoekbalk in dark-mode leesbaar te maken.
  Iets wat ik ook graag nog had willen maken, zijn de popup linkjes in de gallery. Ik weet niet precies hoe ze dit gedaan hebben of hoe ik dit zou kunnen doen. Het was ook niet genoeg tijd om hier nog aan te gaan zitten.

  <img src="readme-images/gallerij_met_linkjes.png" width="375px" alt="gallerij met linkjes">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Skip link: https://css-tricks.com/how-to-create-a-skip-to-content-link/
  2. Scrollbar styling: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
  3. `:has()` selector: https://www.youtube.com/watch?v=OGJvhpoE8b4
  4. Niet regel afbreken: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
  5. Word-break: https://css-tricks.com/almanac/properties/h/hyphenate/
  6. Javascript tagname: https://stackoverflow.com/questions/6518802/check-if-element-is-a-div
  7. Position sticky: https://michaelmovsesov.com/articles/fix-css-position-sticky-not-working
  8. Javascript audio: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
  9. Javascript element coördinaten: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  10. Laser geluidje: https://freesound.org/people/jobro/sounds/35681/

</details>