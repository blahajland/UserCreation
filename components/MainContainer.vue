<script setup lang="ts">
import { $get } from "~/services/assets/assets.service";
</script>

<template>
  <div class="MainContainer">
    <a href="https://blahaj.land">
      <NuxtImg :src="$get('pictures/text-logo.png')" alt="Logo" />
    </a>
    <slot />
  </div>
</template>

<style lang="sass">
.MainContainer
  flex-grow: 1
  width: 350px
  display: flex
  flex-direction: column
  justify-content: stretch
  align-content: center
  overflow: scroll
  background: var(--background)
  z-index: 1
  padding: 64px 32px 32px
  border-radius: 0 var(--radius-med) var(--radius-med) 0
  gap: 32px
  animation: JumpIn ease-in-out 0.5s

  > a
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    > img
      height: 48px
</style>
