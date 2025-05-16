import { Component, HostListener, AfterViewInit, ElementRef, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
// implements AfterViewInit {
//   @ViewChildren('.card-3d div') cardDivs!: QueryList<ElementRef>;
//   private initialTransforms: { translateX: number; translateZ: number; rotateY: number; }[] = [];
//   private scrollSensitivity = 0.2; // Adjust for rotation sensitivity
//   private totalScrollHeight = 2 * (typeof window !== 'undefined' ? window.innerHeight : 768);
//   private totalSlides = 2; // Number of times the carousel should slide
//   private slideDistance: number = 400; // Manual adjustment: Approximate distance for one slide

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
//   ngAfterViewInit(): void {
//     this.cardDivs.forEach((cardRef, index) => {
//       const style = window.getComputedStyle(cardRef.nativeElement);
//       const transformValue = style.getPropertyValue('transform');

//       const translateXMatch = transformValue.match(/translateX\(([-\d.]+)\)/);
//       const initialTranslateX = translateXMatch && translateXMatch[1] ? parseFloat(translateXMatch[1]) : 0;

//       const translateZMatch = transformValue.match(/translateZ\(([-\d.]+)\)/);
//       const initialTranslateZ = translateZMatch && translateZMatch[1] ? parseFloat(translateZMatch[1]) : 0;

//       const rotateYMatch = transformValue.match(/rotateY\(([-\d.]+)\)/);
//       const initialRotateY = rotateYMatch && rotateYMatch[1] ? parseFloat(rotateYMatch[1]) : 0;

//       this.initialTransforms.push({ translateX: initialTranslateX, translateZ: initialTranslateZ, rotateY: initialRotateY });
//     });
//     console.log('Initial Transforms:', this.initialTransforms); // Debugging
//     console.log('Total Scroll Height:', this.totalScrollHeight); // Debugging
//     console.log('Slide Distance:', this.slideDistance); // Debugging
//   }

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(event: Event | null): void {
//     if (isPlatformBrowser(this.platformId)) {
//       const scrollY = window.scrollY;
//       const scrollSpeed = 0.5; // Adjust for faster/slower movement

//       this.cardDivs.forEach((cardRef, index) => {
//         const card = cardRef.nativeElement as HTMLElement;
//         const newTranslateX = scrollY * scrollSpeed * (index - 3); // Simple slide based on scroll

//         card.style.transform = `translateX(${newTranslateX.toFixed(2)}px) translateZ(${this.initialTransforms[index]?.translateZ || 0}px) rotateY(${this.initialTransforms[index]?.rotateY || 0}deg) scale(1)`;
//       });
//     }
//   }
}