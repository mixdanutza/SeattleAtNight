import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"

import "rxjs"
import 'rxjs/add/operator/map'

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class MainService {

  constructor(private http: Http) { }



}
