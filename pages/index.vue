<script setup lang="ts">
import SubmitButton from "@/components/inputs/SubmitButton.vue";
import BlahajInput from "@/components/inputs/BlahajInput.vue";
import { ref } from "vue";
import FormContainer from "~/components/containers/FormContainer.vue";
import TitleContainer from "~/components/containers/TitleContainer.vue";
import { getAsset, VALIDATOR_STATE } from "blahaj-library";
import {
  isValidEmail,
  isValidUsername,
  validatorFactory,
} from "assets/code/signup-factory";

const formRef = ref({
  userName: "",
  password: "",
  backupEmail: "",
  discordId: "",
});
const sndPwd = ref("");

const isValidPwd = (value: string) => {
  sndPwd.value = "";
  return validatorFactory(/^.{3,}$/)(value);
};

const isSamePwd = (value: string) => {
  if (value === "") return VALIDATOR_STATE.NONE;
  return value === formRef.value.password
    ? VALIDATOR_STATE.VALID
    : VALIDATOR_STATE.INVALID;
};
</script>

<template>
  <TitleContainer>
    <h2>Create a blahaj.land account</h2>
    <p>Subtitle</p>
    <p>maybe even two lines</p>
  </TitleContainer>
  <FormContainer>
    <BlahajInput
      :input="formRef.userName"
      placeholder="User name"
      datatype="username"
      :validator="isValidUsername"
      :icon="getAsset('/icons/user.svg')"
      @input-updated="(e: string) => (formRef.userName = e)"
    />
    <BlahajInput
      :input="formRef.backupEmail"
      placeholder="E-mail address"
      datatype="email"
      :validator="isValidEmail"
      :icon="getAsset('/icons/mail.svg')"
      @input-updated="(e: string) => (formRef.backupEmail = e)"
    />
    <BlahajInput
      type="password"
      :input="formRef.password"
      placeholder="Password"
      :validator="isValidPwd"
      :icon="getAsset('/icons/password.svg')"
      @input-updated="(e: string) => (formRef.password = e)"
    />
    <BlahajInput
      v-if="formRef.password !== ''"
      type="password"
      :input="sndPwd"
      placeholder="Retype your password"
      :icon="getAsset('/icons/password.svg')"
      :validator="isSamePwd"
      @input-updated="(e: string) => (sndPwd = e)"
    />
    <BlahajInput
      :input="formRef.discordId"
      placeholder="Discord ID"
      extra-text="optional"
      :icon="getAsset('/icons/discord.svg')"
      @input-updated="(e: string) => (formRef.discordId = e)"
    />
  </FormContainer>
  <SubmitButton />
</template>
