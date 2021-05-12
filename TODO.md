0. Setup

1. Zoek knop maken -> die haalt de data op over België
    - [X] Html
        - [X] Button maken
        - [X] Geef hem een ID
      - [ ] Interactie programmeren
          - [X] Knopje selecteren
          - [X] document.getelementByID
          - [X] .addEventListener
          - [X] Event handler async functie maken (uitgevoerd als je klikt)
          - [ X Request maken naar API
            - [X] axios installeren / importeren
            - [X] url opzoeken voor belgie (api docs)  
            - [X] axios.get(url)
            - [X] await (anders krijg je een promise)
            - [X] We hebben de data (loggen)
    
7. Voeg een plaatje toe aan de pagina (flag van land)

- [ ] url van het plaatje  (uit response van de api)
  -[] HTML
    - [ ] div maken (met id)
    - [ ] div selecteren (getElement)
    - [ ] create element -> img
    - [ ] url toevoegen aan plaatje img.crs = url, img.setAttribut(`src`, url)  
    - [ ] appendChild -> aan divje
    
8. Maak een input veld op de pagina en zorg ervoor dat als de gebruiker op enter drukt,

- [] HTML
    - [ ] Maak een inputveld
    - [ ] id geven aan het inputveld
    - [ ] Interacties 
      - [ ] inputveld selecteren
      - [ ] eventListener inputveld toevoegen (keyup)
    - [ ] in het event kijken naar de code event.code
    - [ ] als event.code enter is dan -> data ophalen uit de api
    
9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor de get request

- [ ] html
  - [ ] Selecteer het input veld (const inputfield = document..)
  - [ ] inputfield.value -> 
  - [ ] In de url van de getrequest het land vervangen door de dynamische waarde  

