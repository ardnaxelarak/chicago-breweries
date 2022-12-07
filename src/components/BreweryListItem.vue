<script lang="ts">
import { defineComponent } from 'vue'
import { Brewery } from '../types'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    brewery: {
      type: Object as PropType<Brewery>,
      required: true,
    },
  },
})
</script>

<template>
  <div class="card brewery-list-item">
    <h3 class="brewery-name">{{ brewery.name }}</h3>
    <p v-if="brewery.brewery_type"><span class="badge bg-secondary">{{ brewery.brewery_type }}</span></p>
    <p>
      <span v-if="brewery.street">{{ brewery.street }}<br></span>
      <span v-if="brewery.address_2">{{ brewery.address_2 }}<br></span>
      <span v-if="brewery.address_3">{{ brewery.address_3 }}<br></span>
      <span>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</span>
    </p>
    <p v-if="brewery.website_url"><a :href="brewery.website_url">{{ brewery.website_url }}</a></p>
  </div>
</template>

<style>
.brewery-list-item {
  width: 30em;
  margin: auto;
}
.brewery-name {
  text-align: center;
}
</style>
