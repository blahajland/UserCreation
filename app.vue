<script setup lang="ts">
import MainContainer from "~/components/MainContainer.vue";
import CustomFooter from "~/components/containers/CustomFooter.vue";
import {$get} from "~/services/assets/assets.service";
import BlahajButton from "~/components/inputs/BlahajButton.vue";
</script>

<template>
    <MainContainer>
      <Suspense>
        <NuxtPage/>
      </Suspense>
    </MainContainer>
    <CustomFooter>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Made by <b>Blahaj Team</b></p>
      <BlahajButton href="https://discord.gg/23ScBhN7xx">
        <NuxtImg :src="$get('/icons/help.svg')" alt="Support"/>
        <p>Support</p>
      </BlahajButton>
    </CustomFooter>
</template>
