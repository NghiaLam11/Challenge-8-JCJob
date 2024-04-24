<template>
  <div class="nearby">
    <GMapMap
      :center="{ lat: 51.093048, lng: 6.84212 }"
      :zoom="1"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
    </GMapMap>
  </div>
</template>
