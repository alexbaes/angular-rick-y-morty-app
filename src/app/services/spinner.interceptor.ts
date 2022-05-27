import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private SpinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.SpinnerService.show();
    return next.handle(req).pipe(finalize(() => this.SpinnerService.hidde()));
  }
}
