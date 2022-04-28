import { Component } from '@angular/core'; 
import { style } from '@angular/core/src/animation/dsl';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messageBinding: Message = new Message("Só para testar", "Arthur");
    messageBindingAlias: Message = new Message("Alias do texto", "AliasDoUser");
}