<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
</style>