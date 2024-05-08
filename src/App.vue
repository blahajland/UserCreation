<script setup>
import { ref } from 'vue'
import BlahajInput from '@/library/vue/BlahajInput.vue'
import BlahajPassword from '@/library/vue/BlahajPassword.vue'
import CustomGap from '@/library/vue/CustomGap.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { VALIDATOR_STATE } from '@/library/js/statusTools.js'
import { switchTheme } from '@/library/js/themeTools.js'
import CustomFooter from '@/components/CustomFooter.vue'

const formData = {
  fullName: ref(''),
  userName: ref(''),
  password: {
    pass1: ref(''),
    pass2: ref('')
  },
  backupEmail: ref(''),
  discordId: ref('')
}

const isValidDisplayName = (value) =>
  new RegExp("^(?:[A-Za-z0-9]{1,30}[ ,.'-]{0,3})+$", 'gmi').test(value)
    ? VALIDATOR_STATE.VALID
    : VALIDATOR_STATE.INVALID
const isValidUserName = (value) =>
  new RegExp('^[A-Za-z0-9]+$', 'gmi').test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID
const isEmail = (value) =>
  new RegExp('^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[._-][A-Za-z]{2,})+$', 'gmi').test(
    value
  )
    ? VALIDATOR_STATE.VALID
    : VALIDATOR_STATE.INVALID
const isPwdValid = (value) => {
  formData.password.pass2.value = ''
  return new RegExp('^.{3,}$', 'gmi').test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID
}
const isSamePwd = (value) =>
  value === '' ? VALIDATOR_STATE.NONE : value === formData.password.pass1.value ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID
</script>

<template>
  <div class="Form">
    <img src="https://blahaj.land/static/images/Logo.png" />
    <CustomGap gap="32px" />
    <h1>Sign up</h1>
    <p>awa uwu ewe</p>
    <CustomGap gap="16px" />
    <BlahajInput
      :input="formData.fullName"
      placeholder="Display name"
      extra-text="mandatory"
      datatype="name"
      :validator="isValidDisplayName"
    />
    <BlahajInput
      :input="formData.userName"
      placeholder="User name"
      extra-text="mandatory"
      datatype="username"
      :validator="isValidUserName"
    />
    <BlahajInput
      :input="formData.backupEmail"
      placeholder="E-mail address"
      extra-text="mandatory"
      datatype="email"
      :validator="isEmail"
    />
    <BlahajPassword
      :input="formData.password.pass1"
      placeholder="Password"
      :validator="isPwdValid"
    />
    <BlahajPassword
      :input="formData.password.pass2"
      placeholder="Retype your password"
      :validator="isSamePwd"
    />
    <BlahajInput :input="formData.discordId" placeholder="Discord ID" />
    <CustomGap gap="16px" />
    <BlahajButton
      style="align-self: center; padding: 20px 40px"
      color="var(--surface1)"
      hover="var(--surface2)"
    >
      <p>Sign up</p>
    </BlahajButton>
    <CustomGap gap="24px" />
    <CustomFooter>
      <p>&copy; <a href="https://blog.blahaj.land">eryn</a> Some rights reserved</p>
      <p>Made by <a href="https://github.com/blahajland">Blahaj Team</a></p>
    </CustomFooter>
  </div>
  <div class="Background">
    <BlahajButton>
      <img src="https://blahaj.land/static/images/icons/donate.png" alt="Donate" />
      <p>Donate</p>
    </BlahajButton>
    <BlahajButton @click="switchTheme()">
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
  padding: 64px 32px 0
  width: 500px
  background: var(--background)
  overflow: auto

  > img
    width: 256px
    align-self: center
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
</style>
