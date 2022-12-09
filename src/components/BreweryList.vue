<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { Brewery } from '../types'
import BreweryListItem from './BreweryListItem.vue'

export default defineComponent({
  components: {
    BreweryListItem,
  },
  emits: ['brewery-select'],
  data() {
    return {
      breweries: [] as Brewery[],
    }
  },
  async created() {
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
  methods: {
    select(brewery: Brewery) {
      this.$emit('brewery-select', brewery)
    }
  },
})
</script>

<template>
  <BreweryListItem v-for="brewery in breweries" :brewery="brewery" @brewery-select="select" />
</template>
