<template>
  <div id="app">
    <!-- HOME -->
    <Homepage 
      v-if="page == 'home'"

      @change-page="goToPage"
    />
    

    <!-- GAME -->
    <Gamepage 
      v-if="page == 'game'"

      @change-page="goToPage"
    />

    <!-- RANKING = Taak -->
    <Rankingpage 
      v-if="page == 'ranking'"

      @change-page="goToPage"
    />

  </div>
</template>

<script>
//import of whole style for the app
import style from "./SCSS/style.scss"
import Homepage from "./pages/Homepage.vue"
import Gamepage from "./pages/Gamepage.vue"
import Rankingpage from "./pages/Rankingpage.vue"
export default {
  name: 'App',
  components:{
    Homepage,
    Gamepage,
    Rankingpage
  },
  data() {
    return {
      page: "home"
    }
  },
  methods: {
    goToPage(page) {
      this.page = page;
    }
  }
}
</script>
