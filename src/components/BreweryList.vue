<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { Brewery } from '../types'
import BreweryListItem from './BreweryListItem.vue'

export default defineComponent({
  components: {
    BreweryListItem,
  },
  data() {
    return {
      breweries: [] as Brewery[],
    }
  },
  async mounted() {
    var finished = false
    var page = 1
    while (!finished) {
      const response =
          await axios.get(
              'https://api.openbrewerydb.org/breweries',
              { params: { by_city: 'chicago', page: page }})
      const list = response.data
      if (list.length > 0) {
        this.breweries = this.breweries.concat(list)
      } else {
        finished = true
      }
      page++
    }
  },
})
</script>

<template>
  <BreweryListItem v-for="brewery in breweries" :brewery="brewery" />
</template>
