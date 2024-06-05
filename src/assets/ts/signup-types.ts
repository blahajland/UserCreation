import type { Validator } from 'blahaj-library'

export interface SignUpInformation {
  value: string
  isMandatory: boolean
  validator: Validator
}

export interface Password {
  password: SignUpInformation
  repeatedPassword: SignUpInformation
}

export interface SigUpInformations {
  fullName: SignUpInformation
  userName: SignUpInformation
  passwords: Password
  backupEmail: SignUpInformation
  discordId: SignUpInformation
}

export interface ExportedForm {
  fullName: string
  userName: string
  password: string
  backupEmail: string
  discordId?: string
}
