<script setup lang="ts">
import CustomGap from '@/library/vue/CustomGap.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { switchTheme } from '@/library/ts/theme-tools'
import CustomFooter from '@/components/CustomFooter.vue'
import { changeLoc } from '@/library/ts/common-tools'
</script>

<template>
  <div class="Form">
    <a href="http://blahaj.land">
      <img src="https://blahaj.land/static/images/Logo.png" />
    </a>
    <CustomGap gap="32px" />
    <RouterView></RouterView>
    <CustomGap gap="24px" />
    <div class="FillerGap" />
    <CustomFooter>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Made by <b>Blahaj Team</b></p>
    </CustomFooter>
  </div>
  <div class="Background">
    <BlahajButton
      color="var(--background)"
      @click="changeLoc('https://opencollective.com/blahajland')"
    >
      <img src="https://blahaj.land/static/images/icons/donate.png" alt="Donate" />
      <p>Donate</p>
    </BlahajButton>
    <BlahajButton @click="switchTheme()" color="var(--background)">
      <img src="https://blahaj.land/static/images/icons/theme.png" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
  </div>
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

.Background
  display: flex
  flex-direction: row
  justify-content: end
  align-items: end
  padding: 32px
  gap: 12px
  flex: 1 1
  background: url('https://blahaj.land/static/images/Background.png') center center no-repeat
  background-size: cover

.FillerGap
  flex: 1 1 0
</style>
