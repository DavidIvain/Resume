<template>
  <div :class="className" :style="style"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CSeparator",
  props:{
    direction: {
      type: String,
      default: "h",
      validator: (value: string) => ["v", "h"].includes(value)
    },
    length: {
      type: Number,
      default: 100,
      validator: (value: number) => value >= 0 && value <= 100
    }
  },
  computed: {
    style (): string {
      return (this.direction == "v" ? "height:" : "width:") + this.length + "%;";
    },
    className(): string {
      return `c-separator-${this.direction}`;
    }
  }
});
</script>

<style>
.c-separator-h {
  height: 0;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid lightgrey;
}
.c-separator-v {
  width: 0;
  margin-top: auto;
  margin-bottom: auto;
  border-left: 1px solid lightgrey;
}
</style>