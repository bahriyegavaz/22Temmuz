import { Component,OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  template: `
  <div> class= "box" 
    <h3>Life Cycle Demo</h3>
    <p>Input value: {{ value }}</p>
  </div>`,
   styles:[`
    .box {
      border: 2px dashed #3f51b5;
      padding: 1rem;
      margin-top: 1rem;
      background: #e8eaf6;
    }
  `]
})
export class LifeCycle implements
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{

  @Input () value : string;

  constructor(){
    console.log('[constructor] Component instance created 🚀')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges] Input changes:', changes);
  }

  ngOnInit(): void {
    console.log('[ngOnInit] Component initialized');
  }

  ngDoCheck(): void {
    console.log('[ngDoCheck] Change detection triggered');
  }

  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit] Content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('[ngAfterContentChecked] Content checked');
  }

  ngAfterViewInit(): void {
    console.log('[ngAfterViewInit] View initialized');
  }

  ngAfterViewChecked(): void {
    console.log('[ngAfterViewChecked] View checked');
  }

  ngOnDestroy(): void {
    console.log('[ngOnDestroy] Component destroyed 💥');
  }

}

