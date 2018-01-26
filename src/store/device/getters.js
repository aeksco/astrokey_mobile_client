
// Device Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    // return state.todos.find(todo => todo.id === id)
    return state.current
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
