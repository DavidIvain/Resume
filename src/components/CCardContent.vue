<template>
  <div class="c-card-content">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CCardContent"
});
</script>

<style>
.c-card-content {
  padding: 16px;
}
</style>