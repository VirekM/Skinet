import { CdkStepper } from '@angular/cdk/stepper';
import { Directive, Injectable, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers:[{provide:CdkStepper,useExisting:StepperComponent}]
})

export class StepperComponent extends CdkStepper implements OnInit {
  @Input() linearModeSelected : boolean;


  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  onClick(index:number){
    this.selectedIndex = index;
  }

}
