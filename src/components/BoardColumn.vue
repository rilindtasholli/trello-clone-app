<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="column"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="flex justify-between w-full mb-3">
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <button @click="deleteColumn" class="mx-3">
          <font-awesome-icon icon="trash" color="gray" />
        </button>
      </div>
      <div class="list-reset">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board"
        />
        <input type="text" class="block p-2 w-full bg-transparent" placeholder="+ Enter new task" @keyup.enter="createTask($event, column.tasks)">
      </div>
    </AppDrag>
  </AppDrop>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag.vue'
import AppDrop from './AppDrop.vue'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin.js'
export default {
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    },
    deleteColumn () {
      if (confirm('Are you sure you want to delete column?')) {
        this.$store.commit('DELETE_COLUMN', { columnId: this.columnIndex })
      }
    }
  }
}
</script>

<style scoped>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
