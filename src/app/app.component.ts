import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BrandSliderComponent } from "./brand-slider/brand-slider.component";
import { RouterOutlet } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { Portfolio2Component } from './portfolio-2/portfolio-2.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    ServicesComponent,
    WorkProcessComponent,
    RouterOutlet, 
    PortfolioComponent, 
    BrandSliderComponent,
    TestimonialsComponent,
    Portfolio2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
