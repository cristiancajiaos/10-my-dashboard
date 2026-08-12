import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const newReq = req.clone({
    headers: req.headers.set('x-api-key', environment.apiKey)
  })

  return next(newReq);
};
