import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

export type Face = 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';
export type FaceAngles = Record<Face, { x: number; y: number }>;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('cube') cubeRef!: ElementRef;

  faceAngles: FaceAngles = {
    front: { x: 0, y: 0 },
    right: { x: 0, y: -90 },
    back: { x: 0, y: -180 },
    left: { x: 0, y: 90 },
    top: { x: 90, y: 0 },
    bottom: { x: -90, y: 0 }
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const face = (entry.target as HTMLElement).dataset['face'] as Face;
            if (face) {
              this.rotateCube(face);
            }
          }
        });
      },
      { threshold: 0.4 } // Trigger when 60% of the element is visible
    );

    // Observing all service sections to trigger the cube rotation
    const sections = document.querySelectorAll('.service');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  private rotateCube(face: Face): void {
    const angle = this.faceAngles[face];
    const cubeElement = this.cubeRef?.nativeElement;
    if (angle && cubeElement) {
      this.renderer.setStyle(cubeElement, 'transform', `rotateX(${angle.x}deg) rotateY(${angle.y}deg)`);
    }
  }
}
