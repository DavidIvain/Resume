<template>
  <img :src="src" :alt="alt" class="avatar"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Avatar",
  props: {
    src: String,
    alt: String
  }
});
</script>

<style scoped>
.avatar {
  border-radius: 100%;
}
</style>