import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import * as AOS from 'aos';
import { NgsRevealDirective } from 'ngx-scrollreveal';
@Component({
  selector: 'app-work-process',
  imports: [CommonModule],
  templateUrl: './work-process.component.html',
  styleUrl: './work-process.component.css'
})
export class WorkProcessComponent implements OnInit {

  steps = [
    { title: 'Étape 1', description: 'Définir vos besoins', delay: 0 , content:'' },
    { title: 'Étape 2', description: 'Construire le plan d’action', delay: 200 },
    { title: 'Étape 3', description: 'Donner vie à votre vision', delay: 400 },
    { title: 'Étape 4', description: 'Célébrer des résultats mesurables', delay: 600 }
  ];

  ngOnInit(): void {
    AOS.init();  // Initialize AOS animations
  }
  openedIndex: number | null = null;

  // Toggle accordion on click
  toggleAccordion(index: number) {
    if (this.openedIndex === index) {
      this.openedIndex = null; // Close if the same card is clicked
    } else {
      this.openedIndex = index; // Open clicked card
    }
  }

  // Get width for each card, increases from smallest to largest
  getCardWidth(index: number): string {
    const minWidth = 60; // Minimum width in percentage
    const maxWidth = 90; // Maximum width in percentage
    const increment = (maxWidth - minWidth) / (this.steps.length - 1);
    const cardWidth = minWidth + (increment * index);
    return `${cardWidth}%`;
  }

}