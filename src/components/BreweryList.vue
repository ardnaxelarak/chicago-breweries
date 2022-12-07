<script lang="ts">
import { defineComponent } from 'vue'
import BreweryListItem from './BreweryListItem.vue'

export default defineComponent({
  components: {
    BreweryListItem,
  },
  data() {
    return {
      breweries: [
        {
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
      ],
    }
  },
})
</script>

<template>
  <div v-for="brewery in breweries">
    <BreweryListItem :brewery="brewery" />
  </div>
</template>
