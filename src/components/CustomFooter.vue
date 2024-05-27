<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  gap: 16px

  @media (min-width: 1201px)
    flex-direction: row
    padding: 0 0 12px

  @media (max-width: 1200px)
    flex-direction: column
    padding: 0 0 12px

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit
</style>
