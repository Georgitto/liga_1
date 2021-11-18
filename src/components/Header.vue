<template>
<div class="header">
    <div class="header-left">
        <div class="left-title text">Test Project</div>
    </div>
    <div class="header-right">
        <div class="right-button text link"
          @click="$router.push('/').catch(()=>{})">
          Main
        </div>
        <div class="right-button text link"
          @click="$router.push(`/author`).catch(()=>{})">
          Home
        </div>
        <div class="right-button text link"
          @click="$router.push('/documents').catch(()=>{})">
          Documents
        </div>
        <div class="right-button text link">About</div>
        <div class="right-button text link last">Log In</div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    query = '';
}
</script>

<style lang="sass" scoped>
    .header
        position: fixed
        top: 0
        left: 0
        z-index: 15
        width: 100%
        height: 50px
        display: flex
        flex-direction: row
        padding: 0 10px 0 10px
        background-color: #EBEEF5
        box-shadow: 0 0 10px rgba(0,0,0,0.3)

    .header-left
        display: flex
        flex-direction: row
        justify-content: flex-start
        width: 50%

    .left-title
        line-height: 50px

    .header-right
        display: flex
        width: 50%
        flex-direction: row
        justify-content: flex-end

    .right-button
        line-height: 50px

    .last
        margin-right: 25px

    .text
        size: 16px
        min-width: 100px

    .link
        color: #409EFF
        cursor: pointer
</style>
