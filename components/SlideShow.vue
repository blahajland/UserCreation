<script setup lang="ts">
import { getAsset } from "blahaj-library";

defineProps({
  sources: {
    type: Array<String>,
    required: true,
  },
});

const bgImg = "url(" + getAsset("pictures/background.png"); //temporary
</script>

<template>
  <div class="Slideshow">
    <div>
      <div>
        <NuxtImg alt="Left" :src="getAsset('/icons/left.svg')" />
      </div>
      <div>
        <NuxtImg alt="Left" :src="getAsset('/icons/right.svg')" />
      </div>
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
    border-radius: var(--radius-inf)

    > div
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      padding: 10px
      border-radius: var(--radius-inf)

      &:nth-of-type(2)
        margin-left: -8px

      &:hover
        background: var(--surface2)
        transition: var(--trans)

      > img
        height: 20px
        filter: var(--filter)
</style>
