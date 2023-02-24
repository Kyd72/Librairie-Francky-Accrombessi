<template>

  <div id="librairieBibliotheque">
    <div id="titreBibliotheque">
    <button @click="$emit('requestGet','request')" id="headBibliotheque">AFFICHER CONTENU BIBLIOTHEQUE</button>
  </div>
    <div id="contenuBibliotheque">
      <LivreItem @suppressionLivre="handlerEventSuppressionLivre" @choixLivre="handlerEventenvoiLivreChoisiFromLibrairieBibliotheque" v-for="(livre, index) in props.listeLivres" :key=[livre.id] :pLivre="props.listeLivres[index]" :pIndex="index" ></LivreItem>


    </div>
    <span id="spanAvertissement" v-if="props.listeLivres.length===0">Votre librairie est vide!</span>


  </div>


</template>

<script setup>

import LivreItem from "@/components/LivreItem.vue";
import {onMounted, onUpdated, reactive, ref} from "vue";
import Livre from "@/livre";

const props = defineProps(["listeLivres"])




const emits=defineEmits(["livreChoisi","EventSuppressionLivreFromLibrairieBibliotheque"])

function handlerEventenvoiLivreChoisiFromLibrairieBibliotheque(livre){
  emits("livreChoisi",livre)
}

function handlerEventSuppressionLivre(event){
  emits("EventSuppressionLivreFromLibrairieBibliotheque")
}

</script>

<style scoped>

@font-face {
  font-family: 'Poppins';
  src: url("src/assets/fonts/Poppins/Poppins.ttf") format('ttf');
}

span#spanAvertissement{
  font-size: 3vh;
  color: #fbf4fc;
  font-weight: 400;
  margin: 0 38%;
  font-style: italic;
}

div#librairieBibliotheque{

  width: 70vw;
  margin: auto;
  background-color: #15172b;
  /*background-image: url("src/assets/img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover ;*/

}

div#titreBibliotheque {
  width: 70vw;
  height: 4vh;
  background-color: #1f1f1f;
  margin: auto;
}

div#contenuBibliotheque {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 0.95fr;
  grid-gap: 1vw;
  width: 70vw;
  height: auto;
  margin: auto;
}

button#headBibliotheque{
  cursor: pointer ;

}


button#headBibliotheque{

  background-color: #181818;
  margin-left: 1vw;
  color: #f2f2f2;
  font-size: 2vh;

  border: 0;

  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 1;
  text-transform: uppercase;


}








</style>