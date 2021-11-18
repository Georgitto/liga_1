<template>
  <div id="home">
    <Title text='Information about Russian writers of the XX centure.'/>
    <AuthorTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorTable from '../components/AuthorTable.vue';
import Title from '../components/Title.vue';

@Component({
  components: {
    Title,
    AuthorTable,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400&display=swap')

#home
  font-family: 'Lato', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #606266
  size: 14px
  height: calc(100vh - 50px)
  background-color: #F2F6FC

</style>
