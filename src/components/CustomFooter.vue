<script setup></script>

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

  @media (min-width: 1201px)
    gap: 8px
    padding: 0 0 12px

  @media (max-width: 1200px)
    gap: 16px
    padding: 64px 0 32px

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit
</style>
