<template>
<div id="barreMenuID">

  <div id="logoLibrairieID">
    <RouterLink style="display: flex ; " to="/">
    <img id="imagePourLogo" src="src/assets/logo_2.webp" alt="logo de livres">
    </RouterLink>
    <p id="textePourLogo">LIBRAIRIE</p>
  </div>

  <div class="boutonMenu" id="barreRechercheID">
    <form id="barreRechercheFormID" @submit.prevent="handlerEventSubmitPrevent">
      <input type="text" name="nom_livre" id="nomLivreID" v-model="titreARechercher" placeholder="Entrer le nom du livre">
      <input type="submit" name="submit_recherche_livre" id="submitLivreID" value="RECHERCHER">
    </form>
  </div>



  <div class="boutonMenu" id="ajouterLivreID">
    <RouterLink style="display: flex ; margin-top: 2%" to="/AjouterLivre"> <img id="ajoutLivreImageID"
   src="src/assets/add_icons.png" alt="add book"></RouterLink>
    <span id="textePourAjout">AJOUTER UN LIVRE</span>
  </div>
</div>

</template>

<script setup>
import {ref} from "vue";
import Livre from "@/livre";

const emit = defineEmits(['requeteRecherche'])
const titreARechercher=ref('')

let resultatsRecherche=[]

//Gerer clic sur bouton recherche
function handlerEventSubmitPrevent(e){

  const scrollOptions = {
    behavior: 'smooth',
    block: 'start'
  };
  document.getElementById("librairieBibliotheque").scrollIntoView(scrollOptions)



resultatsRecherche.splice(0)
  let fetchOptions = {
    method :"GET"
  }



  const urlToRequest = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres?search="+titreARechercher.value

  fetch(urlToRequest,fetchOptions).then((result)=>{return result.json()}).then((dataJson)=>{
    console.log(dataJson)

    dataJson.forEach((livre)=>{resultatsRecherche.push(new Livre(livre.id ,livre.titre,livre.prix,livre.qtestock))})


  }).then(()=>{ emit("requeteRecherche",resultatsRecherche)}).catch((error)=>{console.log(error)})


}





</script>

<style scoped>



@font-face {
  font-family: 'Coolgumz';
  src: local("Coolgumz"), url("src/assets/fonts/Coolgumz/Coolgumz_PersonalUseOnly.ttf") format('truetype');
}

@font-face {
  font-family: 'Poppins';

  src: local("Poppins"), url("src/assets/fonts/Poppins/Poppins.ttf") format('truetype');
}
span#textePourAjout{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  color: #FFFFFF;

  font-size: 1.2vh;
  line-height: 100%;
  text-align: center;

  margin: 2% 0;
}


div#barreMenuID {



  top: 0px;
  display: flex;
  width: 100vw;
  height: 8vh;
  background: #27262F;

}

div#logoLibrairieID{
  display: flex;
  width: 65vw;
  color: #eee;
  font-size: 3vh;
  font-weight: 1000;

}

input{
display: block;
  height: 4vh;
  margin: 5% 0% ;

  background-color: #ffffff;
  border-radius: 1vh;
  border: 0;
  box-sizing: border-box;
  color: #1f1f1f;
  outline: 0;

}

input#submitLivreID{
  background-color: #181818;
  margin-left: 1vw;
  color: #f2f2f2;
  font-size: 2vh;
}

input#submitLivreID:active{
  background-color: #e600ff;
}

input#submitLivreID:hover{
  background-color: #424242;
}


div#ajouterLivreID{
  display: flex;
  width: 15vw;
  height: 8vh;
  flex-direction: column;
  margin-left: 100px  ;

  border-left: 2px solid cadetblue;




}

div#ajouterLivreID:active{
  background-color: #3b3b3b;
}

form#barreRechercheFormID{
  display: flex;
  margin :auto;

}

div#barreRechercheID{
  width: 20vw;
  height: 10vh;


}





p#textePourLogo{
  margin: auto 1vw ;
  font-family:  'Coolgumz', sans-serif;
}


img#ajoutLivreImageID{

  width: 2vw;
  margin: auto;

}

img#imagePourLogo{
  margin-left: 10vw;
}




</style>