<script setup lang="ts">
import CustomMessage from '@/library/vue/CustomMessage.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import BlahajPassword from '@/library/vue/BlahajPassword.vue'
import CustomGap from '@/library/vue/CustomGap.vue'
import BlahajInput from '@/library/vue/BlahajInput.vue'
import { ref } from 'vue'
import { getFormData } from '@/assets/ts/signup-factory'

const formData = ref(getFormData())
</script>

<template>
  <h1>Sign up</h1>
  <p>awa uwu ewe</p>
  <CustomGap gap="16px" />
  <CustomMessage>
    <h3>An error occured</h3>
    <p>The following requirement aren't met :</p>
    <ul>
      <li>awa</li>
      <li>uwu</li>
    </ul>
  </CustomMessage>
  <BlahajInput
    @inputUpdated="(e: string) => (formData.fullName.value = e)"
    :input="formData.fullName.value"
    placeholder="Display name"
    extra-text="mandatory"
    datatype="name"
    :validator="formData.fullName.validator"
  />
  <BlahajInput
    @inputUpdated="(e: string) => (formData.userName.value = e)"
    :input="formData.userName.value"
    placeholder="User name"
    extra-text="mandatory"
    datatype="username"
    :validator="formData.userName.validator"
  />
  <BlahajInput
    @inputUpdated="(e: string) => (formData.backupEmail.value = e)"
    :input="formData.backupEmail.value"
    placeholder="E-mail address"
    extra-text="mandatory"
    datatype="email"
    :validator="formData.backupEmail.validator"
  />
  <BlahajPassword
    @inputUpdated="(e: string) => (formData.passwords.password.value = e)"
    :input="formData.passwords.password.value"
    placeholder="Password"
    :validator="formData.passwords.password.validator"
  />
  <BlahajPassword
    @inputUpdated="(e: string) => (formData.passwords.repeatedPassword.value = e)"
    :input="formData.passwords.repeatedPassword.value"
    placeholder="Retype your password"
    :validator="formData.passwords.repeatedPassword.validator"
  />
  <BlahajInput
    @inputUpdated="(e: string) => (formData.discordId.value = e)"
    :input="formData.discordId.value"
    placeholder="Discord ID"
  />
  <CustomGap gap="16px" />
  <SubmitButton />
</template>
