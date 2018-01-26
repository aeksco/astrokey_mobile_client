
<template>

    <!-- TOOLBAR COMPONENT -->
    <!-- <v-ons-toolbar> -->
      <!-- <div class="left"> -->
        <!-- <ons-toolbar-button @click="carouselIndex > 0 && carouselIndex-_-"> -->
          <!-- <v-ons-icon icon="fa-arrow-left"></v-ons-icon> -->
        <!-- </ons-toolbar-button> -->
      <!-- </div> -->
      <!-- <div class="center"> -->
        <!-- Index: {{carouselIndex}} -->
        <!-- <v-ons-button @click="$ons.notification.alert('Onsen rules!')"> -->
          <!-- <v-ons-icon icon="fa-question-circle-o"></v-ons-icon> -->
        <!-- </v-ons-button> -->
      <!-- </div> -->
      <!-- <div class="right"> -->
        <!-- <ons-toolbar-button @click="carouselIndex < 2 && carouselIndex++"> -->
          <!-- <v-ons-icon icon="fa-arrow-right"></v-ons-icon> -->
        <!-- </ons-toolbar-button> -->
      <!-- </div> -->
    <!-- </v-ons-toolbar> -->
  <v-ons-page>

    <Toolbar :title="'Interfaces'" />

    <!-- CAROUSEL COMPONENT -->
    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
      <v-ons-carousel-item v-for="(value, key) in items" :key="key" :style="{backgroundColor: value}">
        <div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">{{key}}</div>
      </v-ons-carousel-item>
    </v-ons-carousel>
  </v-ons-page>

    <!-- DOTS COMPONENT -->
    <!-- <div :style="dots"> -->
      <!-- <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1"> -->
        <!-- {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }} -->
      <!-- </span> -->
    <!-- </div> -->
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'main_home',
  components: {
    LayoutView,
    Toolbar
  },
  metaInfo: {
    title: 'Main - Home'
  },
  data () {
    return {
      carouselIndex: 0,
      items: {
        BLUE: '#085078',
        DARK: '#373B44',
        ORANGE: '#D38312'
      },
      dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        position: 'absolute',
        bottom: '40px',
        left: 0,
        right: 0
      }
    }
  }
}
</script>
