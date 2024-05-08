<script setup>
import FormContainer from '@/components/containers/FormContainer.vue'
import { ref } from 'vue'
import BlahajInput from '@/library/vue/BlahajInput.vue'
import BlahajPassword from '@/library/vue/BlahajPassword.vue'
import CustomGap from '@/library/vue/CustomGap.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { VALIDATOR_STATE } from '@/library/js/statusTools.js'

const formData =
  {
    fullName: ref(''),
    userName: ref(''),
    password: {
      pass1: ref(''),
      pass2: ref('')
    },
    backupEmail: ref(''),
    discordId: ref('')
  }

const isEmail = (value) =>
  new RegExp('^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*@[A-Za-z]+(?:[._-][A-Za-z]{2,})+$', 'gmi')
    .test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID
const state = (value) => value === 'awa' ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.NONE

</script>

<template>
  <div class="ViewRules">
    <h1>Sign up</h1>
    <p>awa uwu ewe</p>
    <FormContainer>
      <BlahajInput
        :input="formData.fullName"
        placeholder="Display name"
        :is-mandatory="true"
        datatype="name"
        :validator="state"
      />
      <BlahajInput :input="formData.userName" placeholder="User name" datatype="username" pattern="^a*$" />
      <BlahajInput
        :input="formData.backupEmail"
        placeholder="E-mail address"
        :is-mandatory="true"
        datatype="email"
        :validator="isEmail"
      />
      <BlahajPassword :input="formData.password.pass1" placeholder="Password" />
      <BlahajPassword :input="formData.password.pass2" placeholder="Retype your password" />
      <BlahajInput :input="formData.discordId" placeholder="Discord ID" />
      <CustomGap gap="16px" />
      <BlahajButton style="align-self: center; padding: 20px 40px" color="var(--surface1)" hover="var(--surface2)">
        <p>Sign up</p>
      </BlahajButton>
    </FormContainer>
  </div>
</template>
