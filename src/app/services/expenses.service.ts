import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseModel } from '../models/expense.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExpensesService {

  private url = 'http://vgaduana.back';
  private token = 'GgP4uHNOuMRAlDouOvLNb8XfzExDFBxbo8F4YoOKVsdU01GvXTJxXFgOGotdibQF9XP09PBpoIcDuMMn';
  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.token,
    })
  };
  constructor(private http: HttpClient) { }
  createExpense(expense: ExpenseModel){
    return this.http.post(`${this.url}/api/expenses`, expense, this.httpOptions);
  }

}
