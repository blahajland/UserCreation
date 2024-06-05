<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 8px
  padding: 0 0 12px

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit
</style>
