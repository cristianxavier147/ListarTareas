<template>
  <v-app>
    <form @submit.prevent="editarTarea(tarea)">
      <Input :tarea="tarea" />
    </form>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Input from "../components/Input";
export default {
  name: "Editar",
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },

  methods: {
    ...mapActions(["ponerTarea", "editarTarea"]),
  },

  created() {
    this.ponerTarea(this.$route.params.id);
  },
};
</script>

<style></style>
