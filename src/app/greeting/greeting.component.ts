import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  name: string = '';
  greeting: string = '';

  updateGreeting(): void {
    this.greeting = `Hello, ${this.name || 'Guest'}!`;
  }

  ngOnInit() {
    this.updateGreeting();
  }
}
