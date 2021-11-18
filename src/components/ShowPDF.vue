<template>
    <canvas id="canvas"></canvas>
</template>

<script lang="ts">
import pdf from 'pdfjs-dist';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ShowPDF extends Vue {
    mounted() {
        pdf.getDocument('../pdfs/poderys2017.pdf')
    }
}
</script>
