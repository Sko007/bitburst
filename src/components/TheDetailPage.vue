<script setup lang="ts">
import { useStore } from 'vuex';
import {ref} from 'vue'


const store = useStore()
let dataItems = store.state.notizen
const addClass = ref(false)
console.log("addClass", addClass)

function changeClass(data :any){
data.done =!data.done

}

function deleteNotiz(id: Number){
store.dispatch("deleteNotiz", id)
}

function updateNotiz(id:Number){
store.dispatch("updateNotiz", id)
}
</script>

<template>
<div v-for="data, key, index in dataItems" class="max-w-sm rounded overflow-hidden shadow-lg mt-6" >   
  <div  class="px-6 py-4" :class="{active: data.done}" >
   <div class="font-bold text-xl mb-2">{{ data.headline }}</div>
    <p class="text-gray-700 text-base">
      {{ data.text }}
    </p>
    <div class="date">{{ data.date }}</div>
    <div id="flexbox">
      <div>
    <button @click="updateNotiz(data.id)"  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Update
</button>
<button @click ="deleteNotiz(data.id)" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Delete
</button>
</div>
<button @click="changeClass(data)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Done
</button>
</div>
  </div>
</div>
</template>

<style>
#flexbox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;


}
.active{
  color:black;
  background-color: green;
  opacity: 0.9;


}



</style>
