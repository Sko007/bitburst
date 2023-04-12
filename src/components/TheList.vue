<script setup lang="ts">
import { useStore } from 'vuex';
import {ref} from 'vue'
import { FadeInOut } from 'vue3-transitions'


const store = useStore()
let dataItems = store.state.notizen
let show = ref(false);
const isOpen = () => (show.value = !show.value);
function changeClass(data: any){
data.done =!data.done

}
function backlog(id: Number){
  store.dispatch("addToBacklog", id)

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
    <router-link class="router" :to="{ name: 'detail', params: { id: key }}"><div class="font-bold text-xl mb-2">{{ data.headline }}</div></router-link>
    <p class="text-gray-700 text-base">
      {{ data.text }}
    </p>
    <div class="date">{{ data.date }}</div>
    <div id="flexbox">
      <div>
    <button @click="updateNotiz(data.id)"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Update
</button>
<button @click ="deleteNotiz(data.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1">
  Delete
</button>
</div>

<div>
  
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="isOpen"
        class="flex items-center p-2 text-indigo-100 bg-blue-700 rounded-md"
      >
        <span class="mr-4">...</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="abs absolute right-0 py-2 mt-2 bg-blue-700 rounded-md shadow-xl  w-44"
      >
      
          <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeClass(data)">done</button>
        
          <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="backlog(data.id)">Backlog</button>
        
        
      </div>
    </div>
  </div>       
    
  </div>


  </div>


  

</div>
</template>

<style>
.abs{
  display:flex;
position: fixed;
z-index:99999999999999999999999999999999999999999999999999999999999999999999;

}

#flexbox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;


}
.active{
  color:black;
  opacity: 0.8;
  /* background-color:#EEEEEE; */
  text-decoration: line-through;


}
.router{
color:black;


}



</style>
