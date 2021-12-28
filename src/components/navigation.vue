<template>
    <nav class="c-nav">
        <span>
            {{companyname}}
        </span>
      <ul class="c-nav-list">
        <li class="c-nav-list-item">
          Home
        </li>
        <li class="c-nav-list-item">
          Contact
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
    name: "Navigation",
    data(){
        return{
            showNavigation: true,
            links: {
                "home":
                "contact"
            }

        }
    }
}
</script>
