import { CURDService } from './CURD.service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ResultOfMonth, ResultOfMonthRequest } from '../_model/result-of-month';
import { UtilitiesService } from './utilities.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OperationResult } from '../_model/operation.result';
import { EnvService } from './env.service';
@Injectable({
  providedIn: 'root'
})
export class ResultOfMonthService extends CURDService<ResultOfMonth> {

  constructor(http: HttpClient,utilitiesService: UtilitiesService, env: EnvService)
  {
    super(http,"ResultOfMonth", utilitiesService, env);
  }
  getAllByMonth(objectiveId, currentTime): Observable<ResultOfMonth[]> {
    return this.http
      .get<ResultOfMonth[]>(`${this.env.apiUrl}${this.entity}/GetAllByMonth?objectiveId=${objectiveId}&currentTime=${currentTime}`, {})
      .pipe(catchError(this.handleError));
  }
  updateResultOfMonth(model: ResultOfMonthRequest): Observable<OperationResult> {
    return this.http
      .put<OperationResult>(`${this.env.apiUrl}${this.entity}/UpdateResultOfMonth`, model)
      .pipe(catchError(this.handleError));
  }
}
