import { createStore } from 'vuex'
import data from "../data.json"

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: data,
      notizen: [{id:0, headline:"I want to work at Bitburst", text:"programmieren remote", date:new Date().toString().slice(0,24)}],
      notiz:[],
      clicked:false,
      currentID: 0,
      backlog:[],
      backlogNotiz:[]
    }
  },
  mutations: {
    addNotiz (state, notiz: any){
      if(state.clicked === true){
        const addNotiz = state.notizen.push(notiz)
        state.notiz = []
        const findIndex = state.notizen.findIndex(notiz => notiz.id == state.currentID)
        state.notizen.splice(findIndex,1)
        //backlog
        // state.backlogNotiz = []
        // const findIndexBacklog = state.backlog.findIndex(notiz => notiz.id == state.currentID)
        // state.backlog.splice(findIndexBacklog,1)
      }else{
        state.notiz = []
        const addNotiz = state.notizen.push(notiz)

        // state.backlogNotiz = []
        // const addBacklog = state.backlog.push(notiz)

      }    
      state.clicked = false
    },
    deleteNotiz (state, id) {
      const findIndex = state.notizen.findIndex(notiz => notiz.id == id)
      state.notizen.splice(findIndex,1)
      //backlog
      const findIndexBacklog = state.backlog.findIndex(notiz => notiz.id == id)
      state.backlog.splice(findIndexBacklog,1)
    },
    
    updateNotiz(state, id){
      state.clicked = true
      state.notiz = []
      state.currentID = id
      const indexOfNotiz = state.notizen.findIndex(notiz => notiz.id == id)
      state.notiz = state.notizen[indexOfNotiz]
      //change backlog
      // state.backlogNotiz = []
      // state.currentID = id
      // const backlog = state.backlog.findIndex(notiz => notiz.id ==id)
      // state.backlogNotiz = state.backlog[backlog]

      
    },
    addToBacklog(state, id){
      state.backlog = []
      console.log("check the backlog", id)
      const indexOfNotiz = state.notizen.findIndex(notiz => notiz.id == id)
      state.backlog.push(state.notizen[indexOfNotiz])
      state.notizen.splice(indexOfNotiz,1)

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

    },
    addToBacklog(context,id){
      context.commit("addToBacklog", id)

    }
  
  
  }
})

export default store