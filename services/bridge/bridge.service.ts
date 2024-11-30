import {ValidatorState} from "~/services/validation/validation.common";
import type {BridgeData, BridgeErrorData, BridgeStates} from "~/services/bridge/bridge.common";

const BRIDGE_URL = 'https://backhaj.blahaj.land/create_user'

class BridgeService {
    private isInvalid(state: ValidatorState, optional = false) {
        return (optional && state === ValidatorState.INVALID)
            || (state !== ValidatorState.VALID)
    }

    validateDataOrInform(states: BridgeStates): BridgeErrorData | undefined {
        const failsList = []
        if (this.isInvalid(states.username))
            failsList.push('username')
        if (this.isInvalid(states.display_name))
            failsList.push('display name')
        if (this.isInvalid(states.recovery_email))
            failsList.push('e-mail')
        if (this.isInvalid(states.discord_username, true))
            failsList.push('Discord username')
        if (failsList.length !== 0) {
            return {
                title: 'Invalid inputs.',
                message: `The following field(s) have been filled incorrectly : ${failsList.join(', ')}.`
            }
        }
        return undefined
    }

    async sendFormData(form: BridgeData): Promise<BridgeErrorData | undefined> {
        let data: Response
        try {
            data = await fetch(BRIDGE_URL, {
                method: "post",
                body: JSON.stringify(form),
            })
        } catch (err: unknown) {
            return {
                title: 'An error occured.',
                message: (err as Error).message
            }
        }


        if (data.status)
            switch (data.status) {
                case 201:
                    return undefined
                default:
                    return {
                        title: `An error occured (${data.status}).`,
                        message: data.statusText
                    }
            }
        return undefined
    }
}

export const bridgeService = new BridgeService()