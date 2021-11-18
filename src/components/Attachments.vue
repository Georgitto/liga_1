<template>
    <div class="attachments">
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
                prop="creationDate"
                label="Date">
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name">
            </el-table-column>
            <el-table-column
                label="Show"
                width="130px"
                prop="link">
                <template slot-scope="scope">
                    <el-button type="primary" plain
                        @click="showDocument(scope.row.link)">Show
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                label="Download"
                width="130px">
                <template slot-scope="scope">
                <el-button type="primary"
                @click="downloadDocument(scope.row.link)" plain>Download</el-button>
                </template>
            </el-table-column>
        </el-table>
        <UploadDocuments />
    </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { getById, getPDF } from '../api/pdfs';
import * as doc from '../pdfs/poderys2017.pdf';
import UploadDocuments from './UploadDocuments.vue';

@Component({
  components: {
    UploadDocuments,
  },
})
export default class Attachments extends Vue {
  tableData = [
    {
      creationDate: '2021-06-06',
      name: 'poderys2017.pdf',
      link: `http://192.168.0.109:8080/${doc.default}`,
    },
  ];

  showDocument(link: string) {
    window.open(link);
  }

  downloadDocument(href: string) {
    const link = document.createElement('a');
    link.href = href;
    link.download = '';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
</script>

<style lang="sass">
.attachments
  display: inline-flex
  align-items: center
  width: 100%
</style>
