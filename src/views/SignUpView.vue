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

<template lang="pug">
h1 Sign up
p awa uwu ewe
CustomGap(gap="16px")
CustomMessage
  h3 An error occured
  p The following requirement aren't met :
  ul
    li awa
    li uwu
BlahajInput(:input="formData.fullName.value", placeholder="Display name", datatype="name", :validator="formData.fullName.validator", @input-updated="(e: string) => (formData.fullName.value = e)")
BlahajInput(:input="formData.userName.value", placeholder="User name", extra-text="mandatory", datatype="username", :validator="formData.userName.validator", @input-updated="(e: string) => (formData.userName.value = e)")
BlahajInput(:input="formData.backupEmail.value", placeholder="E-mail address", extra-text="mandatory", datatype="email", :validator="formData.backupEmail.validator", @input-updated="(e: string) => (formData.backupEmail.value = e)")
BlahajPassword(:input="formData.passwords.password.value", placeholder="Password", :validator="formData.passwords.password.validator", @input-updated="(e: string) => (formData.passwords.password.value = e)")
BlahajPassword(:input="formData.passwords.repeatedPassword.value", placeholder="Retype your password", :validator="formData.passwords.repeatedPassword.validator", @input-updated="(e: string) => (formData.passwords.repeatedPassword.value = e)")
BlahajInput(:input="formData.discordId.value", placeholder="Discord ID", @input-updated="(e: string) => (formData.discordId.value = e)")
CustomGap(gap="16px")
SubmitButton
</template>
