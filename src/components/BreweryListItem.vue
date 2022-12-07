<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: "MadTree Brewing",
      type: "regional",
      street: "3301 Madison Rd",
      address_2: null,
      address_3: null,
      city: "Cincinnati",
      state: "Ohio",
      postal_code: "45209-1132",
      website_url: "http://www.madtreebrewing.com",
    }
  }
})
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <h4>{{ type }}</h4>
    <p>{{ street }}</p>
    <p v-if="address_2">{{ address_2 }}</p>
    <p v-if="address_3">{{ address_3 }}</p>
    <p>{{ city }}, {{ state }} {{ postal_code }}</p>
    <p v-if="website_url"><a :href="website_url">{{ website_url }}</a></p>
  </div>
</template>
