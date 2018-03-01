<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
    <div class="header">
      <img src="../assets/logo_white.svg">
    </div>

    <!-- <v-ons-list-title>Onsen UI Essential Links</v-ons-list-title> -->
    <v-ons-list>
      <v-ons-list-item modifier="chevron" v-for="item in essentialLinks" @click="goTo(item.link)" :key="item.link">
        <div class="left"><v-ons-icon fixed-width :icon="item.icon"></v-ons-icon></div>
        <div class="center">{{ item.label }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      essentialLinks: [
        {
          label: 'Home',
          link: '/',
          icon: 'fa-home'
        },
        {
          label: 'Devices',
          link: '/devices',
          icon: 'fa-usb'
        },
        {
          label: 'Settings',
          link: '/settings',
          icon: 'fa-cog'
        },
        {
          label: 'Help',
          link: '/help',
          icon: 'fa-question-circle'
        }
      ]
    }
  },
  methods: {
    goTo (url) {
      this.$router.push(url)
      // window.open(url, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-title {
  text-transform: none;
}

ons-list-item {
  cursor: pointer;
}
</style>
