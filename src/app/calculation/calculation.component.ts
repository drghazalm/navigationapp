import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculation',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {
  input1: number;
  input2: number;
  input3: number;
  input4: number;
  outputA: number; 
  outputB: number; 

  constructor(){
    this.input1 = 0;
    this.input2 = 0;
    this.input3 = 0;
    this.input4 = 0;
    this.outputA = 0; 
    this.outputB = 0; 
    this.calc_auto(); 
  }

  calc_auto(){
    this.outputA = +this.input1 + +this.input2;
  }
  calc_event(){
    this.outputB = this.input3 * this.input4;
  }
  getClassFromValue(){
    let cssClass = this.outputB <= 50 ? "normal":"danger";
    return cssClass;
  }
}
