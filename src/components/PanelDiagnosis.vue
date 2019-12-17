<template>
    <div>
        <div id="header">
            <h1 class="presentation">{{ msg }}</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col py-1 presented">
                    <h2>Properties</h2>
                    <DisplayProperties :properties="properties" @set-diagnosis="findTheTruth"/>
                </div>
                <div class="col py-1 presented">
                    <h2>To be verified</h2>
                    <DisplayOthers>To be continued...</DisplayOthers>
                </div>
                <div class="col py-1 presented">
                    <h2>Elements</h2>
                    <DisplayElements v-if="!done" :elements="elements" />
                    <DisplayElements v-else :elements="possibles" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BootstrapVue from 'bootstrap-vue'
    import DisplayProperties from '@/components/DisplayProperties.vue';
    import DisplayOthers from '@/components/DisplayOthers.vue';
    import DisplayElements from '@/components/DisplayElements.vue';
    import store from '../store/index.js'
    export default {
        props: {
            msg: String
        },
        store,
        data(){
            return {
                properties: [ 
                    "north",
                    "east",
                    "south",
                    "west",
                    "center"         
                ],
                possibles: [],
                done: false
            }
        },
        computed: {
            elements(){
                return this.$store.state.elements
            }
        },
        methods: {
            findTheTruth(){
                console.log('HAVE A GOOD DIAGNOSIS')
                let response = this.$store.state.signs
                let resScore = Object.values(response).reduce((acc, cur) => {
                    return acc + cur }
                    ,0)
                console.log('RESPONSE SCORE', resScore)
                
                for (let sign in response) {
                    for (let element of this.elements){
                        if (response[sign] === element[sign] ){
                            element.corresp += 2
                        }
                        if (response[sign] + 1 === element[sign] || response[sign] - 1 === element[sign]){
                            element.corresp += 1
                        }
                    }
                    
                }
                this.possibles = this.elements.filter(e => e.corresp > 6)
                this.possibles = this.possibles.sort((a,b) => b.corresp - a.corresp)
                console.log('SORTED:', this.possibles)
                // puis, filtrer pour le 0...
                
                
                //dans les signes, repérer les propriétés != 0, comparer avec les éléments et éliminer les éléments dont ces prop; sont = 0
                /*for (let sign in response) {

                    if (response[sign] === 0) {
                        this.possibles = this.elements.filter(e => e[sign] < 2)
                    } 
                    if (this.possibles.length === 0) this.possibles = this.elements
                }
                console.log('POSSIBLES DIFF ZERO', this.possibles)
                for (let sign in response){
                    if (response[sign] === 3) {
                        this.possibles = this.possibles.filter(e => e[sign] > 1)
                    }
                    if (this.possibles.length === 0) this.possibles = this.elements
                }
                console.log('POSSIBLES AFTER TWO FILTERS', this.possibles)
                for (let sign in response){
                    if (response[sign] === 1 || response[sign] === 2) {
                        this.possibles = this.possibles.filter(e => e[sign] === 1 || e[sign] === 2)
                    }
                    if (this.possibles.length === 0) this.possibles = this.elements
                }
                console.log('POSSIBLES AFTER THREE FILTERS', this.possibles)  */
                /*for (let possible of this.possibles){
                    possible.diff = Math.abs(possible.score - resScore)
                    console.log('SELECTION', possible)
                }
                this.possibles = this.possibles.sort((a,b) => a.diff - b.diff)
                console.log('SORTED:', this.possibles)*/
                //dans les signes, repérer les propriétés === 3, comparer avec les éléments et éliminer les éléments dont ces prop; sont < 2
                this.done = true
            }
        },
        components: {
            DisplayProperties,
            DisplayOthers,
            DisplayElements
        }
        
    }
</script>

<style>
h1, h2 {
    font-family: 'Gelasio', serif;
}
.presentation {
    color:rgb(50, 200, 100)
}
.presented {
    border: solid 5px rgba(50, 200, 100, .5)
}

</style>