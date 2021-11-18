<template>
    <div class="document-card">
        <el-tabs type="card">
          <el-tab-pane label="Details"><DocumentInputForm /></el-tab-pane>
          <el-tab-pane label="Attachments"><Attachments /></el-tab-pane>
          <el-tab-pane label="History"><History /></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentInputForm from '../components/DocumentInputForm.vue';
import Attachments from '../components/Attachments.vue';
import History from '../components/History.vue';
import * as doc from '../pdfs/poderys2017.pdf';

@Component({
  components: {
    DocumentInputForm,
    Attachments,
    History,
  },
})
export default class DocumentCard extends Vue {
  mounted() {
    console.log(doc);
  }
}
</script>

<style lang="sass">
.document-card
  margin-top: 10px
</style>
