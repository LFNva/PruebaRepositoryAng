import { Component } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formulario : FormGroup;

  userService = inject(AuthService);

  constructor(){
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.userService.register(this.formulario.value);
    console.log(response);
  }

}
