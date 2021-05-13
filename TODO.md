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
    

4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
    - [X] definieer functie
    - [X] voeg parameter toe
    - [X] Maak variable aan om string op te slaan en geef deze een lege string waarde  
    - [X] loop door de array
    - [X]  if statement wanneer teller i gelijks is aan 0 dan de eerste string anders volgende steeds toevoegen
    - [X] voeg elke entry toe aan de string 
    - [X] return string
    - [X] roep functie aan met argument response.data[0].currencies

5. - [X] checked, still works. 

6. - [X] defineer functie
   - [X] voeg parameter toe
   - [X] Maak variabele aan om string in op te slaan
   - [X] destruct array
   - [X] wijs eerste entry array toe aan string
   - [X] bepaal of de array ook meer dan 2 entries heeft en voeg anders een , of and toe. 
   - [X] voeg tweede entry van array aan string toe
   - [X] Maak een loop om, wanneer aanwezig, de rest entries toe te voegen.
   - [X] Return string
    -[X] Roep functie aan
    
7. Voeg een plaatje toe aan de pagina (flag van land)

- [X] url van het plaatje  (uit response van de api)
  -[X] HTML
    - [X] div maken (met id)
    - [X] div selecteren (getElement)
    - [X] create element -> img
    - [X] url toevoegen aan plaatje img.crs = url, img.setAttribut(`src`, url)  
    - [X] appendChild -> aan divje
    
8. Maak een input veld op de pagina en zorg ervoor dat als de gebruiker op enter drukt,

- [X] HTML
    - [X] Maak een inputveld
    - [X] id geven aan het inputveld
    - [X] Interacties 
      - [X] inputveld selecteren
      - [X] eventListener inputveld toevoegen (keyup)
    - [ ] in het event kijken naar de code event.code
    - [ } als event.code enter is dan -> data ophalen uit de api
    
9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor de get request

- [ ] html
  - [ ] Selecteer het input veld (const inputfield = document..)
  - [ ] inputfield.value -> 
  - [ ] In de url van de getrequest het land vervangen door de dynamische waarde  

