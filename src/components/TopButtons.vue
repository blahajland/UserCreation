<script setup lang="ts"></script>

<template>
  <div class="TopButtons">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.TopButtons
  position: absolute
  top: 20px
  right: 20px
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 12px
</style>
