/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../apps/front/src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, @Inject(PLATFORM_ID) private platformId: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('@test-luizalabs-api')) {
      req = req.clone({
        url: req.url.replace('@test-luizalabs-api', environment.urlApi),
      });
    }

    req = req.clone({
      setHeaders: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return next.handle(req);
  }
}
