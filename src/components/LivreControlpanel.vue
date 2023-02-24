<template>
<div id="livreControlPanelID">


  <div v-if="props.livreSelectionPanel.id!==-999" id="informationsLivre">

    <h1>INFORMATIONS SUR LE LIVRE</h1>
    <p>ID Livre:  <span class="detailsLivreS">{{props.livreSelectionPanel.id}}</span></p>
    <p>Titre Livre: <span class="detailsLivreS">{{props.livreSelectionPanel.titre}}</span> </p>
    <p>Quantité Livre: <span class="detailsLivreS">{{props.livreSelectionPanel.qtestock}}</span> </p>
    <p>Prix: <span class="detailsLivreS">{{props.livreSelectionPanel.prix}} €</span></p>
  </div>

  <h1>AUGMENTER/DIMINUER QTE LIVRE</h1>
  <div v-if="props.livreSelectionPanel.id!==-999" id="controlPanel">

    <button :disabled="qteLivre+props.livreSelectionPanel.qtestock<=0" @click="()=>qteLivre=qteLivre-1" class="submit" id="s1">-</button>
      <div class="input-container ic2">
        <input id="qteStock" min="prop" step="1" class="input" v-model="qteLivre" type="number" placeholder=" " />
      </div>
      <button @click="()=>qteLivre=qteLivre+1" class="submit" id="s2">+</button>
    <button :disabled="qteLivre+props.livreSelectionPanel.qtestock<0" class="submit" @click="handlerClickModifier" id="s3">CONFIRMER</button>


  </div>
  <h1>SUPPRIMER LE LIVRE</h1>

  <button v-if="props.livreSelectionPanel.id!==-999"  @click="handlerClickSupprimer" class="submit2">SUPPRIMER</button>

  <h1 v-if="(qteLivre+props.livreSelectionPanel.qtestock<=0) && (props.livreSelectionPanel.id!==-999)" id="avertissement"> Quantité maximale atteinte !</h1>

</div>
</template>

<script setup>

import {onMounted, onUpdated, reactive, ref} from "vue";
import Livre from "@/livre";

const props=defineProps(["livreSelectionPanel"])
const emits=defineEmits(["livreModifie", "livreSupprime"])




const qteLivre= ref(0)

function handlerClickModifier(e){



  props.livreSelectionPanel.qtestock=props.livreSelectionPanel.qtestock+qteLivre.value

  const decrease= ()=>{let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({id:props.livreSelectionPanel.id,
        titre:props.livreSelectionPanel.titre,
        qtestock:props.livreSelectionPanel.qtestock,
        prix:props.livreSelectionPanel.prix}),
    };


    const urlToRequest ="https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres"

    fetch(urlToRequest, fetchOptions).then(
        (result)=>{return result.json()}).then(
        (json)=>{json.status==1?handleEmitLivreModifie():alert("Livre non ajouté")}).catch(
        (error)=>{console.log(error)})

  }


  props.livreSelectionPanel.qtestock===0?handlerClickSupprimer():decrease()

  qteLivre.value=0




}

function handlerClickSupprimer(event){
  let idLivre = props.livreSelectionPanel.id

  const urlToRequest = `https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/1/livres/${idLivre}`

  let fetchOptions = {
    method: "DELETE"

  }

  fetch(urlToRequest, fetchOptions).then((result)=>{return result.json()}).then(
      (json)=>{json.status==1?handleEmitLivreSupprime(): alert("Livre non supprimé")}).catch(
      (error)=>{console.log(error)})


}



function handleEmitLivreModifie(){
emits("livreModifie")
}

function handleEmitLivreSupprime(){
  emits("livreModifie")
  emits("livreSupprime")
}







</script>


<style scoped>


@font-face {
  font-family: 'Poppins';
  src: url("src/assets/fonts/Poppins/Poppins.ttf") format('ttf');
}
button#s1{
  margin-left: 22%;
}

span.detailsLivreS {

  color: #ff7ead;
}










div#controlPanel{
  display: flex;
  margin: 10% 0;




}



div#livreControlPanelID{

  background-color: #15172b;
  border-radius: 1.3vw;
  box-sizing: border-box;
  height: 75vh;
  padding: 0.75vw;
  width: 40%;
  font-size: 2vh;
  margin: 0 auto;



}

.submit {
  display: block;
  background-color: #08d;
  border-radius: 0.80vw;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 3vh;
  height: 5vh;
  width: 2.5vw;
  text-align: center;
  font-weight: 800;
  margin: 2% 4%;
}

.submit2{
  display: block;
  background-color: #ee0909;
  border-radius: 0.80vw;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 1.5vh;
  height: 5vh;
  width: auto;
  text-align: center;
  font-weight: 600;
  margin: auto;
}

.submit:disabled{
  background-color: #022483;
}

button#s3:disabled{
  background-color: #022483;
}

button#s3:active{
  background-color: #022483;
}

button#s3{
  display: block;
  background-color: #08d;
  border-radius: 0.80vw;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 1.5vh;
  height: 5vh;
  width: auto;
  text-align: center;
  font-weight: 900;
  margin: auto;
}

.submit:active {
  background-color: #022483;

}

.submit2:active  {
  background-color: #be3333;

}

.input-container {
  height: 7vh;

  width: 30%;

}


.input {
  background-color: #303245;
  border-radius: 1.7vh;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  outline: 0;
  text-align: center;
  font-size: 2.5vh;
  height: 100%;
  width: 100%;
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

div#informationsLivre{
  font-family: 'Poppins',sans-serif;
  font-size: 2vh;
  font-weight: 20;
  text-transform: uppercase;
  color: #FFFFFF;
}

h1#avertissement{

  color: #ff4141;


  font-size: 1.4vh;

}
</style>