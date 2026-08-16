

import { VerifyUserMethod } from "../strategies/SignupMethod";
import { VerifyUserStrategyGoogle, VerifyUserStrategyManual, VerifyUserStrategyMeta, VerifyUserStrategyMicrosoft } from "../strategies/verifyUserStrategy";
import { VerifyUserStrategy } from '../strategies/verifyUserStrategy/index';


export class VerifyUserStrategyFactory {

    static getStrategy(mode: VerifyUserMethod): VerifyUserStrategy {
        switch (mode) {
            case "manual":
                return new VerifyUserStrategyManual();

            case "google":
                return new VerifyUserStrategyGoogle();

            case "microsoft":
                return new VerifyUserStrategyMicrosoft();

            case "meta":
                return new VerifyUserStrategyMeta();

            default:
                throw new Error(`Unsupported signup mode: ${mode}`);
        }
    }
}