export interface User {
    remember: boolean;	
    userName:  string;	
    password: string;
}

export interface LoginResponseService  extends User{
    expiration: string;
    token: string;
}
