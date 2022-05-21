<template>
  <div class="vibe-map">
    <l-map style="height: 400px" :zoom="map.zoom" :center="map.center">
      <l-tile-layer :url="map.url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapState } from "vuex";

    export default {
        name: 'VibeMap',
        components: {
            LMap,
            LTileLayer
        },
        data() {
                return {
                    //
                };
            },
        methods: {
    updateZoom(e) {
      this.$store.commit("updateZoom", e);
    },
    updateBounds(e) {
      this.$store.commit("updateBounds", e);
    },
    updateCenter(e) {
      this.$store.commit("updateCenter", e);
    },
    disableInteraction() {
      //disable interaction for static map
      let map = this.$refs.problemMap.mapObject;
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) map.tap.disable();
      document.getElementById("map").style.cursor = "default";
    }
  },
  computed: {
    ...mapState({
      map: state => state.map
    })
  },
        };
</script>

<style lang="scss" scoped>
.vibe-map {
  height: 50%;
}
</style>