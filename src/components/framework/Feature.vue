<script setup lang="ts">
const { dynamic = false } = defineProps<{ dynamic?: boolean }>();
</script>

<template>
    <RouterLink to="/">
        <h1 :class="{ 'dynamic': dynamic }">马铃术 Poteitou57&emsp;|</h1>
    </RouterLink>
</template>

<style scoped>
h1 {
    font-size: 2em;
    color: #FFFFFFFF;
}

h1::after {
    content: "（~ω~）？";
    display: inline-block;
    opacity: 1;
    transform: translateX(1em);
}

.dynamic::after {
    content: "（~ω~）？";
    display: inline-block;
    opacity: 0;
    transition: all 1s;
    transform: translateX(0);
}

.dynamic:hover::after {
    opacity: 1;
    transform: translateX(1em);
}
</style>
