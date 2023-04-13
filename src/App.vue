<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheInputForm from './components/TheInputForm.vue'
import TheBacklog from "./components/TheBacklog.vue"
</script>

<template>
    
  <header>
    <div class="margin">    <img alt="Bitburst logo" class="logo" src="@/assets/Capture.png" width="125" height="125" />
    </div>

    <div class="wrapper">

      <nav> 
   <div class="center">
   <RouterLink class="router" to="/">Notizen</RouterLink>
   <RouterLink class="router" to="backlog">Backlog</RouterLink>
  </div>
 </nav>
      <TheInputForm />
      
    </div>
  
  </header>
 

  <RouterView ></RouterView>
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.margin{
  margin-top: 2.5rem;

}
.router{

  color:black;
 
}
.router:hover{
background-color: white;
opacity: 0.6;

}
.logo {
  display: block;
  margin-top:2px;
}

nav {
  width: 100%;
  font-size: 12px;
  display:flex;
  justify-content: center;
  margin-top: 2rem;
  margin-right:4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
.wrapper {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-self:center;
}
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;
    
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
