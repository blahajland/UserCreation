<script setup></script>

<template>
  <div class="TopBar">
    <a href="http://blahaj.land">
      <img src="/images/logo.png" alt="Logo" />
    </a>
  </div>
</template>

<style lang="sass">
.TopBar
  position: fixed
  top: 0
  left: 0
  right: 0
  background: var(--background)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  z-index: 5

  > a > img
    filter: var(--filter)

@media (min-width: 1201px)
  .TopBar
    padding: 24px

    > a > img
      height: 32px

    > div
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: stretch
      gap: 8px

@media (max-width: 1200px)
  .TopBar
    padding: 24px 0

    > a > img
      height: 36px

    > div
      display: none
</style>
