<template>
  <img :src="src" :alt="alt" class="avatar"/>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 100%;
}
</style>