<script setup lang="ts"></script>

<template>
  <div class="InputsContainer">
    <slot />
  </div>
</template>

<style lang="sass">
.InputsContainer
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 12px
</style>
