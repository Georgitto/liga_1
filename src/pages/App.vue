<template>
  <div id="app">
    <Header />
    <Breadcrumb />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Breadcrumb from '../components/Breadcrumb.vue';

@Component({
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400&display=swap')

#app
  font-family: 'Lato', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #606266
  size: 14px
  position: relative

body
  padding-top: 50px
  margin: 0
  text-align: center
</style>
