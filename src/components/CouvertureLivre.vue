<template>
<div id="livreCouvertureID">

  <div id="couvrertureLivreID" class="group1">

    <div id="pageCouverture" class="rectangle2">
      <div id="lisiereGauche" class="rectangle3"></div>
      <div id="conteneurTitre" class="rectangle1">
        <div id="titreLivre">{{props.livreSelection.titre}}</div>
      </div>
    </div>
  </div>
  <div id="ombreLivre" class="rectangle5"></div>


</div>
</template>

<script setup>

import {onMounted, onUpdated, ref} from "vue";

const props=defineProps(["livreSelection"])



</script>

<style scoped>
div#livreCouvertureID{
  display: flex;
  height: 75vh;
  width: 30vw;
  margin: auto;




}


div#couvrertureLivreID{

  width: 20vw;
  height: 62.6vh;

margin: 10% auto auto 15%;
  filter: drop-shadow(-2.13vh 0.6vw 2.2vw rgba(0, 0, 0, 0.25));

}

div#ombreLivre{
  width: 29.7vw;
  height: 62.4vh;

  background: linear-gradient(272.79deg, rgba(0, 0, 0, 0) 2.23%, rgba(0, 0, 0, 0.79) 97.25%);
  filter: blur(27vh);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

div#pageCouverture{
  display: flex;
  width: 20vw;
  height: 62.4vh;


  background: #27262F;
  border-radius: 8px 6px 6px 8px;
}

div#lisiereGauche{
  width: 1.35vw;
  height: 62.4vh;


  background: linear-gradient(270deg, #292731 0%, #121116 26.04%, #17181E 39.58%, #313147 57.81%, #0E0F0E 83.33%, #120F10 100%);
  border-radius: 0.8vh 0px 0px 0.8vh;

}

div#conteneurTitre{
  box-sizing: border-box;


  width: 17vw;
  height: 58vh;
margin: auto;

  background: #27262F;
  border: 1px dashed #ffffff;
  border-radius: 2px;
}

div#titreLivre{

  width: 17vw;
  height: 35vh;
  margin-top: 15%;
  margin-left: 5%;


  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3.3vh;
  line-height: 100%;
  /* or 74px */
  text-transform: uppercase;

  color: #FFFFFF;

}

</style>