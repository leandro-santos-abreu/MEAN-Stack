export class Message {
    username: string;
    content: string;
    userId?: string;
    messageId?: string;


    constructor(username: string, content: string ,messageId?: string, userId?: string, ){
        this.messageId = messageId;
        this.content = content;
        this.userId = userId;
        username = username;
    }

}