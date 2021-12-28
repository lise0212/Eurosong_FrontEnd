<template>
    <div>
        <div class="c-nav">
            <button class="c-nav-list-item" @click="goToPage('home')">HOME</button>
            <button class="c-nav-list-item" @click="goToPage('game')">GAME</button>
        </div>

        <h1 class="header">Ranking</h1>
        <br><br><br>
        <div>
            <RankList
                :items="songs"
                
            />
        </div>
    </div>
    
</template>

<script>
    //components
    import RankList from "../components/RankList.vue";
    export default {
        name: "Rankingpage",
        components: {
            RankList
        },
        data(){
            return {
                songs: [],
                activeSongIndex: 0
            }
        },
        mounted() {
            this.fetchSongs();
        },
        methods: {
            goToPage(page){
                this.$emit("change-page", page);
            },
            // data methods
            fetchSongs() {
                // Get all songs
                const url = "http://webservies.be/eurosong/Songs";
                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((songs) => {
                            this.fetchArtists(songs);
                    });
                    
            },
            fetchArtists(songs) {
                    // Get all artist
                    const url = "http://webservies.be/eurosong/Artists";
                    fetch(url)
                        .then((response) => {
                            // response is text, so convert to json
                            return response.json();
                        })
                        .then((artists) => {
                            // loop over array songs with forEach method
                            songs.map((song) => {
                                // find the artist in an array
                                const artist = artists.find((artist) => artist.id == song.artist);
                                // replace the id by the artist object
                                song.artist = artist;
                                // return the new object
                                return song;
                            });
                            // change data of songs, so everything will get rerenderd;
                            this.songs = songs;
                        })
                        this.fetchPoints(songs);
                },
            fetchPoints(songs){
                let counter = 0;
                songs.forEach((song) => {
                    let url = "http://webservies.be/eurosong/Songs/" + song.id + "/points";

                    fetch(url)
                        .then((response) => {
                            return response.text();
                        })
                        .then((points) => {
                            counter++;
                            song.points = parseInt(points);

                            if (counter == songs.length) {
                            this.songs = songs;
                            }
                        })
                        .then(()=> {
                            this.songs.sort(function(a, b) {
                                return b.points - a.points;
                            });
                        })
                })        
            }
        }
}


</script>

