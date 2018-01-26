
<template>
  	<!-- <LayoutView :collection="collection"/> -->
  <v-ons-page>
    <Toolbar title="Devices" />

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
      <!-- <v-ons-list-header>AstroKey</v-ons-list-header> -->
      <v-ons-list-item v-for="item in collection">
        <div class="left">
          <v-ons-icon icon="fa-spinner" class="list-item__icon" v-if='item.fetching'></v-ons-icon>
          <v-ons-icon :icon="'fa-' + item.type" class="list-item__icon" v-else-if='item.connected'></v-ons-icon>
          <v-ons-icon icon="fa-circle-o" class="list-item__icon" v-else></v-ons-icon>
        </div>
        <div class="center">
          {{item.name}}
        </div>
        <div class="right">
          <v-ons-switch @click="connect(item)"></v-ons-switch>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>

</template>

<!-- // // // //  -->

<script>
import Toolbar from '@/components/Toolbar'
// import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'device_list',
  components: {
    Toolbar
  },
  metaInfo: {
    title: 'Device'
  },
  beforeCreate () {
    return store.dispatch('device/startScan')
  },
  data () {
    return {
      state: 'initial'
    }
  },
  computed: {
    collection () {
      return store.getters['device/collection']
    }
  },
  methods: {
    connect (device) {
      return store.dispatch('device/connect', { device })
    },
    loadItem () {
      return store.dispatch('device/startScan')
    }
  }
}
</script>

<style type="text/css">
  p.name {
    font-size: 1.2rem;
  }
</style>

