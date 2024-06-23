<script setup lang="ts">
import BlahajButton from '@/components/inputs/BlahajButton.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { changeLoc, getAsset, themeService } from 'blahaj-library'
import TopButtons from '@/components/TopButtons.vue'
import FormWidget from '@/components/FormWidget.vue'
import SlideShow from '@/components/SlideShow.vue'

themeService.setThemeFromCookie()
</script>

<template>
  <TopButtons>
    <BlahajButton @click="changeLoc('https://discord.gg/23ScBhN7xx')"
      ><img :src="getAsset('/icons/help.png')" alt="Support" />
      <p>Support</p>
    </BlahajButton>
    <BlahajButton @click="themeService.switchTheme()"
      ><img :src="getAsset('/icons/theme.png')" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
  </TopButtons>
  <FormWidget>
    <a href="https://blahaj.land">
      <img :src="getAsset('/pictures/text-logo.png')" alt="Logo" />
    </a>
    <RouterView></RouterView>
    <div class="FillerGap"></div>
    <CustomFooter>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Made by <b>Blahaj Team</b></p>
    </CustomFooter>
  </FormWidget>
  <SlideShow :sources="[]" />
</template>
