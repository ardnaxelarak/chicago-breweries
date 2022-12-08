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
  <div class="card brewery-list-card">
    <div class="brewery-list-item">
      <span class="badge bg-secondary brewery-badge">{{ brewery.brewery_type }}</span>
      <div class=brewery-details>
        <span class="brewery-name">{{ brewery.name }}</span>
        <div class="address">
          <span v-if="brewery.street">{{ brewery.street }}<br></span>
          <span v-if="brewery.address_2">{{ brewery.address_2 }}<br></span>
          <span v-if="brewery.address_3">{{ brewery.address_3 }}<br></span>
          <span>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</span>
        </div>
        <div v-if="brewery.website_url" class="brewery-url">
          <a :href="brewery.website_url">{{ brewery.website_url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.brewery-list-card {
  width: 30em;
  margin: 1em auto;
}
.brewery-list-card:hover {
  background: #CCC;
  cursor: pointer;
}
.brewery-list-item {
  display: flex;
}
.brewery-details {
  padding: 1em;
}
.brewery-name {
  font-size: 150%;
  font-weight: bold;
}
.brewery-badge {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.address {
  margin: 0.5em 1em;
}
</style>
