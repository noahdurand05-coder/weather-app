/* ======================= Récupération des coordonnées GPS de l'utilisateur si il le souhaite ====================================*/ 


navigator.geolocation.getCurrentPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;


    console.log("Latitude :", latitude);
    console.log("Longitude :", longitude);
    appelAPI(latitude, longitude)
  },
  (error) => {
    const latParis = 48.866667;
    const longParis =  2.333333;
    console.log("Latitude :", latParis);
    console.log("Longitude : ", longParis);
    appelAPI(latParis, longParis)
  }
);



/* ======================= Récupération des données météos en fonctions des données utilisateur ====================================*/ 


async function appelAPI (latitude, longitude){

    const urlAPILongLat = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m)`
    

    const reponse = await fetch(urlAPILongLat)
    const data = await reponse.json()
    const temperature = data.current.temperature_2m
    
    console.log(data)

    affichMeteo(temperature)

}


/* ======================= Récupération de la saisie utilisateur avec geocoding ===================================================*/ 

const ville = document.getElementById("search-bar")
if(ville){
    ville.addEventListener("change", rechercheVille)
      
}
    async function rechercheVille() {    
      const input = document.getElementById("search-bar").value
      console.log(input)

    const urlVille =`https://geocoding-api.open-meteo.com/v1/search?name=${input}`

    const reponse = await fetch(urlVille)
    const data = await reponse.json()

          if(data.results != undefined){
    const latitude = data.results[0].latitude
    const longitude = data.results[0].longitude
      console.log(data.results[0])
      appelAPI(latitude, longitude)
    }else {
      console.log('Erreur Veuillez réessayer')
      affichErreur()
    }
        
  }




/* ======================= Fonction Affichage de la météo ===================================================*/ 


function affichMeteo(temperature){
  
  const meteoBox = document.getElementById("meteo-container")
  const temperatureBox = document.getElementById("temperature")
  const hygroBox = document.getElementById("hygro")


  meteoBox.innerHTML = ""
  

  const img = document.createElement('img')
  img.src = "Assets/Thermomètre.png";
  img.alt = "Logo Thermomètre"

  const titre = document.createElement('h2')
  titre.textContent = "Température : " + temperature + "°C"

}


/* ======================= Fonction Affichage en cas d'erreur ===================================================*/ 

function afficherErreur(){



}