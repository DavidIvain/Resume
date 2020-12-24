<template>
  <div class="c-container">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CContainer"
});
</script>

<style>
.c-container {
  margin: 0;
  padding: 0;
}
</style>