<template>
    <div class="create-document">
        <DocumentInputForm />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentInputForm from '../components/DocumentInputForm.vue';

@Component({
  components: {
    DocumentInputForm,
  },
})
export default class CreateDocument extends Vue {}
</script>

<style lang="sass">
.create-document
  margin-top: 60px
</style>
