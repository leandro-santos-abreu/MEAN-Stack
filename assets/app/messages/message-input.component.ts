import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subject } from "rxjs";



@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'/*,
    providers: [MessageService]*/
})
export class MessageInputComponent implements OnInit{
    constructor (private messageService: MessageService, public route: ActivatedRoute){ }
    private isEdit: boolean;
    private messageId: string;
    private message: Message;


    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if(paramMap.has('messageId')){
                this.isEdit = true;
                const messageId = paramMap.get('messageId');
                this.message = this.messageService.getMessageById(messageId);
            }else{
                this.isEdit = false;
                this.messageId = null;
            }
        });
    }

    onSubmit(form: NgForm){
        const messageAux = new Message(form.value.myContentngForm, 'Arthur');
        if(!this.isEdit){
        this.messageService.addMessage(messageAux).subscribe(dadosSucesso => console.log(dadosSucesso),
                                                             dadosErro => console.log(dadosErro));
        }else{
            this.messageService.updateMessage(
                this.message.messageId,
                form.value.myContentngForm,
                this.message.username,
                // Os dados estão indo todos como undefined.
            );
        }
        console.log(form);
        form.resetForm();
    }

    
}