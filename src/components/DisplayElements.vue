<template>
    <div>
        <ul v-if="elements">
            <li v-for="element in elements" :key="element.id" @mouseenter="showDetails" @mouseout="hideDetails" :class="{ alert: element.corresp > 7 }">{{ element.name }}
                <p v-if="hovered" class="invert">North: {{ element.north }} East: {{ element.east }} South: {{ element.south }} West: {{ element.west }} Center: {{ element.center }} </p>
            </li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            elements: Array
        },
        data(){
            return {
                hovered: false
            }
        },
        methods: {
            showDetails(){
                this.hovered = true
            },
            hideDetails(){
                this.hovered = false
            }
        }
        
    }
</script>

<style>
ul {
    padding: 0;

}
li {
    list-style-type: none;
    text-align: center;
    padding: 5px;
    border: solid 1px rgba(0, 0, 0, .4)
}
.invert {
    background-color: rgb(50, 200, 100);
    color: white;
}
.alert {
    background-color: rgb(150, 0, 50);
    color: white;
    font-weight: 400;
}

</style>