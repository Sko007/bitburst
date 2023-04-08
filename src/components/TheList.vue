<script setup lang="ts">
import { useStore } from 'vuex';


const store = useStore()
let dataItems = store.state.notizen


function deleteNotiz(id: Number){

store.dispatch("deleteNotiz", id)
}

function updateNotiz(id:Number){
store.dispatch("updateNotiz", id)


}


</script>

<template>
<div v-for="data in dataItems" class="max-w-sm rounded overflow-hidden shadow-lg mt-6   ">

    
    
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ data.headline }}</div>
    <p class="text-gray-700 text-base">
      {{ data.text }}
    </p>
    <div class="date">{{ data.date }}</div>
    <button @click="updateNotiz(data.id)"  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Update
</button>
<button @click ="deleteNotiz(data.id)" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Delete
</button>


  </div>
</div>

</template>

<style>
.date{
  color:


}


</style>
