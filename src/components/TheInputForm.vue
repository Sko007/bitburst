<script setup lang="ts">
import {  ref } from 'vue'
import { computed } from "@vue/reactivity"
import { reactive,watch } from "vue";
import { useStore } from 'vuex';
const store = useStore()

const form = reactive({
  id:0,
  headline: "",
  text:"",
  clicked: store.state.clicked
})

//check if value in store has changed
watch(() => store.state.clicked, function() {
      console.log('value changes detected',store.state.notiz);
      form.headline = store.state.notiz.headline
      form.text = store.state.notiz.text

   });

computed(() => store.state.clicked)

//check if value in template has changed and store it in the form
const headline = computed({
  get() {
    console.log("check", form.headline)
    return form.headline
  },
  set(val) {
    form.headline = val
  }
})

const text = computed({
  get() {
    return form.text
  },
  set(val) {
    
    form.text = val
  },

 
})
//submit function
function submit(){
 if(store.state.clicked === false){
  form.id = form.id + 1
  store.dispatch("addNotiz", {id:form.id, headline:form.headline, text:form.text, date: new Date().toString().slice(0,24)})
  form.headline = ""
  form.text = ""
}else{
store.dispatch("addNotiz", {id:form.id, headline:form.headline, text:form.text, date: new Date().toString().slice(0,24)})
  form.headline = ""
  form.text = ""




}
}


</script>

<template>
  <div class="greetings mt-2">
    <div class="w-full max-w-xs">
  <form type="submit" class="bg-white rounded  mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Headline
      </label>
      <input  v-model="headline" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Headline">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
        Text
      </label>
      <input  v-model ="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="text">
      
    </div>
    <div class="flex items-center justify-between">
      <button  @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Insert
      </button>
      
    </div>
  </form>
 
</div>  
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
