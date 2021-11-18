<template>
    <div class="author-input">
        <div class="author-input__name name">
            <div class="name title">Name:</div>
            <div class="name text">
                <el-input
                    v-model="name"
                    class="text-input"
                    type="text"
                    size="small"
                    placeholder="Author`s name">
                </el-input>
            </div>
        </div>
        <div class="author-input__date date">
            <div class="date title">Dates of living:</div>
            <el-date-picker
                class="date-input"
                v-model="date"
                type="daterange"
                align="right"
                value-format="yyyy-MM-dd"
                start-placeholder="Date of Birth"
                end-placeholder="Date of Death">
            </el-date-picker>
        </div>
        <div class="author-input__buttons buttons">
            <el-button class="buttons update" @click="createUser">Create</el-button>
            <el-button class="buttons update" @click="updateUserInfo">Update</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { createAuthor, updateAuthor } from '../api/author';
import AuthorModel from '../models/author';

@Component
export default class AuthorInputForm extends Vue {
    date = [];

    name = ''

    updateUserInfo():void {
      const updates = {};
      if (this.name !== '') {
        Object.defineProperty(updates, 'name', {
          value: this.name,
          configurable: true,
          writable: true,
          enumerable: true,
        });
      }

      if (this.date !== null) {
        Object.defineProperty(updates, 'birthDate', {
          value: this.date[0],
          configurable: true,
          writable: true,
          enumerable: true,
        });

        Object.defineProperty(updates, 'deathDate', {
          value: this.date[1],
          configurable: true,
          writable: true,
          enumerable: true,
        });
      }

      updateAuthor(this.id, updates).then((resp:AuthorModel.Author) => {
        console.log(resp);
      });
    }

    createUser() {
      const user = {};
      if (this.name !== '') {
        Object.defineProperty(user, 'name', {
          value: this.name,
          configurable: true,
          writable: true,
          enumerable: true,
        });
      } else {
        console.log('Name wasn`t provided!');
        return;
      }

      if (this.date !== null) {
        Object.defineProperty(user, 'birthDate', {
          value: this.date[0],
          configurable: true,
          writable: true,
          enumerable: true,
        });

        Object.defineProperty(user, 'deathDate', {
          value: this.date[1],
          configurable: true,
          writable: true,
          enumerable: true,
        });
      } else {
        console.log('Dates of living weren`t provided!');
        return;
      }

      createAuthor(user).then((res:number) => {
        console.log(res);
      });
    }

    @Prop(String)readonly id: string = '';

    mounted() {
      console.log(this.id);
    }
}
</script>

<style lang="sass">

.author-input
  margin: 20px 0 0 0
  display: flex
  flex-direction: column
  width: 500px
  line-height: 32px

.name
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-bottom: 10px

.text-input
  width: 350px

.date
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-bottom: 10px

.buttons
  display: flex
  flex-direction: row
  justify-content: flex-end
</style>
