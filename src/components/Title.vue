<template>
  <div class="title">{{ text }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop(String)readonly text: number | string | undefined;
}
</script>

<style lang="sass" scoped>
.title
  height: 40px
  vertical-align: middle
  text-align: center
  line-height: 40px

</style>
