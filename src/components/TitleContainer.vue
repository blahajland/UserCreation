<script setup lang="ts"></script>

<template>
  <div class="TitleContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.TitleContainer
  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: stretch
  gap: 4px

  > *
    text-align: center
    max-width: 100%
</style>
