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
  }
})

const currentState = ref(VALIDATOR_STATE.NONE)
const isFocused = ref(false)

const validateAndSubmitString = (value: string) => {
  currentState.value = value === '' ? VALIDATOR_STATE.NONE : props.validator(value)
  emits('inputUpdated', value)
}
</script>

<template>
  <div
    class="BlahajInput"
    :class="{ valid: currentState === 1, invalid: currentState === 2, focused: isFocused }"
  >
    <div>
      <p>{{ placeholder }} {{ extraText !== '' ? `&bull; ${extraText}` : '' }}</p>
      <input
        type="text"
        :value="input"
        :autocomplete="datatype"
        @input="validateAndSubmitString(getEventValue($event))"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
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
  </div>
</template>

<style>
.BlahajInput {
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

.BlahajInput * {
  margin: 0;
}

.BlahajInput > img {
  height: 20px;
  width: 20px;
  filter: var(--filter);
}

.BlahajInput:hover {
  background: color-mix(in srgb, var(--surface1), var(--surface2));
}

.BlahajInput:active {
  background: var(--surface2);
}

.BlahajInput.valid {
  background: color-mix(in srgb, var(--surface1), green 20%);
}

.BlahajInput.invalid {
  background: color-mix(in srgb, var(--surface1), red 20%);
}

.BlahajInput.focused {
  outline-color: var(--surface2);
}

.BlahajInput > div {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: 4px;
  flex-grow: 1;
  padding: 4px;
}

.BlahajInput > div > p {
  font-size: 10px;
  opacity: 0.66;
}

.BlahajInput > div > input {
  border-radius: var(--radius-small);
  color: var(--text);
  padding: 8px 0;
  flex-grow: 1;
  background: none;
  border: none;
  outline: none;
}
</style>
