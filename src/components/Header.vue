<template>
  <div class="flex justify-around bg-grey p-2 shadow">
    <h1>
      <font-awesome-icon icon="table" class="mx-1"/>
      Trello Clone App
    </h1>
    <button @click="resetBoard">
      <font-awesome-icon icon="retweet" />
      Reset
    </button>
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
button{
  @apply outline-none rounded-full px-4 py-2 bg-grey-light;
  transition: 0.3s;
}
button:active{
  transition: 0s;
  transform: scale(0.95);
}
</style>
