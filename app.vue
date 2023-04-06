<template>
  <div>
  <h1>On cloudflare, {{ data }}</h1>
  </div>
</template>

<script setup lang="ts">

const data = await useFetch("api/env")
</script>
