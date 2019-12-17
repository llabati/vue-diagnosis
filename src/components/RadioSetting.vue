<template>
    <div>
        <input type="radio" :id="i" :name="i" :value="i" @click="getPropValue">
        <label for="i">{{ i }}</label>
    </div>
</template>

<script>
import store from '../store/index.js'
    export default {
        props: {
            i: Number
        },
        store,
        data(){
            return {
                degree: 0
            }
        },
        methods: {
            getPropValue(event){
                let value = event.target.value
                this.$emit('value-clicked', value)
            }
        },
        
    }
</script>

<style scoped>

label {
    margin-left: 10px;
    font-size: 1.2rem;
}
</style>