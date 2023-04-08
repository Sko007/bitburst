import { createStore } from 'vuex'
import data from "../data.json"

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: data,
      notizen: [{id:0, headline:"I want to work at Bitburst", text:"programmieren remote", date:new Date()}],
      notiz:[],
      clicked:false,
      currentID: 0
    }
  },
  mutations: {
    addNotiz (state, notiz){
      if(state.clicked === true){
        const addNotiz = state.notizen.push(notiz)
        state.notiz = []
        const findIndex = state.notizen.findIndex(notiz => notiz.id == state.currentID)
        state.notizen.splice(findIndex,1)
      }else{
        state.notiz = []
        const addNotiz = state.notizen.push(notiz)

      }    
      state.clicked = false
    },
    deleteNotiz (state, id) {
      const findIndex = state.notizen.findIndex(notiz => notiz.id == id)
      state.notizen.splice(findIndex,1)
    },
    
    updateNotiz(state, id){
      state.clicked = true
      state.notiz = []
      state.currentID = id
      const indexOfNotiz = state.notizen.findIndex(notiz => notiz.id == id)
      state.notiz = state.notizen[indexOfNotiz]
    }
  },

  actions: {
    addNotiz (context, notiz) {
      context.commit('addNotiz', notiz)
    },
    deleteNotiz(context, id){
      context.commit("deleteNotiz", id)

    },
    updateNotiz(context, id){
      context.commit("updateNotiz", id)

    }
  
  
  }
})

export default store