<template>
  <v-main>
    <form @submit.prevent="procesarForm">
      <Input :tarea="tarea" />
    </form>
    <ListarTarea />
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input";
import ListarTarea from "../components/LIstarTarea";
const shortid = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListarTarea,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        curso: [],
        estado: "",
        numero: 0,
      },
    };
  },

  methods: {
    ...mapActions(["setTarea"]),
    procesarForm() {
      if (this.tarea.nombre.trim() === "") {
        console.log("falta llenar campos");
        return;
      }
      console.log("campos llenados");
      //generamos id y guardamos
      this.tarea.id = shortid.generate();
      //enviar datos a vuex
      this.setTarea(this.tarea);
      //retear form
      this.tarea = {
        id: "",
        nombre: "",
        curso: [],
        estado: "",
        numero: 0,
      };
    },
  },
};
</script>
