<template>
  <div class="CustomFooter">
    <slot />
  </div>
</template>

<style lang="sass">
.CustomFooter
  position: fixed
  bottom: 16px
  right: 16px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 12px
  border-radius: var(--radius-med)
  padding: 24px 32px
  background: var(--background)

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit

  > *:last-child
    margin-top: 8px
</style>
