import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TechdemoComponent } from './techdemo/techdemo.component';
import { BookdemoComponent } from './bookdemo/bookdemo.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TechdemoComponent,BookdemoComponent, WrongchoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing2';
}
