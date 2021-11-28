<template>
  <v-app>
    <!-- input text -->
    <v-container>
      <v-text-field
        placeholder="Escribe tu nombre"
        v-model.trim="tarea.nombre"
      ></v-text-field>
    </v-container>
    <!-- checkbox -->
    <v-container d-flex>
      <v-checkbox
        label="Node Js"
        value="Node"
        v-model="tarea.curso"
      ></v-checkbox>
      <v-checkbox
        label="JavaScript"
        value="JavaScript"
        class="mx-4"
        v-model="tarea.curso"
      ></v-checkbox>
      <v-checkbox
        label="Vue"
        value="Vue"
        class="mx-4"
        v-model="tarea.curso"
      ></v-checkbox>
    </v-container>
    <!-- radio button -->
    <v-container class="mx-0">
      <v-radio-group v-model="tarea.estado">
        <v-radio label="Relax" value="Relax"></v-radio>
      </v-radio-group>
      <v-radio-group v-model="tarea.estado">
        <v-radio label="Tranquilo" value="Tranquilo"></v-radio>
      </v-radio-group>
    </v-container>
    <!-- input number -->
    <v-container>
      <v-text-field
        placeholder="Escribe un número"
        v-model.number="tarea.numero"
      ></v-text-field>
    </v-container>
    <v-container>
      <v-btn
        type="submit"
        :disabled="disabledBtn"
        block
        color="primary"
        elevation="2"
        >Procesar Información</v-btn
      >
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Input",
  props: {
    tarea: Object,
  },
  computed: {
    disabledBtn() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style></style>
