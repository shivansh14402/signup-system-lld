



interface userDataPayload {
    name: string;
    email: string;
}

export class User {
    name: string;
    email: string;

    constructor(userData : userDataPayload) {

        this.name = userData.name;
        this.email = userData.email;
    }
}
