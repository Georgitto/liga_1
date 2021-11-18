<template>
    <div class="document-table">
      <div class="document-table__button button">
        <el-button class="button create" @click="createDocument"
          :disabled = "$route.query.disabled == 'false'">Create</el-button>
      </div>
        <el-table :data="pagedTableData" style="width: 100%" @row-click="redirectToDocCardRead">
            <el-table-column prop="id" label="Id" width="50px"> </el-table-column>
            <el-table-column prop="name" label="Name" width="250px"> </el-table-column>
            <el-table-column prop="owner" label="Owner" width="210px"> </el-table-column>
            <el-table-column class-name="authorWorks"
                prop="creationDate" label="Creation Date"
                width="110px">
            </el-table-column>
            <el-table-column prop="direction" label="Direction" width="80px">
            </el-table-column>
            <el-table-column prop="type" label="Type" width="80px">
            </el-table-column>
            <el-table-column prop="signatureDate" label="Sign Date" width="100px">
            </el-table-column>
            <el-table-column prop="signatureOwner" label="Sign Owner" width="210px">
            </el-table-column>
            <el-table-column prop="totalSum" label="Total Sum" width="90px">
            </el-table-column>
            <el-table-column width="100px">
                <template slot-scope="scope">
                    <el-button
                        size="small"
                        type="warning"
                        value="id"
                        plain
                        @click.stop="update(scope.row.id, tableData)">
                        Update
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column width="100px">
                <template slot-scope="scope">
                    <el-button
                        size="small"
                        type="danger"
                        value="id"
                        plain
                        @click.stop="deleteDoc(scope.row.id, tableData)">
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            layout="prev, pager, next"
            :total="tableData.length"
            :page-size="pageSize"
            @current-change="setPage">
        </el-pagination>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentModel from '../models/document';
import { getAll, deleteDocument } from '../api/document';

@Component
export default class DocumentTable extends Vue {
  tableData: DocumentModel.Document[] = [];

  page = 1;

  pageSize = 5;

  redirectToDocCardRead(row: DocumentModel.Document):void {
    this.$router.push(`/documents/${row.id}?disabled=true`);
  }

  get pagedTableData():DocumentModel.Document[] {
    return this.tableData
      .slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page);
  }

  setPage(val: number) {
    this.page = val;
  }

  async deleteDoc(id:any) {
    try {
      await deleteDocument(id);
      const result = await getAll();
    } catch (err) {
      console.error(err);
    }
  }

  createDocument() {
    this.$router.push('/create?disabled=false');
  }

  update(id:string) {
    this.$router.push(`/documents/${id}?disabled=false`);
  }

  created():void {
    getAll().then((data:DocumentModel.Document[]) => {
      this.tableData = data;
    });
  }
}
</script>

<style lang="css">
.document-table__button {
  display: flex;
  padding: 10px;
  justify-content: flex-end;
}
</style>
