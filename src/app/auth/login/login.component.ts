import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario : FormGroup;

  constructor(){
    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }
}
