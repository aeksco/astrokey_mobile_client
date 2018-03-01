
<template>
  <v-ons-page>
    <Toolbar :title="'Help'" />
    <v-ons-list>
      <v-ons-list-header>Switch</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          Turn it on
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>Switch and icon</v-ons-list-header>
      <v-ons-list-item>
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <div class="center">
          Icon and switch
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>

    </v-ons-list>
  </v-ons-page>
</template>

<!-- // // // //  -->

<script>
import Toolbar from '@/components/Toolbar'

export default {
  name: 'main_help',
  components: {
    Toolbar
  },
  metaInfo: {
    title: 'Main - Help'
  }
}
</script>
