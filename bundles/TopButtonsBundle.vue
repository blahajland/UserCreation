<script setup lang="ts">
import { getAsset, themeService } from "blahaj-library";
import BlahajButton from "@/components/inputs/BlahajButton.vue";
</script>

<template>
  <TopButtons>
    <BlahajButton href="https://discord.gg/23ScBhN7xx">
      <NuxtImg :src="getAsset('/icons/help.svg')" alt="Support" />
      <p>Support</p>
    </BlahajButton>
    <BlahajButton @click="themeService.switchTheme()">
      <NuxtImg :src="getAsset('/icons/theme.svg')" alt="Theme" />
      <p>Theme</p>
    </BlahajButton>
  </TopButtons>
</template>
