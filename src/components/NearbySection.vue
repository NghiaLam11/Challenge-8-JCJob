<template>
  <div class="nearby">
    <GoogleMap
      api-key="AIzaSyD2gxYMOKQdZ0xHs3sXCt_CC8eVwJAVIbM"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="5"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 40.689247, lng: -74.044502 };
</script>
