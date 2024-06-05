<script setup lang="ts">
import BlahajButton from '@/components/BlahajButton.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { assets, changeLoc, themeService } from 'blahaj-library'
import CustomGap from '@/components/CustomGap.vue'

const bgImg = 'url(' + assets.images.pictures.get('background')
</script>

<template>
  <div class="Form">
    <a href="https://blahaj.land"> <img :src="assets.images.pictures.get('text-logo')" /></a>
    <CustomGap gap="16px"></CustomGap>
    <div class="Buttons">
      <BlahajButton @click="changeLoc('https://opencollective.com/blahajland')"
        ><img :src="assets.images.icons.get('donate')" alt="Donate" />
        <p>Donate</p>
      </BlahajButton>
      <BlahajButton @click="themeService.switchTheme()"
        ><img :src="assets.images.icons.get('theme')" alt="Theme" />
        <p>Theme</p>
      </BlahajButton>
    </div>
    <CustomGap gap="32px"></CustomGap>
    <RouterView></RouterView>
    <CustomGap gap="24px"></CustomGap>
    <div class="FillerGap"></div>
    <CustomFooter>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Made by <b>Blahaj Team</b></p>
    </CustomFooter>
  </div>
  <div class="Background"></div>
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
  width: 450px
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
  border-radius: 24px 0 0 24px

.FillerGap
  flex: 1 1 0
</style>
