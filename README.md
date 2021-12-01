# Frontend-applications
   ![Visu 1](https://github.com/lamartm/Frontend-Applications/blob/main/public/images/visu%201.PNG)
   ![Visu 2](https://github.com/lamartm/Frontend-Applications/blob/main/public/images/visu%202.PNG)
   
## Live-Demo
[Link](https://frontend-app-mohamed-l.herokuapp.com/)
   
## Beschrijving 📖
Voor Frontend-Application maken we gebruik van de opgeschonde data die we in Functional Programming hebben gemaakt. Hiervan maken we visualisaties met behulp van de D3 library.
Ik zal gebruik maken van de carpool data van de RDW om een visualisatie te maken voor de Volkskrant. Uiteindelijk moet dit dan in een frontend framework naar keuze. Ik had voor React gekozen. De visualisatie zal over de volgende vraag gaan:

### Wat zijn de mogelijkheden van de carpool locaties binnen Nederland?

Voor verdere uitleg over de vraag en de subvragen kunt u hier naartoe:
[wiki -  Concept beschrijving](google.com)

## Hulpbronnen 🦮
Ik heb voornamelijk de course van Curran gevolgd om een D3 visualisatie te maken: 
(https://www.youtube.com/watch?v=vHqTbSd4D4I&ab_channel=CurranKelleher)

Voor de rest heb ik gebruik gemaakt van de lessen die we kregen.

## Install guide 🚀
Clone deze repo:

```$ git https://github.com/lamartm/Frontend-Applications.git```

Navigeer naar deze map en run de volgende command:

``` npm install ```

Om de project te gebruiken:

``` npm start ```

### Dependencies
```   
"dependencies": {
    "@testing-library/jest-dom": "^5.15.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/geojson": "^7946.0.8",
    "d3": "^6.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "topojson": "^3.0.2",
    "web-vitals": "^1.1.2"
  }
```
### Scripts
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

## Dataset 💽
Ik maakte hiervoor alleen gebruik van de carpool dataset van de RDW:
[Carpool dataset](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx)

## Variabelen 🗄️

De volgende variabellen zijn gebruikt van de RDW dataset:

- AreaDesc - De naam van de carpool locatie
- aantal_parkeer_plaatsen - Variabel die de aantal parkeerplaatsen van een carpool locatie laat zien
- aantal_laad_punten - Variabel die de aantal laadpunten van een carpool locatie laat zien
- toegankelijk_voor_gehandicapten - Variabel die de aantal carpool locaties laat zien die toegankelijk voor gehandicapten zijn
- Location -  Variabel die de locatie zien in coordinaten van de carpool locaties

## Sources ℹ️
[CurranKelleher. (2018, 23 augustus). Data Visualization 2018 Course Overview [Video]. YouTube.]
(https://www.youtube.com/watch?v=vHqTbSd4D4I&ab_channel=CurranKelleher)
