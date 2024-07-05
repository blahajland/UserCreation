<script setup lang="ts">
import { getAsset, themeService } from "blahaj-library";
import FormWidget from "~/components/containers/FormWidget.vue";
import SlideShow from "@/components/SlideShow.vue";
import TopButtonsBundle from "~/bundles/TopButtonsBundle.vue";
import FooterBundle from "~/bundles/FooterBundle.vue";

useNuxtApp().hook("app:mounted", () => themeService.setThemeFromCookie());
</script>

<template>
  <TopButtonsBundle />
  <FormWidget>
    <a href="https://blahaj.land">
      <NuxtImg :src="getAsset('pictures/text-logo.png')" alt="Logo" />
    </a>
    <NuxtPage />
    <div class="FillerGap" />
    <FooterBundle />
  </FormWidget>
  <SlideShow :sources="[]" />
</template>
