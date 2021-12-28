<template>
    <div>
      <div class="c-nav">
        <button class="c-nav-list-item" @click="goToPage('game')">GAME</button>
        <button class="c-nav-list-item" @click="goToPage('ranking')">RANKING</button>
        </div>
        
    <h1 class="header"> Eurosong voting app </h1>

    </div>
</template>

<script>
export default {
    name: "Homepage",
    methods: {
        goToPage(page){
            this.$emit("change-page", page);
        }
    }
}
</script>
