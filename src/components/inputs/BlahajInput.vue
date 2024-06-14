<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { assets, getEventValue, type Validator, VALIDATOR_STATE } from 'blahaj-library'

const emits = defineEmits(['inputUpdated'])

const props = defineProps({
  input: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Value'
  },
  extraText: {
    type: String,
    default: ''
  },
  datatype: {
    type: String,
    default: 'off'
  },
  validator: {
    type: Function as PropType<Validator>,
    default: () => VALIDATOR_STATE.NONE
  },
  icon: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    validator: (value: any) => ['text', 'password'].includes(value),
    default: 'text'
  }
})

const currentState = ref(VALIDATOR_STATE.NONE)
const isShown = ref(props.type !== 'password')

const validateAndSubmitString = (value: string) => {
  currentState.value = value === '' ? VALIDATOR_STATE.NONE : props.validator(value)
  emits('inputUpdated', value)
}
</script>

<template>
  <div :class="{ valid: currentState === 1, invalid: currentState === 2 }" class="BlahajInput">
    <img v-if="icon !== ''" :src="icon" alt="Input" />
    <input
      :type="type"
      :value="input"
      :autocomplete="datatype"
      :placeholder="`${placeholder} ${extraText !== '' ? `&bull; ${extraText}` : ''}`"
      @input="validateAndSubmitString(getEventValue($event))"
    />
    <img
      v-if="currentState === VALIDATOR_STATE.INVALID"
      alt="Invalid"
      :src="assets.images.icons.get('input_invalid-state')"
    />
    <img
      v-if="currentState === VALIDATOR_STATE.VALID"
      alt="Valid"
      :src="assets.images.icons.get('input_valid-state')"
    />
    <a v-if="type === 'password' && isShown" @click="isShown = false">
      <img alt="Show" :src="assets.images.icons.get('input_show-pwd')" />
    </a>
    <a @click="isShown = true" v-if="type === 'password' && !isShown">
      <img alt="Hide" :src="assets.images.icons.get('input_hide-pwd')" />
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
