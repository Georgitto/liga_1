<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
            v-for="data,index in breadcrumbData" :key="index"
            :to="{ path: data.path }">{{data.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import PathModel from '../models/path';

@Component
export default class Breadcrumb extends Vue {
  breadcrumbData: PathModel.Path[] = [];

  @Watch('$route.path')
  onPathChanged(val: string, oldVal: string) {
    this.breadcrumbData = this.splitPath(val);
  }

  splitPath(path: string):PathModel.Path[] {
    const pathArray: PathModel.Path[] = [];
    if (path === '/') {
      return [
        {
          name: 'Main',
          path: '/',
        },
      ];
    }
    path.split('/').forEach((el: string, index: number) => {
      const newPath:string[] = [];
      let arraySize;
      path.split('/').slice(0, index + 1).forEach((ell: string) => {
        arraySize = newPath.push(ell);
      });
      pathArray.push({
        name: el === '' ? 'Main' : el,
        path: newPath.join('/') === '' ? '/' : newPath.join('/'),
      });
    });
    return pathArray;
  }

  mounted() {
    this.breadcrumbData = this.splitPath(this.$route.path);
    console.log(this.breadcrumbData);
  }
}
</script>

<style lang="sass">
.breadcrumb
  margin: auto
    top:10px
  font-size: 16px
</style>
