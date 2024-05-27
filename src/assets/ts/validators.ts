import { VALIDATOR_STATE } from '@/library/ts/common-types'
import { displayNameRegEx, emailRegEx, userNameRegEx } from '@/assets/ts/regex'

export const noValidator = () => VALIDATOR_STATE.NONE

export const validatorFactory =
  (regex: RegExp) =>
  (value: string): VALIDATOR_STATE =>
    regex.test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID

export const isValidDisplayName = validatorFactory(displayNameRegEx)

export const isValidUserName = validatorFactory(userNameRegEx)

export const isValidEmail = validatorFactory(emailRegEx)
