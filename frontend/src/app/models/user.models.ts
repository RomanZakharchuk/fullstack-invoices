export class User {
    _id: string;
    email: string;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
     }
}