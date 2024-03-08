import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemostartComponent } from './demostart/demostart.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'', component: DemostartComponent},
  {path:'demo', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
