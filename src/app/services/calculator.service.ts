import { Injectable } from '@angular/core';
import { CalculatorTableInterface } from '../interfaces/calculator-table-interface';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  data: CalculatorTableInterface[] = [];
  savedData : CalculatorTableInterface[] = []
  
  constructor() {
    this.loadData();
   }

  loadData() {
    // Örnek: Verileri elle ekleme
    this.data = [
      {
        index: 0,
        column1: { status: "column1", value: '' }, column2: { status: "column2", value: '' }, rowSum: 0, rowMultiply: 0,
        rowDivide: 0, rowMean: 0, rowVariance: 0
      },
      {
        index: 1,
        column1: { status: "column1", value: '' }, column2: { status: "column2", value: '' }, rowSum: 0, rowMultiply: 0,
        rowDivide: 0, rowMean: 0, rowVariance: 0
      },

    ];
  }

  save(form: FormGroup, data: CalculatorTableInterface[]) {
    // Tablodan gelen verileri kaydeder
    if(form.valid){
     this.savedData.push(...data)
    }else{
      console.log("Geçersiz form");
    }
    
  }
}
