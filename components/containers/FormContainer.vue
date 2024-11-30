<script setup lang="ts"></script>

<template>
  <div class="FormContainer">
    <slot />
  </div>
</template>

<style lang="sass">
.FormContainer
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  overflow: scroll
  gap: 32px

  > h2, > p
    text-align: center

  > a
    width: fit-content
    align-self: center

    > img
      height: 36px
      filter: var(--filter)

  *
    margin: 0
</style>
