<script setup lang="ts">
import BlahajInput from "@/components/inputs/BlahajInput.vue";
import FormContainer from "~/components/containers/FormContainer.vue";
import TitleContainer from "~/components/containers/TitleContainer.vue";
import { $get } from "~/services/assets/assets.service";
import BlahajButton from "~/components/inputs/BlahajButton.vue";
import InputsContainer from "~/components/containers/InputsContainer.vue";
import { bridgeService } from "~/services/bridge/bridge.service";

const $router = useRouter();
const $form = useForm();
const $message = useErrorMessage();

const sendData = async () => {
  $message.hide();
  const validationError = bridgeService.validateDataOrInform($form.getStates());
  if (validationError) {
    $message.setErrorMessage(validationError.title, validationError.message);
    return;
  }
  $form.setPassed();
  const serverError = await bridgeService.sendFormData($form.getForm());
  if (serverError) {
    $message.setErrorMessage(serverError.title, serverError.message);
    return;
  }
  await $router.push("/success");
};
</script>

<template>
  <FormContainer>
    <TitleContainer>
      <h2>Create a blahaj.land account</h2>
      <p>It's free and takes less than 2 minutes :3</p>
    </TitleContainer>
    <CustomMessage v-if="$message.isDisplayed">
      <NuxtImg :src="$get('/icons/invalid.svg')" />
      <h3>{{ $message.errorTitle }}</h3>
      <p>{{ $message.errorMessage }}</p>
    </CustomMessage>
    <InputsContainer>
      <BlahajInput
        :input="$form.userName"
        placeholder="User name"
        datatype="username"
        :disabled="$form.hasPassed"
        :state="$form.userNameState"
        :icon="$get('/icons/user.svg')"
        @input-updated="(e: string) => $form.setUserName(e)"
      />
      <BlahajInput
        :input="$form.displayName"
        placeholder="Display name"
        :disabled="$form.hasPassed"
        datatype="nickname"
        :state="$form.displayNameState"
        :icon="$get('/icons/friend.svg')"
        @input-updated="(e: string) => $form.setDisplayName(e)"
      />
      <BlahajInput
        :input="$form.email"
        placeholder="E-mail address"
        :disabled="$form.hasPassed"
        datatype="email"
        :state="$form.emailState"
        :icon="$get('/icons/mail.svg')"
        @input-updated="(e: string) => $form.setEmail(e)"
      />
      <BlahajInput
        :input="$form.discordId"
        :disabled="$form.hasPassed"
        placeholder="Discord ID"
        extra-text="optional"
        :state="$form.discordIdState"
        :icon="$get('/icons/discord.svg')"
        @input-updated="(e: string) => $form.setDiscordId(e)"
      />
    </InputsContainer>
    <BlahajButton submit @click="sendData()">
      <p>Create an account</p>
    </BlahajButton>
  </FormContainer>
</template>
