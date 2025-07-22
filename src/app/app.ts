import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bold } from './directives/bold';
import { CommonModule } from '@angular/common';
import { Highlight } from './directives/highlight';
import { LifeCycle } from "./component/life-cycle/life-cycle";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Bold, Highlight, LifeCycle,FormsModule], // ← Highlight EKLENDİ
  standalone: true,
  template: `
  <h1>Angular Lifecycle Hook Playground 🔁</h1>

<button (click)="toggle()">Toggle Component</button>
<input [(ngModel)]="parentValue" placeholder="Change input"/>

<app-life-cycle *ngIf="show" [value]="parentValue" />
  `,
styles: [`
  input {
    margin-left: 1rem;
    padding: 4px;
  }
  button {
    margin-right: 1rem;
  }
`]
})
export class App {
  protected readonly title = signal('directive-playground');
  show = true;
  parentValue = 'Initial value';

  toggle() {
    this.show = !this.show;
  }
}
