import { userData, userDataGoogle, userDataMeta, userDataMicrosoft, userDataPayload, userDataVerified } from "../SignupMethod";

export interface VerifyUserStrategy {
    verifyUser(userData: userDataPayload): userDataVerified
}

export class VerifyUserStrategyManual {
    verifyUser(userData: userData): userDataVerified {

        let password = userData.password + Math.round(Math.random() * 1000); //password after hashing

        let payload: userDataPayload = {
            ...userData,
            password,
        }

        return payload;
    }
}

export class VerifyUserStrategyGoogle {

        //logic to verify user with google;
    verifyUser(userData: userDataGoogle): userDataVerified {

        let googleToken = userData.googleToken;

        //logic to verify toekn with google
        //if verified logic to get userData
        //now returning with data

        let data = {
            name: "Shivansh",
            email: "shivansh@gmail.com",
            password: googleToken
        }

        return data;
    }
}

export class VerifyUserStrategyMicrosoft {
    verifyUser(userData: userDataMicrosoft): userDataVerified {

        let microsoftToken = userData.microsoftToken;

        //logic to verify toekn with microsoft
        //if verified logic to get userData
        //now returning with data

        let data = {
            name: "Shivansh",
            email: "shivansh@gmail.com",
            password: microsoftToken
        }

        return data;
    }
}

export class VerifyUserStrategyMeta {
    verifyUser(userData: userDataMeta): userDataVerified {

        let metaToken = userData.metaToken;

        //logic to verify token with meta
        //if verified logic to get userData
        //now returning with data

        let data = {
            name: "Shivansh",
            email: "shivansh@gmail.com",
            password: metaToken
        }

        return data;
    }
}