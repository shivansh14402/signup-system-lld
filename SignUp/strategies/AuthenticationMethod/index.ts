import { userDataPayload } from "../SignupMethod";


export class Authentication {

    createToken(userData: { name: string, email: string}): string{
        // method to create token using JWT
        return userData.name + (Math.round(Math.random() * 1000) + "") + userData.email
    }

    verifyToken(): boolean{
        // method to verify token using JWT
        return true;
    }
}