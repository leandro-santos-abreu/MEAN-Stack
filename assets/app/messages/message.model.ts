export class Message {

    constructor(
        public username: string,
        public content: string,
        public userId?: string,
        public messageId?: string
    ) {}
}