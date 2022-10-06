<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style>
@import 'assets/styles/tailwind.postcss';

body, html {
  height: 100%;
  background: linear-gradient(90deg, rgba(56,168,140,1) 0%, rgba(56,161,156,1) 100%);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  @apply mx-auto;
}
</style>
