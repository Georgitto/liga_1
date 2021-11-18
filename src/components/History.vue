<template>
    <div class="history">
        <el-card class="history__card"
        v-for="(cardData, index) in cardsData"
        v-bind:key="index">
            <div slot="header" class="clearfix">
                <span>Update from: {{cardData.updateDate}}</span>
            </div>
            <div v-for="(data, index) in filterObject(cardData)" :key="index" class="history__item">
                <div class="item">{{description[index]}}:</div>
                <div class="item">{{data}}</div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getById } from '../api/history';
import HistoryModel from '../models/history';

@Component
export default class History extends Vue {
  cardsData = {};

  description = {
    name: 'Name',
    owner: 'Owner',
    creationDate: 'Creation Date',
    direction: 'Direction',
    type: 'Type',
    signatureDate: 'Sign Date',
    signatureOwner: 'Sign Owner',
    totalSum: 'Total Sum',
  };

  mounted() {
    getById(this.$route.params.id).then((data) => {
      this.cardsData = data.changes;
    });
  }

  filterObject(obj:HistoryModel.Change) {
    const newObj = { ...obj };
    delete newObj.id;
    delete newObj.updateDate;
    //  console.log(newObj);
    return newObj;
  }
}
</script>

<style lang="sass">
.history
  padding: 0 0 50px 0

.history__item
  margin-bottom: 18px
  font-size: 14px
  display: flex
  flex-direction: row
  justify-content: space-evenly
  .item
    width: 40%
    text-align: start

.history__card
  width: 40%
  display: inline-flex
  flex-direction: column
  margin: 0 20px 20px 0

.clearfix
  justify-self: flex-start

.left
  text-align: start

.item
  width: 40%
  text-align: start
</style>
