/* Récupération des coordonnées GPS de l'utilisateur si il le souhaite*/


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

const ville = document.getElementById("search-bar")
if(ville){
    ville.addEventListener("click", )
}


async function searchVille(){

    

    const urlVille =`https://geocoding-api.open-meteo.com/v1/search?name=${ville}`

    const reponse = await fetch(urlVille)
    const data = await reponse.json()

    console.log(data)

}






/* Récupération des données météo en fonction de ma longitude et latitude*/

async function appelAPI (latitude, longitude){

    const urlAPILongLat = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m)`
    

    const reponse = await fetch(urlAPILongLat)
    const data = await reponse.json()
    
    console.log(data)

}



