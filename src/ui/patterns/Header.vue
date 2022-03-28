<template>
<b-container>
  <header class="d-flex align-items-center justify-content-end">
      <div class="menu">
        <NuxtLink class="mx-3" :to="{ name: 'index' }">Inicio</NuxtLink>
        <NuxtLink class="mx-3" :to="{ name: 'projects' }">Proyectos</NuxtLink>
      </div>
  </header>
</b-container>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header {
      --header-height: 80px;
      height: var(--header-height);
      min-height: var(--header-height);

      .menu {
          font-weight: 700;

          & > * {
              cursor: pointer;
              transition: all .5s;

              &:hover {
                  color: var(--primary);
              }
          }
      }
  }
</style>