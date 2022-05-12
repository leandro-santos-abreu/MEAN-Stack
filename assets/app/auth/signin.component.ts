import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin-component.html',
    providers: [UserService]
})
export class SigninComponent implements OnInit{
    myForm: FormGroup;
    constructor (private userSService: UserService){ }

    ngOnInit(){
        this.myForm = new FormGroup({
            emailTS: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")]),
            passwordTS: new FormControl(null, Validators.required)
        })
    }

    onSubmit(){
        console.log(this.myForm);
        const user: User = {
            email: this.myForm.get('emailTS').value,
            password: this.myForm.get('passwordTS').value,
        }

        this.userSService.patchUser(user).subscribe(
        dadosSucesso => {
            alert("Usuário Logado com Sucesso!")
            console.log(dadosSucesso)
            this.myForm.disable();
        },
        dadosErro => {
            alert(dadosErro.myErroTitle)
            this.myForm.reset();
        }); 
    } 

    onLogout(){
        this.myForm.reset()
        this.myForm.enable();

        this.userSService.logoutUser().subscribe(
        dadosSucesso => {
            alert("Usuário Deslogado!")
            console.log(dadosSucesso)
        },
        dadosErro => {
            alert(dadosErro.myErroTitle)
            this.myForm.reset();
        }); 
        
    }
}