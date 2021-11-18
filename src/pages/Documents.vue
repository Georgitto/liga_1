<template>
    <div class="documents">
        <DocumentTable />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentTable from '../components/DocumentTable.vue';

@Component({
  components: {
    DocumentTable,
  },
})
export default class Documents extends Vue {}
</script>

<style lang="sass">
</style>
