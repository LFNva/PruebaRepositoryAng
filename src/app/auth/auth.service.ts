import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpCLient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http:'
   }

  register(formValue: any){
    return firstValueFrom(
      this.httpCLient.post<any>(`${this.baseUrl}/register`,formValue)
    )
  }
}
