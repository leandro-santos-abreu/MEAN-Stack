export class User {

    constructor(public email: string,
        public password: string,
        public userId?: string,
        public firstName?: string,
        public lastName?: string,
        public sexo?: string
        ) {}
}