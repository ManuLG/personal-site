<template>
  <b-container>
    <footer class="d-flex align-items-center justify-content-center py-3">
        Copyright {{ currentYear }}
    </footer>
  </b-container>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    border-top: 1px solid var(--bg-page-inverse);
  }
</style>