import AbstractFactory from '../lib/factory'

// // // //

// Creates new AbstractFactory instance
const DeviceFactory = new AbstractFactory({
  API_ROOT: '/api/devices',
  REDIRECT_SUCCESS: '/#/devices',
  messages: {
    CREATE_SUCCESS: 'Created Device.',
    UPDATE_SUCCESS: 'Updated Device.',
    DESTROY_SUCCESS: 'Destroyed Device.'
  }
})

// // // //

export default DeviceFactory
