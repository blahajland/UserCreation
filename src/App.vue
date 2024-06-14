<script setup lang="ts">
import BlahajButton from '@/components/inputs/BlahajButton.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { assets, changeLoc, themeService } from 'blahaj-library'
import Slideshow from '@/components/Slideshow.vue'
import TopButtons from '@/components/TopButtons.vue'
import FormWidget from '@/components/FormWidget.vue'

themeService.setThemeFromCookie()
</script>

<template>
  <TopButtons>
    <BlahajButton @click="changeLoc('https://discord.gg/23ScBhN7xx')"
      ><img :src="assets.images.icons.get('help')" alt="Support" />
      <p>Support</p>
    </BlahajButton>
    <BlahajButton @click="themeService.switchTheme()"
      ><img :src="assets.images.icons.get('theme')" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
  </TopButtons>
  <FormWidget>
    <a href="https://blahaj.land">
      <img :src="assets.images.pictures.get('text-logo')" />
    </a>
    <RouterView></RouterView>
    <div class="FillerGap"></div>
    <CustomFooter>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Made by <b>Blahaj Team</b></p>
    </CustomFooter>
  </FormWidget>
  <Slideshow :sources="[]" />
</template>
