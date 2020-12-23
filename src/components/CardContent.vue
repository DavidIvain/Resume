<template>
  <div class="card-content">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
name: "CardContent"
});
</script>

<style scoped>
.card-content {
  padding: 32px;
}
</style>