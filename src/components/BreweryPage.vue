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
  <div v-if="this.brewery">
    <button type="button" class="btn btn-primary" @click="deselect">Back</button>
    <BreweryView :brewery="brewery" />
  </div>
  <BreweryList v-else @brewery-select="select" />
</template>
