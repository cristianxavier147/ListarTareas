<template>
  <form @submit.prevent="procesarForm">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import Input from "../components/Input";
const shortid = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
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
    procesarForm() {
      if (this.tarea.nombre.trim() === "") {
        console.log("falta llenar campos");
        return;
      }
      console.log("campos llenados");
      //generamos id y guardamos
      this.tarea.id = shortid.generate();
      //enviar datos a vuex
      console.log("tarea", this.tarea);
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
