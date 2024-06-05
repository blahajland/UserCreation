<script setup lang="ts">
import CustomMessage from '@/components/CustomMessage.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import BlahajPassword from '@/components/BlahajPassword.vue'
import CustomGap from '@/components/CustomGap.vue'
import BlahajInput from '@/components/BlahajInput.vue'
import { ref } from 'vue'
import { getFormData } from '@/assets/ts/signup-factory'

const formData = ref(getFormData())
</script>

<template>
  <h1>Sign up</h1>
  <p>awa uwu ewe</p>
  <CustomGap gap="16px"></CustomGap>
  <CustomMessage>
    <h3>An error occured</h3>
    <p>The following requirement aren't met :</p>
    <ul>
      <li>awa</li>
      <li>uwu</li>
    </ul>
  </CustomMessage>
  <BlahajInput
    :input="formData.fullName.value"
    placeholder="Display name"
    datatype="name"
    :validator="formData.fullName.validator"
    @input-updated="(e: string) => (formData.fullName.value = e)"
  ></BlahajInput>
  <BlahajInput
    :input="formData.userName.value"
    placeholder="User name"
    extra-text="mandatory"
    datatype="username"
    :validator="formData.userName.validator"
    @input-updated="(e: string) => (formData.userName.value = e)"
  ></BlahajInput>
  <BlahajInput
    :input="formData.backupEmail.value"
    placeholder="E-mail address"
    extra-text="mandatory"
    datatype="email"
    :validator="formData.backupEmail.validator"
    @input-updated="(e: string) => (formData.backupEmail.value = e)"
  ></BlahajInput>
  <BlahajPassword
    :input="formData.passwords.password.value"
    placeholder="Password"
    :validator="formData.passwords.password.validator"
    @input-updated="(e: string) => (formData.passwords.password.value = e)"
  ></BlahajPassword>
  <BlahajPassword
    :input="formData.passwords.repeatedPassword.value"
    placeholder="Retype your password"
    :validator="formData.passwords.repeatedPassword.validator"
    @input-updated="(e: string) => (formData.passwords.repeatedPassword.value = e)"
  ></BlahajPassword>
  <BlahajInput
    :input="formData.discordId.value"
    placeholder="Discord ID"
    @input-updated="(e: string) => (formData.discordId.value = e)"
  ></BlahajInput>
  <CustomGap gap="16px"></CustomGap>
  <SubmitButton></SubmitButton>
</template>
