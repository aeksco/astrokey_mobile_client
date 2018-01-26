import _ from 'lodash'

// Device Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  collection (state, collection) {
    state.collection = collection
  },
  current (state, attributes) {
    state.current = attributes
  },
  add_device (state, device) {
    state.collection.push(device)
  },
  deviceFetching (state, { device, fetching, connected }) {
    device.fetching = fetching
    device.connected = connected
    state.collection = _.map(state.collection, (d) => {
      if (d.id !== device.id) return d
      return device
    })
  }
}

export default mutations
