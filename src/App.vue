
<template>
<!--   <div id="app">
    <AppNavbar/>
    <Notification/>
  </div> -->

  <v-ons-splitter>
    <v-ons-splitter-side swipeable width="150px" collapse="" side="left" :open.sync="openSide">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-item v-for="page in pages" tappable modifier="chevron" @click="currentPage = page; openSide = false">
            <div class="center">PAGE</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <!-- <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component> -->
      <router-view/>
    </v-ons-splitter-content>
  </v-ons-splitter>

  <!-- <router-view/> -->
</template>

<script>
import AppNavbar from './containers/app_navbar'
import AppFooter from './containers/app_footer'
import Notification from './containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    Notification,
    AppFooter
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Home', // set a title
    titleTemplate: 'EB - %s', // title is now "RCOS - Loading..."
    htmlAttrs: {
      lang: 'en'
    }
  },

  data () {
    return {
      currentPage: 'home',
      pages: ['home', 'news', 'settings'],
      openSide: false
    }
  }

}
</script>

<style type="text/css">
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  .container-fluid {
    height: 100%;
  }

  #app {
    height: 100%;
  }
</style>
