import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {Message} from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http) { }

    addMessage(message: Message){
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
        .map((responseRecebida: Response) => responseRecebida.json())
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
        .map((responseRecebida: Response) => {
            const responseEmJson = responseRecebida.json();
            const messageSResponseRecebida = responseEmJson.objSMessageSRecuperadoS;
            let transformedCastMessagesModelFrontend: Message[] = [];
                for(let msg of messageSResponseRecebida){
                    transformedCastMessagesModelFrontend.push(
                        new Message(msg.content, 'Vinicius', msg._id, null)
                    );
                }
            this.messageSService = transformedCastMessagesModelFrontend;
            return transformedCastMessagesModelFrontend;
        })
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessageById(id: string){
        return{...this.messageSService.find(m =>m.messageId === id)};
    }

    updateMessage(messageId: string, content: string, username: string){
        const message: Message = {content: content, username:username};
        this.http.put("http://localhost:3000/editar/mensagens/"+messageId,message)
        .subscribe(dadosSucesso => {
            alert('Mensagem Atualizada com sucesso, ao retornar para a tela mensagens o novo conteúdo será exibido.');
            console.log(dadosSucesso);

        },
        dadosErro => {
            alert('Ocorreu um problema, tente novamente!');
            console.log(dadosErro);
        }
        );
        
    }

    deleteMessage(message: Message){
        this.http.delete("http://localhost:3000/deletar/mensagens/"+message.messageId)
        .subscribe(dadosSucesso => {
            alert('Mensagem Deletada com sucesso, atualize a pagina para ver o resultado.');
            console.log(dadosSucesso);
        },
        dadosErro => {
            alert("Ops! Algo deu errado! Tente novamente.")
            console.log(dadosErro);
        }
        );
    }
}