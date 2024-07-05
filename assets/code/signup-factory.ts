import { VALIDATOR_STATE } from "blahaj-library";

export const noValidator = () => VALIDATOR_STATE.NONE;

export const validatorFactory =
  (regex: RegExp) =>
  (value: string): VALIDATOR_STATE =>
    regex.test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID;

export const isValidUsername = (value: string) =>
  validatorFactory(/^[A-Za-z0-9]+$/)(value);

export const isValidEmail = (value: string) =>
  validatorFactory(
    /^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[._-][A-Za-z]{2,})+$/,
  )(value);
