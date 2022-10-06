<template>
  <div class="header">
    <button @click="resetBoard">
      <font-awesome-icon icon="retweet" />
      Reset
    </button>
    <h1>
      <font-awesome-icon icon="table" class="mx-1"/>
      Trello Clone App
    </h1>
    <a href="https://www.github.com/rilindtasholli" target="_blank">
      <font-awesome-icon icon="code" />
      Rilind Tasholli
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    resetBoard () {
      if (confirm('Are you sure you want to reset the board?')) {
        localStorage.removeItem('board')
        window.location.href = ''
      }
    }
  }
}
</script>

<style scoped>
.header {
  @apply flex justify-around p-3 shadow;
  background-color: rgba(165, 194, 194, 0.884);
}
button,
a{
  @apply outline-none rounded-full px-4 py-2 bg-grey-light text-black no-underline;
  transition: 0.3s;
}
button:active{
  transition: 0s;
  transform: scale(0.95);
}
</style>
