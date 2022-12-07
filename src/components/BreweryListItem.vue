<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    brewery: Object,
  },
})
</script>

<template>
  <div>
    <h2>{{ brewery.name }}</h2>
    <h4>{{ brewery.type }}</h4>
    <p>{{ brewery.street }}</p>
    <p v-if="brewery.address_2">{{ brewery.address_2 }}</p>
    <p v-if="brewery.address_3">{{ brewery.address_3 }}</p>
    <p>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</p>
    <p v-if="brewery.website_url"><a :href="website_url">{{ brewery.website_url }}</a></p>
  </div>
</template>
