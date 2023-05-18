<template>
    <div>
        <h1>Neom is a mega project i think {{ data?.hello }}</h1>
    </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/hello2')

</script>

<style scoped>

</style>