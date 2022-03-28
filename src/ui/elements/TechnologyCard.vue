<template>
  <div
    class="tech-card rounded-circle"
    @click="navigateToHref"

    title="Vue"
  >
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
      imgSrc: {
          type: String,
          required: true
      },
      href: {
          type: String,
          required: false,
          default: ''
      }
  },
  methods: {
      navigateToHref () {
          if (this.href) {
              window.open(this.href, '_blank').focus();
          }
      }
  }
})
</script>

<style lang="scss" scoped>
  .tech-card {
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    transition: all .4s;

    &:hover {
        box-shadow: var(--primary) 0px 2px 8px 0px;
        cursor: pointer;
        margin: 32px !important;
    }
  }
  img {
      width: 42px;
      max-height: 100%;
  }
</style>