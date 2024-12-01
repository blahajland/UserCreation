import { defineStore } from "pinia";
import { ref } from "vue";

export const useErrorMessage = defineStore("message", () => {
  const isDisplayedRef = ref<boolean>(false);

  const errorTitleRef = ref<string>("");

  const errorMessageRef = ref<string>("");

  const isDisplayed = computed(() => isDisplayedRef.value);

  const errorTitle = computed(() => errorTitleRef.value);

  const errorMessage = computed(() => errorMessageRef.value);

  const setErrorMessage = (title: string, message: string) => {
    isDisplayedRef.value = true;
    errorTitleRef.value = title;
    errorMessageRef.value = message;
  };

  const hide = () => {
    isDisplayedRef.value = false;
    errorTitleRef.value = "";
    errorMessageRef.value = "";
  };

  return {
    isDisplayed,
    errorTitle,
    errorMessage,
    setErrorMessage,
    hide,
  };
});
