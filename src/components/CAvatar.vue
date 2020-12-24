<template>
  <img :src="src" :alt="alt" class="c-avatar"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CAvatar",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
});
</script>

<style>
.c-avatar {
  border-radius: 100%;
}
</style>