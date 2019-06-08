import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ExpenseComponent } from './pages/expense/expense.component';

const routes: Routes = [
  {path:'expenses', component:ExpensesComponent},
  {path:'expense/:id', component:ExpenseComponent},
  {path:'**', pathMatch:'full', redirectTo:'expenses'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
