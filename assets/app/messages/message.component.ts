import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%
    }

    .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
    }
`]
})

export class MessageComponent {
    @Input() messageVarClasse: Message = new Message("","")
    @Input('inputMessage') messageVarClasseAlias: Message = new Message("", "")
    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    constructor(private messageServiceObj: MessageService){}

    // onDelete(messageId:string){
    //     this.messageServiceObj.deleteMessage(messageId);
    // }

    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }

    onEdit(){
        //alert('Táh Funcionando...')
        this.editClicked_MessageMetodoClasse.emit('Texto veio de message (child) para o app (pai)');
        this.editClicked_MessageMetodoClasseAlias.emit('Texto veio de message (child) para o app (pai) - Alias');
    }
}