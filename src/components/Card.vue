<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
export default {
name: "Card"
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  color: black;
}
</style>