<template>
  <form>
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
};
</script>
