<template>
    <div class="person-card">
        <div class="person-card__name">
            <h1>{{fullName}}</h1>
        </div>
        <div class="person-card__description description">
            <div class="description__birth-date">
                <div class="birth-date__text">Date of Birth:</div>
                <div class="birth-date__date">{{birthDate}}</div>
            </div>
            <div class="description__death-date">
                <div class="death-date__text">Date of Death:</div>
                <div class="death-date__date">{{deathDate}}</div>
            </div>
        </div>
        <AuthorInputForm :id=this.$route.params.id />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorInputForm from '../components/AuthorInputForm.vue';
import AuthorModel from '../models/author';
import { getById } from '../api/author';

type Author = {birthDate: string, name:string, deathDate:string};

@Component({
  components: {
    AuthorInputForm,
  },
})
export default class PersonCard extends Vue {
    fullName: string | undefined = '';

    birthDate: string | undefined = '';

    deathDate: string | undefined = '';

    mounted():void {
      getById(this.$route.params.id).then((data:AuthorModel.Author) => {
        this.fullName = data.name;
        this.birthDate = data.birthDate;
        this.deathDate = data.deathDate;
      });
    }

    findAuthor(name: string):void {
      const authors = JSON.parse(localStorage.getItem('authors') || '{}');
      authors.forEach((element: Author) => {
        if (element.name === name) {
          this.fullName = element.name;
          this.birthDate = element.birthDate;
          this.deathDate = element.deathDate;
        }
      });
    }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400&display=swap')

body
  height: calc(100vh - 50px)
  background-color: #F2F6FC

.person-card
    margin: 0 0 0 0

.description__birth-date
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 200px

.description__death-date
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 200px
</style>
