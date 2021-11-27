<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Nombres</th>
          <th class="text-left">Cursos</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Numero</th>
          <th class="text-left">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tareas" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.curso.join(", ") }}</td>
          <td>{{ item.estado }}</td>
          <td>{{ item.numero }}</td>
          <td>
            <v-btn depressed color="error" @click="deleteTarea(item.id)"
              >Eliminar</v-btn
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ListarTarea",
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTarea"]),
  },
};
</script>

<style></style>
