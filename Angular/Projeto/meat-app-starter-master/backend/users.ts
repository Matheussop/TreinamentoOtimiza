export class User {
    constructor(public email: string,
        public name: string,
         private password: string){}

    matches(another: User):boolean{
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]:User} = {
    "gabriela@gmail.com": new User("gabriela@gmail.com",'Gabriela','123456'),
    "matheus@gmail.com": new User("matheus@gmail.com",'Matheus','123456')
}