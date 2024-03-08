import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculatorService } from '../services/calculator.service';
import { CalculatorTableInterface } from '../interfaces/calculator-table-interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],

})
export class CalculatorComponent implements OnInit {
  //Calculator başlangıç hesaplama verisi
  data: CalculatorTableInterface[] = [];
  //Calculator kaydedilen hesaplamalar
  savedCalculations: CalculatorTableInterface[] = this.calcService.savedData;
  //Reaktif Form
  calculatorForm!: FormGroup;
  //Menu itemleri
  items: MenuItem[] | undefined;

  constructor(private fb: FormBuilder, private calcService: CalculatorService) {

  }
  ngOnInit(): void {
    //Menü itemleri setter
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: [''] },
      { label: 'Demo', icon: 'pi pi-fw pi-home', routerLink: ['/demo'] }
    ];

    //Yeni bir reaktif form oluşturur
    this.calculatorForm = new FormGroup({
      row0column1: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      row0column2: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      row1column1: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      row1column2: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
    })
    //Calculator başlangıç hesaplama verileri setter
    this.data = this.calcService.data;

  }
  //Calculation Direktifi için handler
  calcHandler(event: any, index: number, column_status: string) {
    //Summing Logic
    if (column_status == "column1" && this.data[index].column2.value == '') {
      this.data[index].rowSum = 0;
      this.data[index].column1.value = event;
      this.data[index].rowSum += event;
    } else if (column_status == "column1" && this.data[index].column2.value != '') {
      this.data[index].column1.value = event;
      this.data[index].rowSum = 0;
      this.data[index].rowSum += event + this.data[index].column2.value;
    }
    else if (column_status == "column2" && this.data[index].column1.value != '') {
      this.data[index].rowSum = 0;
      this.data[index].column2.value = event;
      this.data[index].rowSum += event + this.data[index].column1.value;
    }
    else if (column_status == "column2" && this.data[index].column1.value == '') {
      this.data[index].rowSum = 0;
      this.data[index].column2.value = event;
      this.data[index].rowSum += event;
    }

    //Multiplying, dividing, mean & variance 
    if (typeof (this.data[index].column1.value) == "number" && typeof (this.data[index].column2.value) == "number") {
      const column1Val = this.data[index].column1.value;
      const column2Val = this.data[index].column2.value;

      //Multiplying
      this.data[index].rowMultiply = Number(column1Val) * Number(column2Val);
      //Dividing
      this.data[index].rowDivide = Number(column1Val) / Number(column2Val);
      //Mean
      this.data[index].rowMean = (Number(column1Val) + Number(column2Val)) / 2;
      //Variance
      let mean = 0;
      mean = this.data[index].rowMean;
      this.data[index].rowVariance = ((Number(column1Val) - mean) ** 2 + (Number(column2Val) - mean) ** 2) / 2;
    }

  }

  //Formu Calculator servisi aracılığı ile kaydeder.
  saveForm() {
    if (this.calculatorForm.invalid)
      alert("Formu Doldurunuz");

    this.calcService.save(this.calculatorForm, this.data);
  }

  cardStyle = {
    'inline-size': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'text-align': 'center',
    'margin-block-end': '3rem'

  };


}


