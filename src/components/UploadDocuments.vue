<template>
    <div class="upload-documents">
        <el-upload
            class="upload-demo"
            action="http://localhost:8080/src/assets"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">Click to upload</el-button>
            <div slot="tip" class="el-upload__tip">Choose your file to upload</div>
        </el-upload>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UploadDocument extends Vue {
    fileList = [];

    handleRemove(file:any, fileList:any) {
      console.log(file, fileList);
    }

    handlePreview(file:any) {
      console.log(file);
    }

    handleExceed(files:any, fileList:any) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
    }

    beforeRemove(file:any, fileList:any) {
      return this.$confirm(`Cancel the transfert of ${file.name}?`);
    }
}
</script>

<style lang="sass">
.upload-documents
    width:20%
</style>
