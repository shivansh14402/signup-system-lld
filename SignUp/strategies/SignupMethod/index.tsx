



// for signup check userPayload
// add user to db
// create auth token

import { Authentication } from "../AuthenticationMethod";
import { Database } from "../../Database";
import { VerifyUserStrategy, VerifyUserStrategyGoogle, VerifyUserStrategyManual, VerifyUserStrategyMeta, VerifyUserStrategyMicrosoft } from "../verifyUserStrategy";
import { VerifyUserStrategyFactory } from '../../factories/SignupFactory';

export interface userData  {
    name: string;
    email: string;
    password: string;
}

export interface userDataGoogle  {
    googleToken: string
}

export interface userDataMicrosoft {
    microsoftToken: string
}

export interface userDataMeta {
    metaToken: string
}

export interface userDataVerified {
    name: string;
    email: string;
    password: string;
}

export type userDataPayload = userData | userDataGoogle | userDataMicrosoft | userDataMeta;

export type VerifyUserMethod = 'manual' | 'google' | 'microsoft' | 'meta';


export class Signup {

    verifyUserStartegy: VerifyUserStrategy;
    authUserStrategy: Authentication;
    signupMethod: VerifyUserMethod;

    constructor(signupMethod: VerifyUserMethod){
        this.signupMethod = signupMethod;
        this.verifyUserStartegy = VerifyUserStrategyFactory.getStrategy(signupMethod);
        this.authUserStrategy = new Authentication();
    }

    SignUpHandler(userData: userDataPayload): string  {
        let data: userDataVerified = this.verifyUserStartegy.verifyUser(userData);

        const dbObj = Database.getDatabase();

        dbObj.executeQuery("ADD user", data);

        let token = this.authUserStrategy.createToken({ name: data.name, email: data.email })

        return token
    }
}
