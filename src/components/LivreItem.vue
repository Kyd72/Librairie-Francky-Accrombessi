<template>

  <div class="item"  >
    <RouterLink style="display: flex ; margin-top: 2%"  to="/ManipulationLivre">
    <p @click="envoiLivreChoisi" class="titre">{{props.pLivre.titre}}</p>
  </RouterLink>
    <div class="prix">{{props.pLivre.prix}} €
  </div>
  <button id="supprimer" @click="handlerSupprimer"></button>
  </div>
</template>

<script setup>
import {ref} from "vue";
//p pour variables de props
const props= defineProps(["pLivre","pIndex"])

const emit= defineEmits(["choixLivre","suppressionLivre"])
function envoiLivreChoisi(event){
  emit("choixLivre", props.pLivre )
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start'
  };
  document.getElementById("livreCouvertureID").scrollIntoView(scrollOptions)
}

function suppressionLivreChoisi(){
  emit("suppressionLivre")
  //défiler automatiquement vers la librairie pour afficher le nouveau livre
  const scrollOptions = {
    behavior: 'smooth',
    block: 'end'
  };
  document.getElementById("librairieBibliotheque").scrollIntoView(scrollOptions);
}

function handlerSupprimer(event){
  let idLivre = props.pLivre.id

  const urlToRequest = `https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres/${idLivre}`

  let fetchOptions = {
    method: "DELETE"

  }

  fetch(urlToRequest, fetchOptions).then((result)=>{return result.json()}).then(
      (json)=>{json.status==1?suppressionLivreChoisi(): alert("Livre non supprimé")}).catch(
          (error)=>{console.log(error)})


}


</script>

<style scoped>

@font-face {
  font-family: 'Poppins';
  src: url("src/assets/fonts/Poppins/Poppins.ttf") format('truetype');
}

div.item:hover {
  background-color: #333333;
}

div.item{
  margin-top: 1vh;
  margin-left: 1vh;
  margin-right: 2px;
  width: 1.2fr;
  border-radius: 0.75vh;
  background-image: url("src/assets/img1.png");
  background-color: #bbbaba;
}

p.titre {

  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  background-image: url("src/assets/img1.png");
  color: #f2f2f2;


  margin-top: 10%;
  margin-left: 2%;

  line-height: 100%;

  height: 14vh;
  width: 7vw;
  overflow: hidden;
  font-size: 2vh;

}

div.prix{
  display: flex;
font-size: 2vh;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  height: auto;
  width: auto;
  margin-top: 0.5vh;
 background-color: #08d;
}

button#supprimer{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  height: 2vh;
  width: 2vh;


  position: absolute;
  font-size: 1.3vh;
  right: 0.7vh;
  bottom: 0.5vh;
  background-color: #08d;
  border-radius: 0.18vw;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  outline: 0;
  text-align: center;

  background-image: url("src/assets/delete_icone.png");
  background-position: center;
  background-size: 2vh 2vh ;

}

button#supprimer:active {
  background-color: #bbbaba;

}



</style>