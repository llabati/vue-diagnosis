import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: [
      { name: 'Ada', north: 0, east: 1, south: 0, west: 0, center: 3, score: 4, diff: 25, corresp: 0 },
      { name: 'Ana', north: 0, east: 2, south: 3, west: 0, center: 3, score: 8, diff: 25, corresp: 0 },
      { name: 'Arta', north: 0, east: 3, south: 3, west: 0, center: 2, score: 8, diff: 25, corresp: 0 },
      { name: 'Ava', north: 0, east: 0, south: 3, west: 3, center: 3, score: 9, diff: 25, corresp: 0 },
      { name: 'Celia', north: 0, east: 0, south: 0, west: 3, center: 3, score: 6, diff: 25, corresp: 0 },
      { name: 'Dia', north: 1, east: 1, south: 1, west: 1, center: 3, score: 7, diff: 25, corresp: 0 },
      { name: 'Diva', north: 1, east: 2, south: 0, west: 0, center: 3, score: 6, diff: 25, corresp: 0 },
      { name: 'Eva', north: 1, east: 0, south: 0, west: 3, center: 3, score: 7, diff: 25, corresp: 0 },
      { name: 'Ema', north: 2, east: 3, south: 1, west: 0, center: 3, score: 9, diff: 25, corresp: 0 },
      { name: 'Isa', north: 2, east: 2, south: 2, west: 0, center: 3, score: 9, diff: 25, corresp: 0 },
      { name: 'Jana', north: 2, east: 3, south: 2, west: 0, center: 3, score: 10, diff: 25, corresp: 0 },
      { name: 'Juva', north: 3, east: 3, south: 3, west: 3, center: 0, score: 12, diff: 25, corresp: 0 },
      { name: 'Lea', north: 3, east: 2, south: 0, west: 2, center: 3, score: 10, diff: 25, corresp: 0 },
      { name: 'Lena', north: 2, east: 0, south: 2, west: 0, center: 3, score: 8, diff: 25, corresp: 0 },
      { name: 'Maia', north: 1, east: 1, south: 1, west: 1, center: 3, score: 7, diff: 25, corresp: 0 },
      { name: 'Mia', north: 1, east: 3, south: 1, west: 0, center: 3, score: 8, diff: 25, corresp: 0 },
      { name: 'Micha', north: 1, east: 0, south: 2, west: 3, center: 2, score: 8, diff: 25, corresp: 0 },
      { name: 'Mila', north: 0, east: 1, south: 3, west: 1, center: 2, score: 7, diff: 25, corresp: 0 },
      { name: 'Uwa', north: 1, east: 1, south: 1, west: 1, center: 3, score: 7, diff: 25, corresp: 0 },
      { name: 'Vera', north: 1, east: 3, south: 1, west: 3, center: 3, score: 11, diff: 25, corresp: 0 },
      { name: 'Zia', north: 2, east: 0, south: 0, west: 0, center: 2, score: 4 , diff: 25, corresp: 0 },
    ],
    signs: {
      north: 0,
      east: 0,
      south: 0,
      west: 0,
      center: 0
    }
  },
  mutations: {
    ADD_TO_SIGNS(state, sent){
      switch(sent.key){
        case "north":
          state.signs.north = Number(sent.value)
          break
        case "east":
          state.signs.east = Number(sent.value)
          break
        case "south":
          state.signs.south = Number(sent.value)
          break
        case "west":
          state.signs.west = Number(sent.value)
          break
        case "center":
        state.signs.center = Number(sent.value)
        break
      }
    }
  },
  actions: {
    addToSigns(context, sent){
      console.log('PROP AND VALUE IN STORE', sent)
      context.commit('ADD_TO_SIGNS', sent)
    }
  },
  modules: {
  }
})
