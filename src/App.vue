<template>
  <v-app>
    <Navbar />
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
