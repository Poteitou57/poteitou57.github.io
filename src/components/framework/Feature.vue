<script setup>
defineProps({
    dynamic: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <h1 :class="{'dynamic': dynamic}">Poteitou57&emsp;|</h1>
</template>

<style scoped>
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
