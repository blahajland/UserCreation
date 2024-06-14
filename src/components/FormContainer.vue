<script setup lang="ts"></script>

<template>
  <div class="FormContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.FormContainer
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 12px
</style>
