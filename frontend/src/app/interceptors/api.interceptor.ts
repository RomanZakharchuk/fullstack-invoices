import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(request.url.startsWith('assets') || request.url.startsWith('mocks')) {
         return next.handle(request);
      }
      
      const url = request.url.includes(environment.apiServer)
         ? request.url
         : `${environment.apiServer}/${request.url}`;

      return next.handle(request.clone({
         withCredentials: true,
         url
      }));
   }
}
