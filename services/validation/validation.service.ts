import { ValidatorState } from "~/services/validation/validation.common";

class ValidationService {
  private validate(regex: RegExp, value: string) {
    if (value === "") return ValidatorState.NONE;
    return regex.test(value) ? ValidatorState.VALID : ValidatorState.INVALID;
  }

  isValidUsername(username: string) {
    return this.validate(/^[A-Za-z0-9]+$/, username);
  }

  isValidDisplayName(name: string) {
    return this.validate(/^[A-Za-z.-]{3,64}$/, name);
  }

  isValidEmail(email: string) {
    return this.validate(
      /^[A-Za-z0-9]+(?:[_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[._-][A-Za-z]{2,})+$/,
      email,
    );
  }

  isValidDiscordID(discordId: string) {
    if (/discord/.test(discordId) || /^here.*|^everyone.*/.test(discordId))
      return ValidatorState.INVALID;
    return this.validate(/^.[^@#:]{2,32}$/s, discordId);
  }
}

export const validationService = new ValidationService();
