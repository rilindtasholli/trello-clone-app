<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <div class="flex w-full">
        <input
          @change="updateTaskProperty($event, 'name')"
          @keyup.enter="updateTaskProperty($event, 'name')"
          type="text" :value="task.name"
          class="py-2 px-4 rounded shadow-inner w-full mr-2 border flex-grow text-xl font-bold"
          placeholder="Task name"
        >
        <button @click="deleteTask" class="mx-3">
          <font-awesome-icon icon="trash" color="indianred" />
        </button>
      </div>

      <textarea
        @change="updateTaskProperty($event, 'description')"
        class="relative rounded border shadow-inner w-full py-2 px-4 mt-2 h-64 leading-normal"
        :value="task.description"
        placeholder="Task description..."
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTask']),
    task () {
      return this.getTask(this.$route.params.id)
    }
  },
  methods: {
    updateTaskProperty (e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value
      })
    },
    deleteTask () {
      if (confirm('Are you sure you want to delete task?')) {
        this.$store.commit('DELETE_TASK', { taskId: this.$route.params.id })
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
.task-view {
  @apply relative flex flex-row pin mx-4 m-32 mx-auto py-4 text-left rounded shadow bg-white;
  max-width: 700px;
}
</style>
