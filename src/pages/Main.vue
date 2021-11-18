<template>
    <div class="main-page">
        <Title text="Welcome to the main page!" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '../components/Title.vue';

@Component({
  components: {
    Title,
  },
})
export default class Main extends Vue {}
</script>
