export class Message {

    constructor(
        public content: string,
        public username: string,
        public userId?: string,
        public messageId?: string
    ) {}
}