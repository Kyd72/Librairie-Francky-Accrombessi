<template>
  <RouterLink  to="/" custom v-slot="{ navigate }"><div id="manipulationLivreID">
  <CouvertureLivre :livreSelection="props.livreSelection" ></CouvertureLivre>
     <LivreControlpanel @livreSupprime="navigate" @livreModifie="$emit('livreModifie','livre modifié')" :livreSelectionPanel="props.livreSelection"></LivreControlpanel>
    </div>
  </RouterLink>
</template>

<script setup>

import CouvertureLivre from "@/components/CouvertureLivre.vue";
import LivreControlpanel from "@/components/LivreControlpanel.vue";

const props=defineProps(["livreSelection"])



</script>

<style scoped>

@font-face {
  font-family: 'Poppins';
  src: url("src/assets/fonts/Poppins/Poppins.ttf") format('ttf');
}
div#manipulationLivreID{
  display: flex;
  height: 75vh;
  width: 70vw;
  margin: 4vh auto;

}
</style>