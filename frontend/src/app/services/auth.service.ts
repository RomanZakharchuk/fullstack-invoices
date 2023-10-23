import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   constructor(
      private http: HttpClient,
   ) { }

   login() {

      const user = this.http.get<any>(`api/posts`);

      return lastValueFrom(user)
         .then(user => {
            console.log(user);
         });
   }
} 