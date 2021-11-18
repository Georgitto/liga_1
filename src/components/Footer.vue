<template>
    <div class="footer">
        <div class="footer-left">
            <div class="left-fullname text">Georgiy Shaporenko</div>
        </div>
        <div class="footer-right text">
            <div class="right-mail">gshaporenko200@mail.ru</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="css" scoped>
.footer {
    display: flex;
    flex-direction: row;
    width:100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #EBEEF5;
    border-top: 1px solid rgba(128, 128, 128, 0.527);
}

.footer-left {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.footer-right {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.left-fullname {
    min-width: 220px;
    padding-right: 20px;
}

.right-mail {
    min-width: 220px;
    padding-left: 20px;
}

.text {
    line-height: 50px;
}
</style>
