
<template>
  	<!-- <LayoutView :collection="collection"/> -->

  <v-ons-page>

    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="action">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">Devices</div>
    </v-ons-toolbar>

    <v-ons-pull-hook
      :action="loadItem"
      @changestate="state = $event.state"
    >
      <span v-show="state === 'initial'"> Pull to refresh </span>
      <span v-show="state === 'preaction'"> Release </span>
      <span v-show="state === 'action'">
        <v-ons-icon spin icon="fa-spinner"></v-ons-icon>
      </span>
    </v-ons-pull-hook>

    <v-ons-list>
      <v-ons-list-item v-for="item in items">
        {{item}}
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>

</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'device_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Device' // title is now "NAME - Device"
  },
  computed: {
    collection () {
      return store.getters['device/collection']
    }
  },
  mounted () {
    return store.dispatch('device/fetchCollection')
  },
  data () {
    return {
      state: 'initial',
      items: [1, 2, 3]
    }
  },
  methods: {
    loadItem (done) {
      setTimeout(() => {
        this.items = [...this.items, this.items.length + 1]
        done()
      }, 400)
    }
  }
}
</script>


