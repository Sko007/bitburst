<script setup lang="ts">
import { useStore } from 'vuex';
import {ref, reactive} from 'vue'
import { FadeInOut } from 'vue3-transitions'


const store = useStore()
const state = reactive({
    backlogClicked : true


})

function changeClass(data: any){
data.done =!data.done

}
const backlogitems = store.state.backlog

function deleteNotiz(id: Number){
    const object = {id: id, backlogClicked : state.backlogClicked}
store.dispatch("deleteNotiz", object)
}

function updateNotiz(id:Number){
store.dispatch("updateNotiz", id)
}
</script>

<template>
<div v-for="data, key, index in backlogitems" class="max-w-sm rounded overflow-hidden shadow-lg mt-6" >   
      <div  class="px-6 py-4" :class="{active: data.done}" >
    <router-link class="router" :to="{ name: 'detail', params: { id: key }}"><div class="font-bold text-xl mb-2">{{ data.headline }}</div></router-link>
    <p class="text-gray-700 text-base">
      {{ data.text }}
    </p>
    <div class="date">{{
     data.date }}</div>
    <div id="flexbox">
      <div>
<button @click ="deleteNotiz(data.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1">
  Delete
</button>
</div>
<div><button @click="changeClass(data)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Done
</button>
</div>

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
  background-color:#EEEEEE;
  opacity: 0.9;
  text-decoration: line-through;


}
.router{
color:black;


}



</style>
