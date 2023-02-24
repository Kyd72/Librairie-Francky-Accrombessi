<template>

  <div id="ajouterLivreView">
    <div class="form"  >
    <div class="title">AJOUTER UN LIVRE</div>
    <div class="subtitle">Entrez les détails du livre!</div>
    <div class="input-container ic1">
      <input id="titre" class="input" type="text" v-model="titreLivre" placeholder=" " />
      <div class="cut"></div>
      <label for="titre" class="placeholder">Titre du livre</label>
    </div>
    <div class="input-container ic2">
      <input id="prix" min="0" step="0.01" v-model="prixLivre"  class="input" type="number" placeholder=" " />
      <div class="cut"></div>
      <label for="prix" class="placeholder">Prix en €</label>
    </div>
    <div class="input-container ic2">
      <input id="qteStock" min="1" step="1" class="input" v-model="qteLivre" type="number" placeholder=" " />
      <div class="cut cut-short"></div>
      <label for="qteStock" class="placeholder">Quantité</label>
    </div>
    <button :disabled="!((qteLivre.valueOf()>0)&&(titreLivre.length>0)&&(prixLivre.valueOf()>0))"
        @click="handlerAjouter" class="submit">AJOUTER</button><!--Activer le bouton uniquement
    quand tous les champs sont remplis-->
  </div>
  </div>

</template>

<script setup>

import {onUpdated, ref} from "vue";
import Livre from "@/livre";

const titreLivre=ref('')
const prixLivre=ref('')
const qteLivre=ref('')


const emit = defineEmits(['nouveauLivre','requeteScroll'])








//fonction qui transforme en un objet JSON les données présentes dans le formulaire
function creerLivreSansIDAvecFormulaire(){
  return {titre: titreLivre.value, qtestock:qteLivre.value, prix:prixLivre.value}
}

//Fonction qui fait une requête POST et ajoute un nouveau livre au serveur
function ajouterLivre(livreSansID) {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(livreSansID),
  };


  const urlToRequest ="https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres"

  fetch(urlToRequest, fetchOptions).then((result)=>{return result.json()}).then((json)=>{json.status==1?handleEmit():alert("Livre non ajouté")}).catch((error)=>{console.log(error)})

}

//Fonction qui gère le clic sur le boutton Ajouter
function handlerAjouter () {

  ajouterLivre(creerLivreSansIDAvecFormulaire())

  //Remettre à zéro les champs du formulaire après requête
  qteLivre.value="";
  titreLivre.value="";
  prixLivre.value="";

  //défiler automatiquement vers la librairie pour afficher le nouveau livre
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start'
  };
  document.getElementById("librairieBibliotheque").scrollIntoView(scrollOptions);

}




//Gère l'envoi d'events
function handleEmit(){
  emit("nouveauLivre","Nouveau livre ajouté")
  emit("requeteScroll","scroll")


}




</script>

<style scoped>
div#ajouterLivreView {

  height: 75vh;
  width: 70vw;
  margin: 4vh auto;



}



.form {
  background-image: url("src/assets/f.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover ;
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  background-color: #15172b;
  border-radius: 1.3vw;
  box-sizing: border-box;
  height: 75vh;
  padding: 0.75vw;
  width: 40%;
  font-size: 2vh;
  margin: 0 auto;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 5vh;
  font-weight: bolder;
  margin: 3vh;

}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 2.25vh;
  font-weight: bold;

}

.input-container {
  height: 7vh;

  width: 100%;
}

.ic1 {
  margin-top: 5vh;
}

.ic2 {
  margin-top: 4vh;
}

.input {
  background-color: #303245;
  border-radius: 1.7vh;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  outline: 0;
  padding: 1vh 2vh 0;

  font-size: 2.5vh;
  height: 100%;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 0.7vw;
  height: 2.8vh;
  left: 1.3vw;
  position: absolute;
  top: -2.8vh;
  transform: translateY(0);
  transition: transform 200ms;
  width: 5vw;
}

.cut-short {
  width: 5vw;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(1.12vh);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 1.3vw;
  line-height: 1.4vh;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 2.8vh;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-4.2vh) translateX(0.65vw) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  display: block;
  background-color: #08d;
  border-radius: 0.78vw;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 2.52vh;
  height: 7vh;
  margin-top: 5.32vh ;
  outline: 0;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.submit:active {
  background-color: #06b;
}

.submit:disabled {
  background-color: #2c3e50;
}

</style>