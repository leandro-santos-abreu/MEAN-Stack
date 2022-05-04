import { Component } from '@angular/core'; 
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messageBinding: Message = new Message("Arthur","Teste");
    messageBindingAlias: Message =  new Message("AliasDoUser", "Alias do texto");
}