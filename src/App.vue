<template>
  <v-app>
    <v-app-bar
      app
      color="#ea6f5c"
      dark
    >
    <v-toolbar-title>vibing.at</v-toolbar-title>
    </v-app-bar>

    <v-main class="main-view">
      <vibe-map></vibe-map>
      <add-location></add-location>
    </v-main>
  </v-app>
</template>

<script>
import VibeMap from './components/VibeMap.vue'
import AddLocation from './components/AddLocation.vue';

export default {
  name: 'App',

  components: {
    VibeMap,
    AddLocation
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main-view {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
