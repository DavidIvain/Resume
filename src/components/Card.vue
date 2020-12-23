<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Card"
});
</script>

<style scoped>
.card {
  background: white;
  border-radius: 16px;
  color: black;
}
</style>