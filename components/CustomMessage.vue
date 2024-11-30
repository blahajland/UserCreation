<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "#FF000040",
  },
});
</script>

<template>
  <div class="CustomMessage">
    <slot />
  </div>
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
  animation: MessageJumpIn ease-in-out 0.5s

  > img
    width: 24px

  *
    margin: 0
</style>
