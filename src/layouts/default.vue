<template>
  <div class="h-100 d-flex flex-column">
      <Header />
      <div style="flex: 1;">
        <nuxt />
      </div>
      <Footer class="mt-5" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AosMixin from '~/src/mixins/AOS'

export default Vue.extend({
  mixins: [AosMixin]
})
</script>
