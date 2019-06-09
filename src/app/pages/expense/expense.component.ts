import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '../../models/expense.model';
import { NgForm } from '@angular/forms';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {


  expense = new ExpenseModel();

  constructor(private expensesServices: ExpensesService) { }

  ngOnInit() {
  }

  guardar( form : NgForm ) {
    
    if(form.invalid){
      console.log("Validacion de formulario");
      return;
    }

    this.expensesServices.createExpense(this.expense)
        .subscribe(resp =>{
          console.log(resp);
        });

  }


}
