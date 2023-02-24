<script setup>
import {  RouterView } from 'vue-router'
import LibrairieHeader from "@/components/LibrairieHeader.vue";
import LibrairieBibliotheque from "@/components/LibrairieBibliotheque.vue";
import { onMounted,  reactive} from "vue";
import Livre from "@/livre";





const listeLivresPourLibrairie = reactive([])
const listeLivresPourAbout = reactive([])



function getLivres(){
  listeLivresPourLibrairie.splice(0)//réinitialiser la liste de livres
  listeLivresPourAbout.splice(0)//réinitialiser la liste de livres

  let fetchOptions = {
    method :"GET"
  }

  const urlToRequest = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres"

  fetch(urlToRequest,fetchOptions).
  then((result)=>{return result.json()}).
  then((dataJson)=>{
    console.log(dataJson)

    dataJson.forEach((livre)=>{listeLivresPourLibrairie.push(new Livre(livre.id ,livre.titre,livre.prix,livre.qtestock))})
    dataJson.forEach((livre)=>{listeLivresPourAbout.push(new Livre(livre.id ,livre.titre,livre.prix,livre.qtestock))})


  }).then(()=>{listeLivresPourLibrairie.reverse()}//afficher le dernier livre ajouté en premier
  ).catch((error)=>{console.log(error)})

}

function handlerEventAjoutNouveauLivre (message){
  getLivres();


}

function handlerEventSuppressionLivreFromLibrairieBibliotheque (message){
  getLivres();


}

function handlerEventLivreModifieFromManipulationLivre(message){
  getLivres();


}

function handleEventRechercheLivre(listeLivresTrouves){
  listeLivresTrouves.reverse() //afficher le dernier livre ajouté en premier
  listeLivresPourLibrairie.splice(0)
  listeLivresTrouves.forEach((v)=>{listeLivresPourLibrairie.push(v)})

}

function handlerEventSelectionLivre(livre){
  livreChoisiPourModification.splice(0)
  livreChoisiPourModification.push(livre)

}

const livreChoisiPourModification= reactive([new Livre(-999,'CLIQUER SUR UN LIVRE',0,0)])

onMounted(getLivres)




</script>

<template>
  <LibrairieHeader @requeteRecherche="handleEventRechercheLivre"></LibrairieHeader>
  <RouterView  :listeLivresPourAbout="listeLivresPourAbout" :livreSelection="livreChoisiPourModification[0]"  @nouveauLivre="handlerEventAjoutNouveauLivre" @livreModifie="handlerEventLivreModifieFromManipulationLivre"/>
  <LibrairieBibliotheque :listeLivres="listeLivresPourLibrairie" @livreChoisi="handlerEventSelectionLivre" @EventSuppressionLivreFromLibrairieBibliotheque="handlerEventSuppressionLivreFromLibrairieBibliotheque"  @requestGet="getLivres"></LibrairieBibliotheque>
 <header>

    <div class="wrapper">
<!--      <nav>
        <RouterLink   to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>-->
    </div>
  </header>


</template>

<style scoped>




</style>
