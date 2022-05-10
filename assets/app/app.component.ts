import { Component } from '@angular/core'; 
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {
    messageBinding: Message = new Message("Arthur","Teste");
    messageBindingAlias: Message =  new Message("AliasDoUser", "Alias do texto");
}