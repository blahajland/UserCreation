<script setup lang="ts">
import { assets } from 'blahaj-library'

defineProps({
  sources: {
    type: Array<String>,
    required: true
  }
})

const bgImg = 'url(' + assets.images.pictures.get('background') //temporary
</script>

<template>
  <div class="Slideshow">
    <div>
      <img alt="Left" :src="assets.images.icons.get('left')" />
      <img alt="Left" :src="assets.images.icons.get('right')" />
    </div>
  </div>
</template>

<style lang="sass">
.Slideshow
  flex: 1 1
  background: v-bind(bgImg) center center no-repeat
  background-size: cover
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: end
  align-items: start
  padding: 16px

  > div
    display: flex
    flex-direction: row
    background: var(--surface1)
    padding: 10px
    border-radius: var(--radius-inf)
    gap: 12px

    > img
      height: 20px
      filter: var(--filter)
</style>
