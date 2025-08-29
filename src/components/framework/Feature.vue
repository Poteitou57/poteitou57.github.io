<script setup>
defineProps({
    dynamic: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <a href="/">
        <h1 :class="{ 'dynamic': dynamic }">Poteitou57&emsp;|</h1>
    </a>
</template>

<style scoped>
a {
    color: transparent;
    cursor: default;
    user-select: none;
    text-decoration: none;
}

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
