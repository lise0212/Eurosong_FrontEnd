<template>
    <div class="row" >
        <div class="column-33">
            
            <button @click="changeIndex(-1)">
                Previous
            </button>
        </div>
        
        <div class="column-33">
            <div  v-for="(song, index) in items" :key="song.id">
                <div class="spotify-item" v-if="index == activeIndex">
                    {{ song.artist.name}} - {{ song.title }}
                    <br>
                    <iframe  :src="song.spotify" width="50%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>            
            </div>
        </div>

        <div class="column-33">
            
            <button @click="changeIndex(1)">
                Next
            </button>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: [
            "items",
            "activeIndex"
        ],

        methods: {
            changeIndex(value){
                // copy, you can not change props directly
                let index = this.activeIndex;

                // -1 / +1
                index += value;

                //check if index is the beginning or ending
                if(index < 0){
                    index = this.items.length -1;
                }
                else if(index == this.items.length){
                    index = 0;
                }
                
                //change index in gamepage                
                console.log(index);
                this.$emit("change-index", index);
            }
        }
    }
</script>