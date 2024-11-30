<script setup lang="ts">
import { ref } from "vue";
import { $get } from "~/services/assets/assets.service";
import { ValidatorState } from "~/services/validation/validation.common";

defineEmits(["inputUpdated"]);

const props = defineProps({
  input: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Value",
  },
  extraText: {
    type: String,
    default: "",
  },
  datatype: {
    type: String,
    default: "off",
  },
  state: {
    type: Number,
    default: ValidatorState.NONE,
  },
  icon: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    validator: (value: string) => ["text", "password"].includes(value),
    default: "text",
  },
});

const isPwdVisible = ref(props.type !== "password");

const getEventValue = (event: Event): string =>
  event.target ? (event.target as HTMLInputElement).value : "";
</script>

<template>
  <div
    :class="{ valid: state === 1, invalid: state === 2 }"
    class="BlahajInput"
  >
    <NuxtImg v-if="icon !== ''" :src="icon" alt="Input" />
    <input
      :type="isPwdVisible ? 'text' : 'password'"
      :value="input"
      :autocomplete="datatype"
      :placeholder="`${placeholder} ${extraText !== '' ? `&bull; ${extraText}` : ''}`"
      @input="$emit('inputUpdated', getEventValue($event))"
    >
    <NuxtImg
      v-if="state === ValidatorState.INVALID"
      alt="Invalid"
      :src="$get('/icons/invalid.svg')"
    />
    <NuxtImg
      v-if="state === ValidatorState.VALID"
      alt="Valid"
      :src="$get('/icons/valid.svg')"
    />
    <a v-if="type === 'password' && isPwdVisible" @click="isPwdVisible = false">
      <NuxtImg alt="Show" :src="$get('/icons/show.svg')" />
    </a>
    <a v-if="type === 'password' && !isPwdVisible" @click="isPwdVisible = true">
      <NuxtImg alt="Hide" :src="$get('/icons/hide.svg')" />
    </a>
  </div>
</template>

<style lang="sass">
.BlahajInput
  background: var(--surface1)
  padding: 0 16px
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: center
  border-radius: var(--radius-small)
  transition: var(--trans)
  gap: 16px
  min-width: 0

  > a
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    > img
      height: 20px
      filter: var(--filter)

  > img
    height: 16px
    filter: var(--filter)

  > input
    padding: 16px 0
    background: none
    border: none
    flex-grow: 1
    height: 100%
    outline: none !important
    width: 200px
    color: var(--text)
    min-width: 0

    &::placeholder
      color: var(--text)
      opacity: 0.75

  &:hover
    background: color-mix(in srgb, var(--surface1), var(--surface2))

  &:active
    background: var(--surface2)

  &.valid
    background: color-mix(in srgb, var(--surface1) 75%, #00FF00 25%)

  &.invalid
    background: color-mix(in srgb, var(--surface1) 75%, #FF0000 25%)
</style>
