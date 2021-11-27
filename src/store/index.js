import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      curso: [],
      estado: "",
      numero: 0,
    },
  },
  mutations: {
    SET(state, payload) {
      state.tareas.push(payload);
      console.log(state.tareas);
    },

    DELETE_TAREA(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
  },
  actions: {
    setTarea({ commit }, tarea) {
      commit("SET", tarea);
    },

    deleteTarea({ commit }, id) {
      commit("DELETE_TAREA", id);
    },
  },
  modules: {},
});
