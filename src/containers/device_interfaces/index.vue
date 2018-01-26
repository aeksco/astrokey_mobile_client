
<template>
<!--   <v-ons-page>

    <LayoutView/>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click me!
      </v-ons-button>
    </p>

  </v-ons-page> -->

  <v-ons-page>

    <!-- TOOLBAR COMPONENT -->
    <v-ons-toolbar>
      <div class="left">
        <ons-toolbar-button @click="carouselIndex > 0 && carouselIndex--">
          <v-ons-icon icon="fa-arrow-left"></v-ons-icon>
        </ons-toolbar-button>
      </div>
      <div class="center">
        <!-- Index: {{carouselIndex}} -->
        <v-ons-button @click="$ons.notification.alert('Onsen rules!')">
          <v-ons-icon icon="fa-question-circle-o"></v-ons-icon>
        </v-ons-button>
      </div>
      <div class="right">
        <ons-toolbar-button @click="carouselIndex < 2 && carouselIndex++">
          <v-ons-icon icon="fa-arrow-right"></v-ons-icon>
        </ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <!-- CAROUSEL COMPONENT -->
    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
      <v-ons-carousel-item v-for="(value, key) in items" :key="key" :style="{backgroundColor: value}">
        <div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">{{key}}</div>
      </v-ons-carousel-item>
    </v-ons-carousel>

    <!-- DOTS COMPONENT -->
    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div>
  </v-ons-page>

</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'main_home',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Main - Home'
  },
  data () {
    return {
      carouselIndex: 0,
      items: {
        KEYBOARD: '#085078',
        MOUSE: '#373B44',
        REMOTE: '#D38312'
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
