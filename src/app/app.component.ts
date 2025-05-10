import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TestimonialesComponent } from "./testimoniales/testimoniales.component";
import { ServicesComponent } from "./services/services.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, TestimonialesComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
