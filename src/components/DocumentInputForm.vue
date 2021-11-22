<template>
    <div class="document-input">
        <div class="document-input__left left">
            <div class="document-input__name name">
                <div class="name title">Name:</div>
                <div class="name text">
                    <el-input
                        v-model="data.name"
                        class="text-input"
                        type="text"
                        :disabled = "$route.query.disabled == 'true'"
                    >
                    </el-input>
                </div>
            </div>
            <div class="document-input__owner owner">
                <div class="owner title">Owner:</div>
                <div class="owner text">
                    <el-input
                        v-model="data.owner"
                        class="text-input"
                        type="text"
                        :disabled = "$route.query.disabled == 'true'"
                        :placeholder="data.owner">
                    </el-input>
                </div>
            </div>
            <div class="document-input__creation creation">
                <div class="creation title">Creation Date:</div>
                <div class="creation text">
                    <el-date-picker
                        v-model="data.creationDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        :placeholder="data.creationDate"
                        :disabled = "$route.query.disabled == 'true'">
                    </el-date-picker>
                </div>
            </div>
            <div class="document-input__direction direction">
                <div class="direction title">Direction:</div>
                <div class="direction text">
                    <el-select v-model="data.direction"
                    :disabled = "$route.query.disabled == 'true'"
                    placeholder="Select">
                        <el-option
                        v-for="item in directions"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="document-input__right right">
            <div class="document-input__type type">
                <div class="type title">Type:</div>
                <div class="type text">
                    <el-select v-model="data.type" placeholder="Select"
                    :disabled = "$route.query.disabled == 'true'">
                        <el-option
                        v-for="item in types"
                        :key="item"
                        :label="item"
                        :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="document-input__sign-date sign-date">
                <div class="sign-date title">Sign Date:</div>
                <div class="sign-date text">
                    <el-date-picker
                        v-model="data.signatureDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        :disabled = "$route.query.disabled == 'true'">
                    </el-date-picker>
                </div>
            </div>
            <div class="document-input__sign-owner sign-owner">
                <div class="sign-owner title">Sign Owner:</div>
                <div class="sign-owner text">
                    <el-input
                        v-model="data.signatureOwner"
                        class="text-input"
                        type="text"
                        :disabled = "$route.query.disabled == 'true'">
                    </el-input>
                </div>
            </div>
            <div class="document-input__total-sum total-sum">
                <div class="total-sum title">Total Sum:</div>
                <div class="total-sum text">
                    <el-input
                        v-model="data.totalSum"
                        class="text-input"
                        type="text"
                        :disabled = "$route.query.disabled == 'true'">
                    </el-input>
                </div>
            </div>
            <div class="document-input__buttons buttons"
            v-if="$route.path.match(/\/documents\/[0-9,A-z]+/g) !== null">
                <el-button class="buttons update" @click="updateDocumentInfo"
                :disabled = "$route.query.disabled == 'true'">Update</el-button>
            </div>
            <div v-else class="document-input__buttons buttons">
                <el-button class="buttons update" @click="createNewDocument"
                :disabled = "$route.query.disabled == 'true'">Create</el-button>
            </div>
        </div>
        <Select :options="['in', 'out']" @current-select-value = 'onSelectValue' :disabled="false"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentModel from '../models/document';
import { getById, createDocument, updateDocument } from '../api/document';
import { createHistory, updateHistory } from '../api/history';
import Select from './Select.vue';

@Component({
  components: {
    Select,
  },
})
export default class DocumnetInputForm extends Vue {
  data: DocumentModel.Document = {
    id: this.$route.params.id,
    name: '',
    owner: '',
    creationDate: '',
    direction: '',
    type: '',
    signatureDate: '',
    signatureOwner: '',
    totalSum: '',
  }

  directions = ['in', 'out'];

  types = ['act', 'invoce'];

  updateDocumentInfo() {
    const updates: DocumentModel.Document = {
      id: '',
    };
    Object.entries(this.data).forEach((el:[string, string]) => {
      if (el[0] !== 'id') {
        if (el[1] !== '') {
          Object.defineProperty(updates, el[0], {
            value: el[1],
            configurable: true,
            writable: true,
            enumerable: true,
          });
        }
      }
    });

    updateDocument(this.$route.params.id, updates).then((res:DocumentModel.Document) => {
      console.log(res);
      const date = `${
        new Date().getFullYear()
      }-${String(new Date().getMonth() + 1).padStart(2, '0')}-${
        String(new Date().getDate()).padStart(2, '0')}`;
      updateHistory(res.id, { updateDate: date, ...res }).then((r) => {
        console.log(r);
      });
    });
  }

  createNewDocument() {
    createDocument(this.data).then((res:DocumentModel.Document) => {
      console.log(res);
      const date = `${
        new Date().getFullYear()
      }-${String(new Date().getMonth() + 1).padStart(2, '0')}-${
        String(new Date().getDate()).padStart(2, '0')}`;
      const history = {
        id: res.id,
        changes: [
          {
            updateDate: date, ...res,
          },
        ],
      };
      createHistory(history);
    });
  }

  onSelectValue(data:{newVal:string}) {
    console.log('Selected option is ', data.newVal);
  }

  mounted() {
    if (this.$route.path.match(/\/documents\/[0-9,A-z]+/g) !== null) {
      getById(this.$route.params.id).then((res:DocumentModel.Document) => {
        this.data = res;
      });
    }
  }
}
</script>

<style lang="sass">
.document-input
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: stretch
    flex-grow: 3
    line-height: 32px
    padding: 0 100px 0 100px

.document-input__left
    min-width: 30%

.document-input__right
    min-width: 30%

.name
    height: 50px
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.owner
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.text-input
    width: 220px

.creation
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.direction
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.type
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.sign-date
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.sign-owner
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.total-sum
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 10px

.buttons
    display: flex
    flex-direction: row
    justify-content: flex-end

.title
    min-width: 110px

@media all and (max-width: 890px)
    .document-input
        flex-direction: column
</style>
