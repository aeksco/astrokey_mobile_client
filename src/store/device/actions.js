import Factory from './factory'
import _ from 'lodash'

const mock_device = () => {
  let lyrebird = {
    id: '04:A3:16:0A:66:4A' + _.uniqueId(),
    name: 'Lyrebird',
    type: 'bluetooth',
    connected: false,
    rssi: -75
  }
  let astrokey = {
    id: '04:A3:16:0A:96:4A' + _.uniqueId(),
    name: 'AstroKey',
    type: 'usb',
    connected: false,
    rssi: -75
  }
  return _.sample([lyrebird, astrokey])
}

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => Factory.fetchCollection({ commit }),
  create: ({ commit }, attributes) => Factory.create({ commit }, attributes),
  update: ({ commit }, attributes) => Factory.update({ commit }, attributes),
  // ble.startScan([], success, error)
  startScan: ({ commit }) => {
    commit('fetching', true)
    setTimeout(() => {
      commit('add_device', mock_device())
      commit('fetching', false)
    }, 1000)
  },
  // ble.stopScan(success, error)
  stopScan: ({ commit }) => {
    return console.log('Bluetooth - stop scan')
  },
  // ble.isEnabled(success, failure)
  // Checks if Bluetooth is enabled on the mobile device
  isEnabled: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const success = () => resolve(true)
      // const failure = () => reject(new Error('Bluetooth is not enabled'))
      return success()
    })
  },
  // Forces Bluetooth-ON on the mobile device
  forceEnable: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const success = () => resolve(true)
      // const failure = () => reject(new Error('Bluetooth cannot be auto-enabled'))
      return success()
    })
  },
  // ble.enable(success, failure)
  // Connect to Bluetooth device
  connect: ({ commit }, { device }) => {
    // device.loading = true
    console.log(device)
    commit('deviceFetching', { device, fetching: true })
    setTimeout(() => {
      console.log('deviceFetching')
      commit('deviceFetching', { device, fetching: false, connected: true })
    }, 1500)
  },
  // ble.connect(device.id, success, failure)
  // Disconnect from Bluetooth device
  disconnect: ({ commit }, { device }) => {
    return new Promise((resolve, reject) => {
      const success = function (dev) {
        device.set('connected', false)
        return resolve(dev)
      }
      // const failure = () => reject(new Error('Cannot disconnect from bluetooth device'))
      return success(mock_device())
    })
  },
  // ble.disconnect(device.id, success, failure)
  // Checks connection to Bluetooth device
  isConnected: ({ commit }, { device }) => {
    return new Promise((resolve, reject) => {
      const success = () => resolve(true)
      // const failure = () => reject(new Error('Device is not connected'))
      return success()
    })
  },
  // ble.isConnected(device.id, success, failure)
  // Reads the RSSI from a connected device
  // Sets the RSSI attribute on the Device model passed in
  readRSSI: ({ commit }, { device }) => {
    return new Promise((resolve, reject) => {
      const success = function (rssi) {
        device.set('rssi', rssi)
        return resolve(device)
      }
      // const failure = err => reject(new Error(err))
      return success(100)
    })
  },
  // ble.readRSSI(device.id, success, failure)
  // Writes a packet to a connected device
  // NOTE: does not wait for response from device
  write: ({ commit }, { device, data }) => {
    const packet = new Uint8Array(data).buffer
    return console.log('write to device', packet)
  }
}

// // // //

export default actions
