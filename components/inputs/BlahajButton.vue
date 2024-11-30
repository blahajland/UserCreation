<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: undefined,
  },
  isSubmit: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a :href="href" class="BlahajButton" :class="{ submitter: isSubmit }">
    <slot />
  </a>
</template>

<style lang="sass">
.BlahajButton
  padding: 10px 20px
  border-radius: var(--radius-inf)
  background: var(--surface1)
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: var(--trans)
  color: var(--text)
  gap: 10px
  text-decoration: none
  flex: 0 0

  > img
    height: 20px
    width: 20px
    filter: var(--filter)

  > p
    margin: 0
    font-weight: bold
    white-space: nowrap

  &.submitter
    align-self: center
    padding: 20px 40px

  &:hover
    background: color-mix(in srgb, var(--surface1), var(--surface2))

  &:active
    background: var(--surface2) !important
</style>
