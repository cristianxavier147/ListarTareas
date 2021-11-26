<template>
  <form @submit.prevent="procesarForm">
    <Input :tarea="tarea" />
  </form>
</template>

<script>
import Input from "../components/Input";
export default {
  name: "Home",
  components: {
    Input,
  },
  data() {
    return {
      tarea: {
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
      //enviar datos
      console.log(this.tarea);
      //retear form
      this.tarea = {
        nombre: "",
        curso: [],
        estado: "",
        numero: 0,
      };
    },
  },
};
</script>
