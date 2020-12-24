<template>
  <div :class="className" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "CCardTitle",
  props: {
    backgroundColor: {
      type: String
    },
    background: {
      type: String
    },
    color: {
      type: String
    },
    align: {
      type: String,
      validator(value: string) {
        return ["flex-start", "flex-end", "space-between", "space-around", "space-evenly", "center"].includes(value);
      }
    },
    flex: {
      type: Boolean,
      default: true
    },
    elevated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className(): string {
      return `c-card-title ${this.flex ? 'c-card-title-flex' : ''} ${this.elevated ? 'c-card-elevated' : 'c-card-laid'}`;
    },
    style(): string {
      let s = "";
      if(this.backgroundColor) s += `background-color: ${this.backgroundColor};`;
      if(this.background) s += `background: ${this.background};`;
      if(this.color) s += `color: ${this.color};`;
      if(this.align) s += `justify-content: ${this.align}`;
      return s;
    }
  },
});
</script>

<style>
.c-card-title-flex {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.c-card-title {
  padding: 16px;
  border-radius: 16px;
  overflow: hidden;
  background-color: dimgray;
  color: white;
}

.c-card-title > * {
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
}
</style>