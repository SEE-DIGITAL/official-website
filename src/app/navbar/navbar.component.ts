import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showPopover = false;

  constructor(private eRef: ElementRef) {}

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  closePopover() {
    this.showPopover = false;
  }

  // Listen to all document clicks
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (
      this.showPopover &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.closePopover();
    }
  }
}
