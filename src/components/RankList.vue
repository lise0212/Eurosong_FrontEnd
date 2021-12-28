<template>
    <div>
        <div class="row">
            <div class="column-33" v-for="(song, counter) in items" :key="counter">
                <div class="ranking-item-top" id="nr1" v-if="counter == 0">
                    <i class="fas fa-crown"></i>&ensp;<b>{{counter + 1}}</b> - {{ song.artist.name}} - {{ song.title }} - Nr of points: {{song.points}}
                    <br><br>
                    <iframe class="iframeTop3" :src="song.spotify" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <br><br>
                </div>

                <div class="ranking-item-top" v-if="counter > 0 && counter < 3">
                    <i class="fas fa-medal"></i>&ensp;<b>{{counter + 1}}</b> - {{ song.artist.name}} - {{ song.title }} - Nr of points: {{song.points}}
                    <br><br>
                    <iframe class="iframeTop3" :src="song.spotify"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <br><br>
                </div>
            
            </div>
        </div>
        <br><br><br><br>
        <div  v-for="(song, counter) in items" :key="counter">
            <div class="ranking-item" v-if="counter >= 3">
                <b>{{counter + 1}}</b> - {{ song.artist.name}} - {{ song.title }} - Nr of points: {{song.points}}
                <br>
                <iframe class="iframeList" :src="song.spotify" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <br><br>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "RankList",
        props: [
            "items"
        ]
    }
</script>