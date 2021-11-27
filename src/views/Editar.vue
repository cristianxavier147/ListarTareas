<template>
  <v-app>
    editar
    {{ $route.params.id }} - {{ tarea }}
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Editar",
  computed: {
    ...mapState(["tarea"]),
  },
};
</script>

<style></style>
