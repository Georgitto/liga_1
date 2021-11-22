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
import {
  Component, Vue, Watch, Prop,
} from 'vue-property-decorator';
import DocumentModel from '../models/document';
import PathModel from '../models/path';
import { getById } from '../api/document';

@Component
export default class Breadcrumb extends Vue {
  breadcrumbData: PathModel.Path[] = [];

  @Watch('$route.path')
  onPathChanged(val: string, oldVal: string) {
    this.breadcrumbData = this.splitPath(val);
  }

  splitPath(path: string):PathModel.Path[] {
    let pathArray: PathModel.Path[] = [];
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

    pathArray = pathArray.map((el:PathModel.Path, index) => {
      const includes = el.path.match(/\/documents\/[A-Za-z0-9]+/g);
      const result: PathModel.Path = {
        name: el.name,
        path: el.path,
      };

      if (includes !== null) {
        this.getDocName(includes[0].split('/')[2]).then((res: string | undefined) => {
          result.name = res;
        });
        console.log(index);
      }

      return result;
    });
    return pathArray;
  }

  async getDocName(id: string): Promise<string | undefined> {
    const { name } = await getById(id);
    return name;
  }

  @Prop(String) readonly docName: string | undefined

  mounted() {
    this.breadcrumbData = this.splitPath(this.$route.path);
  }
}
</script>

<style lang="sass">
.breadcrumb
  margin: auto
    top:10px
  font-size: 16px
</style>
