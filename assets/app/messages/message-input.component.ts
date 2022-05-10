import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'/*,
    providers: [MessageService]*/
})
export class MessageInputComponent{
    constructor (private messageService: MessageService){ }

    onSubmit(form: NgForm){
        const messageAux = new Message(form.value.myContentngForm, 'Arthur');
        this.messageService.addMessage(messageAux).subscribe(dadosSucesso => console.log(dadosSucesso),
                                                             dadosErro => console.log(dadosErro));
        console.log(form);
        form.resetForm();
    }

}