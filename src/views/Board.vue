<template>
  <div class="min-h-full bg-teal-dark">
    <Header/>
    <div class="board h-full">
      <div class="flex flex-row items-start">
        <BoardColumn
          v-for="(column, $columnIndex) of board.columns"
          :key="$columnIndex"
          :column="column"
          :columnIndex="$columnIndex"
          :board="board"
        />

        <div class="column flex">
          <input
            type="text"
            class="p-2 mr-2 flex-grow"
            placeholder="New Column Name"
            v-model="newColumnName"
            @keyup.enter="createColumn"
          >
        </div>
      </div>

      <div class="task-bg" v-if="isTaskOpen" @click.self="close">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'
import Header from '@/components/Header'

export default {
  components: {
    BoardColumn,
    Header
  },
  data () {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task'
    }
  },
  methods: {
    close () {
      this.$router.push({ name: 'board' })
    },
    createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    }
  }
}
</script>

<style lang="css">
.board {
  @apply p-4 h-full overflow-auto;
}
</style>
