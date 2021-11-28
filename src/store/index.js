import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

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

    PONER_TAREA(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },

    EDITAR_TAREA(state, payload) {
      state.tareas = state.tareas.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push("/");
    },
  },
  actions: {
    setTarea({ commit }, tarea) {
      commit("SET", tarea);
    },

    deleteTarea({ commit }, id) {
      commit("DELETE_TAREA", id);
    },

    ponerTarea({ commit }, id) {
      commit("PONER_TAREA", id);
    },

    editarTarea({ commit }, tarea) {
      commit("EDITAR_TAREA", tarea);
    },
  },
  modules: {},
});
