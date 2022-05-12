import { User } from "../auth/user.model";

export class Message {

    constructor(
        public content: string,
        public username: string,
        public messageId?: string,
        public userId?: string

    ) {}
}