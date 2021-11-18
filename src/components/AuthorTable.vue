<template>
  <div class="home-table">
    <el-table ref="docTable" :data="pagedTableData"
    style="width: 100%" @row-click="redirectToPersonCard">
    <el-table-column prop="id" label="Id"> </el-table-column>
    <el-table-column prop="name" label="Name"> </el-table-column>
    <el-table-column prop="birthDate" label="Date of Birth"> </el-table-column>
    <el-table-column class-name="authorWorks" prop="deathDate" label="Date of Death"
    style="width:50px; text-overflow:ellipsis;"> </el-table-column>
    <el-table-column prop="id">
      <template slot-scope="scope">
       <el-button
       size="small"
       type="danger"
       value="id"
       plain
       @click.stop="deleteRow(scope.row.id, tableData)">
       Delete</el-button>
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
import AuthorModel from '../models/author';
import { getAll, deleteAuthor } from '../api/author';

@Component
export default class Table extends Vue {
  tableData: AuthorModel.Author[] = [];

  page = 1;

  pageSize = 5;

  redirectToPersonCard(row: AuthorModel.Author):void {
    this.$router.push(`/author/${row.id}`);
  }

  updateLocalStorage(authors: AuthorModel.Author[]):void {
    localStorage.authors = JSON.stringify(authors);
    console.log(JSON.parse(localStorage.authors));
  }

  get pagedTableData():AuthorModel.Author[] {
    return this.tableData
      .slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page);
  }

  setPage(val: number) {
    console.log(val);
    this.page = val;
  }

  deleteRow(id:any) {
    deleteAuthor(id).then((res:any) => {
      console.log(id);
      getAll().then((data:AuthorModel.Author[]) => {
        this.tableData = data;
      });
    });
  }

  created():void {
    getAll().then((data:AuthorModel.Author[]) => {
      this.tableData = data;
    });
  }
}
</script>

<style lang="sass">
.authorWorks
  width: 70px
</style>
