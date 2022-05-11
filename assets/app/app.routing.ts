import { Routes, RouterModule} from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routers";
import { MessagesComponent } from "./messages/messages.component";
import { MessageInputComponent } from "./messages/message-input.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessagesComponent},
    {path: "autenticacao", component: AuthenticationComponent, children: AUTH_ROUTES},
    {path: "edit/:messageId", component: MessageInputComponent}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);