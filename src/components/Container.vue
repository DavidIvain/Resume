<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Container"
});
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
</style>