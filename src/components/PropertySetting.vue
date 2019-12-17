<template>
    <div class="container" id="input">
        <div class="row">
            <RadioSetting class="col" v-for="i in [0, 1, 2, 3]" :key="i.id" :i="i" @value-clicked="setPropAndValue"/>
        </div>

    </div>
</template>

<script>
import RadioSetting from '@/components/RadioSetting.vue';
import store from '../store/index.js'
    export default {
        props: {
            property: String
        },
        data(){
            return {
                button: 0
            }
        },
        store,
        
        methods: {
            setPropAndValue(value){
                let key = this.property
                let sent = {}
                sent.key = key
                sent.value = value
                this.$store.dispatch('addToSigns', sent)
                this.$emit('prop-valued')
                
            }
        },
        components: {
            RadioSetting
        }
    }
</script>

<style scoped>
#input {
    background-color: rgba(0, 0, 0, .2);
}

</style>