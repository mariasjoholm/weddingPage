'use strict'; 

//datum till vigseln

//Byt ut 'Jun 28, 2026 15:30:00' till datum för giftemål 

// alltså månad, dag, år, tid i samma logik som tidigare 
let vigselTid = new Date('Jun 28, 2026 15:30:00').getTime();
//uppdatera nedräkning för varje timme
let uppdateraNedRakning = () =>{
    let nu = new Date().getTime(); 
    let tidKvar = vigselTid - nu; 

    //Beräkna dagar och timmar 
    let AllaDagarKvar = Math.floor(tidKvar/(1000*60*60*24)); 
    let dagarKvar = AllaDagarKvar%30; 
    let moon = Math.floor(AllaDagarKvar/30); 
    let timmarKvar = Math.floor((tidKvar %(1000*60*60*24))/(1000*60*60)); 
    let minuterKvar = Math.floor((tidKvar % (1000 * 60 * 60)) / (1000 * 60));


    //Skapa element och lägg till datum i texten 
    let nedRakningDiv =  document.getElementById("nedRakning"); 
    nedRakningDiv.appendChild(document.createTextNode(moon + " Månader, "+ dagarKvar + " dagar, " 
    + timmarKvar + " timmar " + minuterKvar + " Minuter kvar till vigseln💖"))

    //När tiden tar slut 
    if(tidKvar < 0){
        document.getElementById("nedRakning").innerHTML = "Våran dag🥰";
    }
}; 
    //Lägger till funktionen och timer 
    uppdateraNedRakning (); 
    setInterval(uppdateraNedRakning, 60 * 60 * 1000); 