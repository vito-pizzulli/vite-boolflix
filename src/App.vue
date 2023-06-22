<template>
    <AppBody />
</template>

<script>
import AppBody from './components/AppBody.vue';
export default {
  name: 'App',

  components: {
    AppBody
  },
}
</script>

<style lang="scss">
  @use './styles/general' as *;
</style>