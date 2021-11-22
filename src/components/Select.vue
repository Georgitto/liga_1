<template>
    <div class="custom-select">
        <select :disabled='disabled' v-model="selected" class="select">
            <option v-for="option, index in options"
            :key="index"
            :value="option"
            :selected="true">
            {{ option }}
            </option>
        </select>
    </div>
</template>

<script lang='ts'>
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';

@Component
export default class Select extends Vue {
  selected = '';

  @Prop(Boolean) readonly disabled: boolean | undefined

  @Prop(Array) readonly options: string[] | undefined

  @Watch('selected')
  onSelectedChange(newVal: string) {
    this.$emit('current-select-value', {
      newVal,
    });
  }
}
</script>

<style scoped lang="sass">
.select
  min-width: 100px
  min-height: 40px
  border: 1px solid #E8EAED
  border-radius: 4px
  padding-left: 15px
  padding-right: 30px
  color: #606266
  font-size: 15px

  &:disabled
    background-color: #F5F7FA

</style>
