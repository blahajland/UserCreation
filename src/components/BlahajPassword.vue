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
  validator: {
    type: Function as PropType<Validator>,
    default: () => VALIDATOR_STATE.NONE
  }
})

const currentState = ref(VALIDATOR_STATE.NONE)
const isShown = ref(false)
const isFocused = ref(false)

const validateAndSubmitString = (value: string) => {
  currentState.value = value === '' ? VALIDATOR_STATE.NONE : props.validator(value)
  emits('inputUpdated', value)
}
</script>

<template>
  <div
    class="BlahajPassword"
    :class="{ valid: currentState === 1, invalid: currentState === 2, focused: isFocused }"
  >
    <div>
      <p>{{ placeholder }}</p>
      <input
        :type="isShown ? 'text' : 'password'"
        :value="input"
        autocomplete="password"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="validateAndSubmitString(getEventValue($event))"
      />
    </div>
    <img
      v-if="currentState === 2"
      alt="Invalid"
      :src="assets.images.icons.get('input_invalid-state')"
    />
    <img
      v-if="currentState === 1"
      alt="Valid"
      :src="assets.images.icons.get('input_valid-state')"
    />
    <img
      v-if="isShown"
      alt="Show"
      :src="assets.images.icons.get('input_show-pwd')"
      @click="isShown = false"
    />
    <img
      v-if="!isShown"
      alt="Hide"
      :src="assets.images.icons.get('input_hide-pwd')"
      @click="isShown = true"
    />
  </div>
</template>

<style>
.BlahajPassword {
  padding: 0 16px 0 8px;
  border-radius: var(--radius-med);
  background: var(--surface1);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  transition: var(--trans);
  outline: transparent solid 2px;
  gap: 12px;
}

.BlahajPassword * {
  margin: 0;
}

.BlahajPassword > img {
  height: 20px;
  width: 20px;
  filter: var(--filter);
}

.BlahajPassword:hover {
  background: color-mix(in srgb, var(--surface1), var(--surface2));
}

.BlahajPassword:active {
  background: var(--surface2);
}

.BlahajPassword.valid {
  background: color-mix(in srgb, var(--surface1), green 20%);
}

.BlahajPassword.invalid {
  background: color-mix(in srgb, var(--surface1), red 20%);
}

.BlahajPassword.focused {
  outline-color: var(--surface2);
}

.BlahajPassword > div {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 4px;
  flex-grow: 1;
  padding: 4px;
}

.BlahajPassword > div > p {
  font-size: 10px;
  opacity: 0.66;
}

.BlahajPassword > div > input {
  border-radius: var(--radius-small);
  color: var(--text);
  padding: 8px 0;
  flex-grow: 1;
  background: none;
  border: none;
  outline: none;
}
</style>
