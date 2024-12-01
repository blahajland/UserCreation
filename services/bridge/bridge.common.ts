import type { ValidatorState } from "~/services/validation/validation.common";

export interface BridgeData {
  username: string;
  display_name: string;
  recovery_email: string;
  discord_username: string;
}

export interface BridgeStates {
  username: ValidatorState;
  display_name: ValidatorState;
  recovery_email: ValidatorState;
  discord_username: ValidatorState;
}

export interface BridgeErrorData {
  title: string;
  message: string;
}
