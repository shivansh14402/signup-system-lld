

interface loginPayload {
    username: string;
    password: string;
    mode: 'google' | 'microsoft' | 'meta' | 'credentials'
}

const signupHandler = ({ username, password, mode }: loginPayload): void => {

    if(mode == 'credentials'){
        //some logic to add user from email and password
    }
    else if(mode == 'microsoft') {
        //some logic to add user from microsoft oAuth
    }
    else if(mode == 'meta') {
        //some logic to add user from meta oAuth
    }
    else if(mode == 'google') {
        //some logic to add user from google oAuth
    }
}