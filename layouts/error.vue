<template>
  <main>
    <h1>OOOPS</h1>
    <h3>{{ error.message }}</h3>
    <nuxt-link to="/">Home page</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'service'
}
</script>

<style lang="postcss">
@import '../assets/global.pcss';

main {
  margin: 0 auto;
  max-width: 953px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
</style>
