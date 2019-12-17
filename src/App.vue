<template>
  <div id="app">
    
    <PanelDiagnosis :msg="title"/>
  </div>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
import PanelDiagnosis from './components/PanelDiagnosis.vue'

export default {
  name: 'app',
  data(){
    return {
      title: 'Your diagnosis tool'
    }
  },
  components: {
    PanelDiagnosis
  }
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  margin-top: 60px;
}
</style>
