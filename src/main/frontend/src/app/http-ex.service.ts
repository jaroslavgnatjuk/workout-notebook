import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { SpinnerService } from './spinner.service';

@Injectable()
export class HttpExService {

  constructor(private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private spinnerService: SpinnerService
  ) {

  }


  get(url: string, options?: RequestOptionsArgs, noSpinner?: boolean): Observable<Response> {
    let spinnerFl = !noSpinner;

    if (spinnerFl) {
      this.spinnerService.addSpinner();
    }

    return this.http.get(url, options)
      .finally(() => { if (spinnerFl) { this.spinnerService.removeSpinner(); } });
  }

  post(url: string, body: any, options?: RequestOptionsArgs, noSpinner?: boolean): Observable<Response> {
    let spinnerFl = !noSpinner;

    if (spinnerFl) {
      this.spinnerService.addSpinner();
    }

    return this.http.post(url, body, options)
      .finally(() => { if (spinnerFl) { this.spinnerService.removeSpinner(); } });
  }

  put(url: string, body: any, options?: RequestOptionsArgs, noSpinner?: boolean): Observable<Response> {
    let spinnerFl = !noSpinner;

    if (spinnerFl) {
      this.spinnerService.addSpinner();
    }

    return this.http.put(url, body, options)
      .finally(() => { if (spinnerFl) { this.spinnerService.removeSpinner(); } });
  }

  delete(url: string, options?: RequestOptionsArgs, noSpinner?: boolean): Observable<Response> {
    let spinnerFl = !noSpinner;

    if (spinnerFl) {
      this.spinnerService.addSpinner();
    }

    return this.http.delete(url, options)
      .finally(() => { if (spinnerFl) { this.spinnerService.removeSpinner(); } });
  }
}
