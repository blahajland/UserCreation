<script setup lang="ts">
import CustomGap from '@/library/vue/CustomGap.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { switchTheme } from '@/library/ts/theme-tools'
import CustomFooter from '@/components/CustomFooter.vue'
import { changeLoc } from '@/library/ts/common-tools'
import { assets } from '@/library/ts/static-tools'

const bgImg = 'url(' + assets.images.get('Background')
</script>

<template lang="pug">
  div.Form
    a(href="https://blahaj.land")
      img(:src="assets.images.get('Logo')")
    CustomGap(gap="16px")
    div.Buttons
      BlahajButton(@click="changeLoc('https://opencollective.com/blahajland')")
        img(:src="assets.images.icons.get('donate')", alt="Donate")
        p Donate
      BlahajButton(@click="switchTheme()")
        img(:src="assets.images.icons.get('theme')", alt="Theme")
        p Theme
    CustomGap(gap="32px")
    RouterView
    CustomGap(gap="24px")
    div.FillerGap
    CustomFooter
      p &copy; #[b eryn] Some rights reserved
      p Made by #[b Blahaj Team]
  div.Background

</template>

<style lang="sass">
.Form
  height: 100%
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 8px
  box-sizing: border-box
  padding: 64px 48px 0
  width: 500px
  background: var(--background)
  overflow: auto

  > a
    width: fit-content
    align-self: center

    > img
      width: 256px
      filter: var(--filter)

  *
    margin: 0

.Buttons
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 12px

.Background
  flex: 1 1
  background: v-bind(bgImg) center center no-repeat
  background-size: cover

.FillerGap
  flex: 1 1 0
</style>
