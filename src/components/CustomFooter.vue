<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 8px

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit
</style>
