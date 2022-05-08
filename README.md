# watery_AI_project
 
# PRG08-2022-week9
PRG08 2022 Eindopdracht deel B week 9

## stap 3 Uitwerking 
De naam van de website is Watery: website to predict if your plants need water. De website heeft een gebruiksvriendelijke user interface, een user guide waar uit gelegd staat hoe je de website moet gebruiken voor je voorspellingen en een about page met meer informatie. De website is getest met iemand die binnen de doelgroep valt en over geen voorkennis beschikt van de techniek. 

### Screencast 
https://youtu.be/_XiNLWBton4 

### Github classroom 
https://michafvdw.github.io/watery_ai_project/ 

### Test met eindgebruiker 
Ik heb met een eindgebruiker getest die tot de doelgroep (plant parents) van TLE behoort en geen voorkennis beschikt van de gebruikte techniek. Ik heb haar eerst de website laten bekijken. Op de website stond een user guide waar ten eerste op stond hoe je metingen moest doen met het fysieke product bij je plant en ten tweede hoe je vervolgens deze metingen moest invullen op de webgsite om zo een voorspelling te krijgen. Ik heb haar tijdens de test niet geholpen zodat ze alleen de hulp van de user guide had. Ze wist alles te vinden op de website en het lukte haar ook om de juiste manier met de sensoren metingen te doen. Daarna vulde ze de gegevens in op het formulier op de website, daar kwam uit dat de plant water nodig had. Haar feedback op het product was dat de website duidelijk was en het product ook duidelijk te gebruiker. Echter wat wel onduidelijk was, was in welke waardes ze het moest invullen. Bijvoorbeeld: er werd gevraagd om bodemvochtigheid maar er stond niet bij of dit in ML was of bijvoorbeeld in andere waarde. Ik heb toen later erbij gezet dat temperatuur in graden fahrenheit moest. Maar ik kon niet terugvonden wat bodemvocht moest zijn anders dan "sensorwaarde". In de user guide staat nu dat soil humidity gewoon de sensor waard in de monitor is.  <br>
<a href="https://ibb.co/NrnpYmh"><img src="https://i.ibb.co/NrnpYmh/Whats-App-Image-2022-04-15-at-7-46-46-PM.jpg" alt="Whats-App-Image-2022-04-15-at-7-46-46-PM" border="0"></a> 
<a href="https://ibb.co/1XGcM0W"><img src="https://i.ibb.co/1XGcM0W/Whats-App-Image-2022-04-15-at-7-46-48-PM.jpg" alt="Whats-App-Image-2022-04-15-at-7-46-48-PM" border="0"></a> <br>
Deze foto's zijn met toestemming van de eindgebruiker genomen 

## stap 4 reflectie 
Ik heb de uitwerking uit stap 3 gepitched aan mijn TLE team om zo feedback te verzamelen. Deze feedback heb ik zo goed mogelijk verwerkt in het eindproduct van programmeren 8. Daarnaast heb ik de onderstaande vragen beantwoord:

### Techniek 

#### Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?
Ik heb gekozen voor de decision tree. Dit werkte goed met de CSV file die ik hierbij had gevonden, mijn accuracy was 93%. Ik denk dat ik ook met een image classifier had kunnen voorspellen of een plant water nodig had (gebaseerd op de foto), maar dat dit minder betrouwbaarder was geweest en ook complexer. Daarom heb ik gekozen voor de decision tree, zo kon ik ook mijn fysieke product van TLE (met sensoren) koppelen aan de toepassing. 

#### Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?
Ik kon maar 1 CSV file vinden op kaggle die data verzamelde over de grond van de plant om een voorspelling te doen of deze water nodig had. Als er meer datasets beschikbaar waren (ook bijvoorbeeld voor specifieke planten) kon ik misschien meer testen wat betrouwbaarder was. Nu kon ik het maar met 1 dataset testen. De dataset die ik heb gebruikt heeft wel heel erg veel datapunten (zoveel zelfs dat ik er een paar uit moest halen omdat hij anders de webpagina niet eens laadde). Ook is de accuracy heel 93%. 

#### Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.
Het algoritme traint zichzelf met de dataset die ik heb gekozen van kaggle. De train data wordt gebruikt een het model te trainen en de test data om deze te testen. De eigen input van de gebruiker is dus testdata, maar daar wordt het model niet mee getraind. 

#### Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?-Wat voor accuracy vind jij goed genoeg voor jouw toepassing?
Er kan sprake zijn van een verborgen voorkeur wanneer 1 label bijvoorbeeld belangrijker wordt gevonden dan de ander. Dit kan tot problemen leiden wanneer het algoritme in het dagelijkse leven wordt toegepast en een groep van de gebruikers er bijvoorbeeld door benadeeld wordt. Sommige gegevens vindt het algoritme belangrijker dan andere, zo is soil humidity van grote invloed op de voorspelling. De accuracy moet sowieso hoger liggen dan 50% naar mijn mening, en het liefst ook hoger dan 75%. Je wilt namelijk zeker weten dat de voorspelling niet "toevallig" goed is (zoals kop of munt).

#### Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.
Er wordt geen gevoelige data verstuurd via de website. Het enige dat wordt ingevuld is de data over de plant en dit is geen belangrijke data (het is voor andere mensen behalve jijzelf niet relevant om te weten of bodemvochtigheid van je plant 60 is). 

### Conclusie 

#### Wat voor feedback heb je gekregen van je TLE team?
Feedback die ik kreeg van mijn TLE team was om een contact formulier toe te voegen bij de about pagina zodat het makkelijker wordt voor de eindgebruiker om contact op te nemen met mij als die vragen heeft. Ook om het formulier zelf groter te maken (het formulier voor de voorspellingen) zodat dit leesbaarder was dus dit heb ik gedaan. 

#### Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken? Waarom wel of niet?
Toen we nog wilde werken met het concept van DakAkker was het misschien wel bruikbaar geweest om een voorspelling te doen of gewassen water nodig hadden op basis van zoveel data (dus niet alleen wat de eindgebruiker nu invult maar alles wat in het model meegetraind wordt en in de CSV staat. Dus ook PH, K, wind, regen et cetera). Echter doen we voor ons huidige concept steeds uitspraken op basis van metingen van 1 sensor. Dus alleen de bodemvochtsensor bepaalt of er water nodig is en dat is dan gewoon een if statement (zie ook heeft AI toegevoegde waarde). De nieuwe AI voor ons TLE concept gaat over het herkennen van planten met camerabeeld. Hoewel het aspect van het fysieke product dus nog steeds bruikbaar is, is mijn werk voor de AI dus niiet zozeer bruikbaar voor TLE en zal ik nu werken aan het herkennen van planten. 

#### Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?
De CSV file die ik had gevonden was een dataset for predicting watering plants (https://www.kaggle.com/datasets/nelakurthisudheer/dataset-for-predicting-watering-the-plants). Ze hadden daar veel data verzameld over met name de grond van de gewassen om dan te zeggen of deze (geautomatiseerd) water zouden krijgen. In deze context is een voorspelling heel handig. Ik kon echter moeilijk met de boeren van gewassen testen dus ik heb gekozen om het wat kleiner te houden en te kiezen voor een doelgroep met kamerplanten (tevens ook de doelgroep voor TLE). Deze hebben echter veel minder data beschikbaar over hun planten. Dus ik heb met een aangereikte sensoren ze 3 verschillende dingen laten meten over hun planten, ze dat laten invullen op de website en op die manier kregen ze een voorspelling over of hun plant water nodig had. Ik had natuurlijk ook alleen naar de waarde van de bodemvochtsensor kunnen kijken en dan had ik waarschijnlijk ook een deels accurate voorspelling kunnen doen over of de plant water nodig had. Daarom denk ik dat het concept in pri cipe ook zonder AI had gekund, maar ook met prima werkt. En dus wel een betere toegevoegde waarde heeft als er meer data wordt verzameld over de planten (zoals bij gewassen van boeren). 

#### Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt had? Waarom wel of niet?
Het eindproduct voldoet aan de eisen die ik eraan gesteld had: de gebruiker kan zelf input geven op basis van de data van zijn plant die hij of zij gemeten heeft met de sensoren en de website geeft zo een voorspelling of de plant water nodig heeft of niet. Als ik meer tijd had gehad had ik wel graag nog een ander algoritme willen proberen om te kijken of ik zo een beter eindresultaat had kunnen bereiken, want ik heb het nu eigenlijk alleen met de decisiontree geprobeerd. Ik denk dat ik ook met een image classifier dingen had kunnen zeggen over of de plant water tekort had. 

#### Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de voeten kunnen? Waarom wel of niet?
Ik heb de website getest met een eindgebruiker die binnen de doelgroep valt en geen voorkennis beschikt van de techniek. Haar was duidelijk met behulp van de user guide hoe ze met de sensoren de data van haar planten kon meten en waar ze dit vervolgens moest invullen in het formulier. Zo kreeg ze uiteindelijk zonder mijn hulp de voorspelling over de plant te zien. Echter waar ze wel tegenaan liep was dat ze niet precies wist om wat voor soort waardes het ging. Bijvoorbeeld, soil moisture: is dat in mL? Dat staat ook in de CSV of op Kaggle niet aangegeven. Ik heb dit nu opgelost door in de user guide te zeggen dat ze de sensor value die in de arduino monitor staat moeten aanhouden.
