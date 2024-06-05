<script setup lang="ts">
import CustomGap from './CustomGap.vue'
import { colorsService } from 'blahaj-library'

defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: '#FF000040'
  }
})
</script>

<template>
  <div class="CustomMessage">
    <slot></slot>
  </div>
  <CustomGap gap="8px" />
</template>

<style>
.CustomMessage {
  width: 100%;
  background: v-bind(color);
  padding: 16px;
  box-sizing: border-box;
  border-radius: var(--radius-med);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 4px;
}

.CustomMessage > h1,
.CustomMessage > h2,
.CustomMessage > h3,
.CustomMessage > h4,
.CustomMessage > h5,
.CustomMessage > h6 {
  text-align: center;
}

.CustomMessage * {
  margin: 0;
}
</style>
