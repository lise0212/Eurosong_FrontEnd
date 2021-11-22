<template>
  <div id="app">
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">
          Home
        </li>
        <li class="c-nav-list-item">
          Contact
        </li>
      </ul>
    </nav>
    <!-- CONTENT -->
    <h1> Eurosong festival </h1>
    <div class="c-feedback warning">
      er is een fout gebeurd
    </div>
    <div class="c-feedback error">
      kapot 
    </div>
    <div class="c-feedback success">
      joepie
    </div>
  </div>
</template>

<script>
//import of whole style for the app
import style from "./SCSS/style.scss"
export default {
  name: 'App',
  
}
</script>
