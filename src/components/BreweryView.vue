<script lang="ts">
import { defineComponent } from 'vue'
import { Brewery } from '../types'
import type { PropType } from 'vue'

export default defineComponent({
  emits: ['brewery-deselect'],
  props: {
    brewery: {
      type: Object as PropType<Brewery>,
      required: true,
    },
  },
  computed: {
    center() {
      return {
        lat: parseFloat(this.brewery.latitude),
        lng: parseFloat(this.brewery.longitude),
      }
    },
  },
  methods: {
    deselect() {
      this.$emit('brewery-deselect')
    },
  },
})
</script>

<template>
  <div class="card brewery-view-card">
    <div>
      <button type="button" class="back-btn btn btn-primary" @click="deselect">Back</button>
    </div>
    <span class="brewery-name">{{ brewery.name }}</span>
    <div class="address">
      <span v-if="brewery.street">{{ brewery.street }}<br></span>
      <span v-if="brewery.address_2">{{ brewery.address_2 }}<br></span>
      <span v-if="brewery.address_3">{{ brewery.address_3 }}<br></span>
      <span>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</span>
    </div>
    <div v-if="brewery.latitude && brewery.longitude" class="brewery-map">
      <GMapMap
          :center="center"
          :zoom="17"
          class="brewery-gmap"
      >
        <GMapMarker :position="center" />
      </GMapMap>
    </div>
    <div v-if="brewery.website_url" class="brewery-url">
      <a :href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
$maxCardWidth: 40em;
$cardMargin: 1em;
$mapMargin: 1.5em;

$cardWidth: calc(min(100vw - 2 * $cardMargin, $maxCardWidth));
$mapSize: calc($cardWidth - 2 * $mapMargin);

.brewery-view-card {
  width: $cardWidth;
  margin: $cardMargin auto;
  padding: 1em;
}
.brewery-name {
  font-size: 150%;
  font-weight: bold;
  text-align: center;
}
.address {
  margin: 0.5em auto;
}
.brewery-map {
  margin: 0.5em auto;
}
.brewery-gmap {
  width: $mapSize;
  height: $mapSize;
}
.brewery-url {
  text-align: center;
}
</style>
