import { CommonModule } from '@angular/common';
import {
  Component,         
  AfterViewInit,     
  ElementRef,         
  ViewChild,          
  Renderer2,          
  HostListener       
} from '@angular/core';

export type Face = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';
export type FaceAngles = Record<Face, { x: number; y: number }>;

@Component({
  selector: 'app-services',              
  imports: [CommonModule],               
  templateUrl: './services.component.html', 
  styleUrls: ['./services.component.css'],  
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('cube') cubeRef!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('lastServiceSection') lastSectionRef!: ElementRef;


  // Map of each cube face to its corresponding rotation angles
  private readonly faceAngles: FaceAngles = {
    front: { x: 0, y: 0 },
    right: { x: 0, y: -90 },
    back: { x: 0, y: -180 },
    left: { x: 0, y: 90 },
    top: { x: 90, y: 0 },
    bottom: { x: -90, y: 0 }
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver(); // Begin observing section visibility
  }

  showCube = false;

  // Listen to scroll events on the window
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.servicesSection || !this.lastSectionRef) return;
  
    const sectionRect = this.servicesSection.nativeElement.getBoundingClientRect();
    const lastSectionRect = this.lastSectionRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // ✅ 1. Affichage du cube dans les limites de la section principale
    const triggerPoint = windowHeight * 0.2;
    const isInView = sectionRect.top <= triggerPoint && sectionRect.bottom >= 0;
    this.showCube = isInView;
  
    // ✅ 2. Quand la dernière section entre dans le viewport (à 60%)
    const lastVisible = lastSectionRect.top <= windowHeight * 0.6;
  
    // ✅ 3. Changement de position du cube : fixed → absolute
    const cube = this.cubeRef.nativeElement.parentElement;
    if (lastVisible) {
      this.renderer.setStyle(cube, 'position', 'absolute');
      this.renderer.setStyle(cube, 'top', `${lastSectionRect.top + window.scrollY}px`);
    } else {
      this.renderer.setStyle(cube, 'position', 'fixed');
      this.renderer.setStyle(cube, 'top', '55%');
    }
  
    // ✅ 4. Effets de scroll sur les contenus
    const sections = document.querySelectorAll<HTMLElement>('.service .content');
    sections.forEach((el) => {
      const elRect = el.getBoundingClientRect();
      const scrollFactor = (elRect.top - windowHeight / 2) / (windowHeight / 2);
      const translateY = scrollFactor * 40;
      const scale = 1 - Math.abs(scrollFactor) * 0.1;
      const opacity = 1 - Math.abs(scrollFactor) * 0.5;
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
      el.style.opacity = `${opacity}`;
    });
  }
  
  // Observe each section and rotate the cube based on which one is fully visible
  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const face = (entry.target as HTMLElement).dataset['face'] as Face;
            if (face) this.rotateCube(face);
          }
        }
      },
      { threshold: 1 }
    );
    
    // Observe all service sections
    document.querySelectorAll<HTMLElement>('.service').forEach((section) => {
      observer.observe(section);
    });
  }

  // Apply rotation transform to the cube element to face the corresponding side
  private rotateCube(face: Face): void {
    const angle = this.faceAngles[face];
    if (this.cubeRef?.nativeElement) {
      // Build the rotation style
      const transform = `rotateX(${angle.x}deg) rotateY(${angle.y}deg)`;
      // Apply it via Renderer2
      this.renderer.setStyle(this.cubeRef.nativeElement, 'transform', transform);
    }
  }
}
