<script setup lang="ts">
import CustomMessage from '@/components/CustomMessage.vue'
import SubmitButton from '@/components/inputs/SubmitButton.vue'
import BlahajInput from '@/components/inputs/BlahajInput.vue'
import { formDataRef } from '@/assets/code/signup-factory'
import { assets } from 'blahaj-library'
import { ref } from 'vue'
import FormContainer from '@/components/FormContainer.vue'
import TitleContainer from '@/components/TitleContainer.vue'

const errorMessage = ref('')
</script>

<template>
  <TitleContainer>
    <h2>Create a blahaj.land account</h2>
    <p>Subtitle</p>
    <p>maybe even two lines</p>
  </TitleContainer>
  <CustomMessage v-if="errorMessage !== ''">
    <h3>An error occured</h3>
    <p>The following requirement aren't met :</p>
    <ul>
      <li>awa</li>
      <li>uwu</li>
    </ul>
  </CustomMessage>
  <FormContainer>
    <BlahajInput
      :input="formDataRef.userName.value"
      placeholder="User name"
      extra-text="mandatory"
      datatype="username"
      :validator="formDataRef.userName.validator"
      :icon="assets.images.icons.get('user')"
      @input-updated="(e: string) => (formDataRef.userName.value = e)"
    ></BlahajInput>
    <BlahajInput
      :input="formDataRef.backupEmail.value"
      placeholder="E-mail address"
      extra-text="mandatory"
      datatype="email"
      :validator="formDataRef.backupEmail.validator"
      :icon="assets.images.icons.get('mail')"
      @input-updated="(e: string) => (formDataRef.backupEmail.value = e)"
    ></BlahajInput>
    <BlahajInput
      type="password"
      :input="formDataRef.passwords.password.value"
      placeholder="Password"
      :validator="formDataRef.passwords.password.validator"
      :icon="assets.images.icons.get('password')"
      @input-updated="(e: string) => (formDataRef.passwords.password.value = e)"
    ></BlahajInput>
    <BlahajInput
      v-if="formDataRef.passwords.password.value !== ''"
      type="password"
      :input="formDataRef.passwords.repeatedPassword.value"
      placeholder="Retype your password"
      :icon="assets.images.icons.get('password')"
      :validator="formDataRef.passwords.repeatedPassword.validator"
      @input-updated="(e: string) => (formDataRef.passwords.repeatedPassword.value = e)"
    ></BlahajInput>
    <BlahajInput
      :input="formDataRef.discordId.value"
      placeholder="Discord ID"
      :icon="assets.images.icons.get('discord')"
      @input-updated="(e: string) => (formDataRef.discordId.value = e)"
    ></BlahajInput>
  </FormContainer>
  <SubmitButton></SubmitButton>
</template>
