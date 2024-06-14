<script setup lang="ts"></script>

<template>
  <div class="FormWidget">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.FormWidget
  flex: 0 0 350px
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  overflow: scroll
  gap: 32px
  padding: 64px 32px 0 8px

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

.FillerGap
  flex: 1 1 0
</style>
