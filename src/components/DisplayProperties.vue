<template>
    <div>
        <ul>
            <li v-for="property in properties" :key="property.id">
                <p>{{ property }}</p>
                <PropertySetting :property="property" :unclicked="unclicked" @prop-valued="launchDiagnosis"/>
            </li>
        </ul>
        <!--<button type="button" class="btn btn-reset" @click="reset">Reset</button>-->
        <div v-if="ready === 5">
            <p v-for="sign in signs" :key="sign.id">{{ sign }}</p>
        </div>
    </div>
</template>

<script>
import PropertySetting from '@/components/PropertySetting.vue';
import store from '../store/index.js'
    export default {
        props: {
            properties: Array
        },
        components: {
            PropertySetting
        },
        store,
        data(){
            return {
                ready: 0,
                unclicked: true
            }
        },
        computed: {
            signs(){
                return this.$store.state.signs
            }
        },
        methods: {
            launchDiagnosis(){
                this.ready++
                if (this.ready === 5){
                    this.$emit('set-diagnosis')   
                }
            },
            reset(){
                this.unclicked = true
            }
        }
    }
</script>

<style scoped>
li {
    margin-bottom: 10px;
}
.btn-reset {
    background-color: rgb(50, 200, 100);
    color: white;
}
</style>