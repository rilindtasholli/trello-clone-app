import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin, uuid } from './utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board: board
  },
  getters: {
    getTask (state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    CREATE_COLUMN (state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      })
    },
    UPDATE_TASK (state, { task, key, value }) {
      task[key] = value
      // OR
      // Vue.set(task, key, value)
    },
    MOVE_TASK (state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    },
    DELETE_TASK (state, { taskId }) {
      state.board.columns.forEach((column) => {
        column.tasks.every((task) => {
          if (task.id === taskId) {
            column.tasks.splice(column.tasks.indexOf(task), 1)
            return false
          }
          return true
        })
      })
    },
    DELETE_COLUMN (state, { columnId }) {
      state.board.columns.splice(columnId, 1)
    }
  }
})
