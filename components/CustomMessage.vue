<script setup lang="ts">
import CustomGap from "./CustomGap.vue";
import { colorsService } from "blahaj-library";

defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: "#FF000040",
  },
});
</script>

<template>
  <div class="CustomMessage">
    <slot></slot>
  </div>
  <CustomGap gap="8px" />
</template>

<style lang="sass">
.CustomMessage
  width: 100%
  background: v-bind(color)
  padding: 16px
  box-sizing: border-box
  border-radius: var(--radius-med)
  display: flex
  flex-direction: column
  justify-content: stretch
  align-items: stretch
  gap: 4px

  *
    margin: 0

  > h1, > h2, > h3, > h4, > h5, > h6
    text-align: center
</style>
