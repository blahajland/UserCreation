import { defineStore } from "pinia";
import { ref } from "vue";
import { validationService } from "~/services/validation/validation.service";
import type {BridgeData, BridgeStates} from "~/services/bridge/bridge.common";

export const useForm = defineStore("form", () => {
  const passedRef = ref<boolean>(false)

  const formDataRef = ref({
    userName: "",
    displayName: "",
    backupEmail: "",
    discordId: "",
  });

  const hasPassed = computed(() => passedRef.value)

  const userName = computed(() => formDataRef.value.userName);

  const displayName = computed(() => formDataRef.value.displayName);

  const email = computed(() => formDataRef.value.backupEmail);

  const discordId = computed(() => formDataRef.value.discordId);

  const userNameState = computed(() =>
    validationService.isValidUsername(formDataRef.value.userName),
  );

  const displayNameState = computed(() =>
    validationService.isValidDisplayName(formDataRef.value.displayName),
  );

  const emailState = computed(() =>
    validationService.isValidEmail(formDataRef.value.backupEmail),
  );

  const discordIdState = computed(() =>
    validationService.isValidDiscordID(formDataRef.value.discordId),
  );

  const setUserName = (value: string) => (formDataRef.value.userName = value);

  const setDisplayName = (value: string) =>
    (formDataRef.value.displayName = value);

  const setEmail = (value: string) => (formDataRef.value.backupEmail = value);

  const setDiscordId = (value: string) => (formDataRef.value.discordId = value);

  const getForm = () : BridgeData => {
    return {
      username: formDataRef.value.displayName,
      display_name: formDataRef.value.displayName,
      recovery_email: formDataRef.value.backupEmail,
      discord_username: formDataRef.value.discordId
    }
  }

  const getStates = () : BridgeStates => {
    return {
      username: displayNameState.value,
      display_name: displayNameState.value,
      recovery_email: emailState.value,
      discord_username: discordIdState.value
    }
  }

  const setPassed = () => passedRef.value = true;

  return {
    userName,
    displayName,
    email,
    discordId,
    userNameState,
    displayNameState,
    emailState,
    discordIdState,
    hasPassed,
    setUserName,
    setDisplayName,
    setEmail,
    setDiscordId,
    getForm,
    getStates,
    setPassed
  };
});
