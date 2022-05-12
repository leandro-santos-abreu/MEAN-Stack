import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html',
    providers: [UserService]
})
export class SignupComponent implements OnInit{
    myForm: FormGroup;
    constructor (private userSService: UserService){ }

    ngOnInit(): void{
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")]),
            passwordTS: new FormControl(null, Validators.required),
            sexoTS: new FormControl(null, Validators.required)
        })
    }

    onSubmit(){
        console.log(this.myForm);
        const user: User = {
            email: this.myForm.get('emailTS').value,
            password: this.myForm.get('passwordTS').value,
            firstName: this.myForm.get('firstNameTS').value,
            lastName: this.myForm.get('lastNameTS').value,
            sexo: this.myForm.get("sexoTS").value,
            logado: false
        }

        this.userSService.addUser(user).subscribe(
        dadosSucesso => {
            alert("Usuário Cadastrado com Sucesso!")
            console.log(dadosSucesso)
        },
        dadosErro => {
            alert("Erro no Processo de Cadastro")
            console.log(dadosErro)

        });
        this.myForm.reset();
    }
}