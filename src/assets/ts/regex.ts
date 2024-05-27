export const displayNameRegEx = new RegExp("^(?:[A-Za-z0-9]{1,30}[ ,.'-]{0,3})+$")

export const userNameRegEx = new RegExp('^[A-Za-z0-9]+$')

export const emailRegEx = new RegExp(
  '^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[._-][A-Za-z]{2,})+$'
)

export const pwdRegEx = new RegExp('^.{3,}$')
