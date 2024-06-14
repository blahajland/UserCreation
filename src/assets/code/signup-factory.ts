import type { SigUpInformations } from '@/assets/code/signup-types'
import {
  isValidEmail,
  isValidDisplayName,
  isValidUserName,
  noValidator,
  validatorFactory
} from '@/assets/code/validators'
import { VALIDATOR_STATE } from 'blahaj-library'
import { pwdRegEx } from '@/assets/code/regex'
import { ref } from 'vue'

const formData: SigUpInformations = {
  userName: {
    value: '',
    isMandatory: true,
    validator: isValidUserName
  },
  backupEmail: {
    value: '',
    isMandatory: true,
    validator: isValidEmail
  },
  passwords: {
    password: {
      value: '',
      isMandatory: true,
      validator: noValidator
    },
    repeatedPassword: {
      value: '',
      isMandatory: true,
      validator: noValidator
    }
  },
  discordId: {
    value: '',
    isMandatory: false,
    validator: noValidator
  }
}

export const isValidPwd = (value: string): VALIDATOR_STATE => {
  formData.passwords.repeatedPassword.value = ''
  return validatorFactory(pwdRegEx)(value)
}

formData.passwords.password.validator = isValidPwd

export const isSamePwd = (value: string): VALIDATOR_STATE =>
  value === ''
    ? VALIDATOR_STATE.NONE
    : value === formData.passwords.password.value
      ? VALIDATOR_STATE.VALID
      : VALIDATOR_STATE.INVALID

formData.passwords.repeatedPassword.validator = isSamePwd

export const formDataRef = ref(formData)
