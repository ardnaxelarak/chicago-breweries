<script lang="ts">
import { defineComponent } from 'vue'
import { Brewery } from '../types'
import BreweryList from './BreweryList.vue'
import BreweryView from './BreweryView.vue'

export default defineComponent({
  components: {
    BreweryList,
    BreweryView,
  },
  data() {
    return {
      brewery: null as Brewery | null,
    }
  },
  methods: {
    deselect() {
      this.brewery = null
    },
    select(brewery: Brewery) {
      this.brewery = brewery
    },
  },
})
</script>

<template>
  <h1 class="header">Chicago Breweries</h1>
  <BreweryView v-if="brewery" :brewery="brewery" @brewery-deselect="deselect"/>
  <BreweryList v-else @brewery-select="select" />
  <p class="attribution">Powered by OpenBreweryDB</p>
</template>

<style>
.attribution, .header {
  text-align: center;
}
</style>
