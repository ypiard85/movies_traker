<template>
    <div class="mb-5">
        <button class="btn btn-primary" @click="ByName" >
           ASC
        </button>
        <button class="btn btn-info ms-2" @click="BySortie" >Date de sortie</button>
        <button class="btn btn-warning ms-2" @click="ByLike" >Les mieux notés</button>
    </div>
</template>



<script>

export default{
    name: 'SortData',
    props: ['movies'],

    data(){
        return{
            filter: false,
            filterSortie: false,
            filterLike: false
        }
    },

    mounted(){

    },

    methods:{
        ByName(){
            this.filter = !this.filter
                if(this.filter){
                    this.movies.sort( function(a, b){
                    if(a.title > b.title ){
                            return - 1
                        }
                    })
                }else{
                    this.movies.sort( function(a, b){
                    if(a.title < b.title){
                            return - 1
                        }
                    })
                }

            },

        BySortie(){

             this.filterSortie = !this.filterSortie
                if(this.filterSortie){
                    this.movies.sort( function(a, b){
                    if(a.release_date > b.release_date ){
                            return - 1
                        }
                    })
                }else{
                    this.movies.sort( function(a, b){
                    if(a.release_date < b.release_date ){
                            return - 1
                        }
                    })
                }
            },

        ByLike(){

             this.filterLike = !this.filterLike
                if(this.filterLike){
                    this.movies.sort( function(a, b){
                    if(a.vote_average > b.vote_average){
                            return - 1
                        }
                    })
                }else{
                    this.movies.sort( function(a, b){
                    if(a.vote_average < b.vote_average){
                            return - 1
                        }
                    })
                }
            },

    }

}


</script>