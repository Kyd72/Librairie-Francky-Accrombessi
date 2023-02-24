<template>

  <div id="c1">


    <div  id="c2">

      <h1>INFORMATIONS SUR LA LIBRAIRIE</h1>
      <div class="ligne">
        <span class="information">NOMBRE DE LIVRES DIFFERENTS: </span> <span class="valeur"> {{props.listeLivresPourAbout.length}}</span>
      </div>

      <div class="ligne">
        <span class="information">QUANTITE TOTALE DE LIVRES : </span><span class="valeur"> {{props.listeLivresPourAbout.reduce(
          (res,v)=>res+v.qtestock,0
      )}}

      </span>
      </div>


      <img id="iconeFemmeLecture" src="src/assets/img_backgrounf.png" alt="icône femme lecture">


    </div>


  </div>

</template>

<script setup>


import {onMounted, reactive} from "vue";
import Livre from "@/livre";


const props=defineProps(['listeLivresPourAbout'])






</script>

<style>

img#iconeFemmeLecture {
height: 32.8vh;
  width: 25vw;
  position: absolute;
  right: 1vw;
  bottom: 1vh;
}


@font-face {
  font-family: 'Poppins';
  src: url("src/assets/fonts/Poppins/Poppins.ttf") format('truetype');
}




div#c1{

  height: 75vh;
  width: 100vw;
  margin: 4vh auto;





}










h1{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  color: #FFFFFF;

  font-size: 3vh;
  line-height: 100%;
  text-align: center;

  margin: 7% 0;

}

div#c2{
  font-family: 'Poppins',sans-serif;
  font-size: 2vh;
  font-weight: 20;
  text-transform: uppercase;
  color: #FFFFFF;

  background-color: #15172b;
  border-radius: 1.3vw;
  box-sizing: border-box;
  height: 75vh;
  padding: 0.75vw;
  width: 40%;
  margin: 0 auto;

}

span.valeur{
  color: #0066bb;
}

</style>
