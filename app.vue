<template>
  <div>
    <h1>On cloudflares, {{ data }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const data = await $fetch("/api/hello")

</script>
