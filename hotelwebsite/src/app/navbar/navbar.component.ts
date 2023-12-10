import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild('menu') menu: ElementRef | undefined;

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      if (this.menu) {
        (this.menu.nativeElement as HTMLElement).classList.remove('is-active'); // Remove the 'is-active' class to close the menu
      }
    });
  }

  toggleMenu() {
    if (this.menu) {
      (this.menu.nativeElement as HTMLElement).classList.toggle('is-active'); // Toggle the 'is-active' class
    }
  }



  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('header') as HTMLElement;

    if (header) {
      header.classList.toggle('down', window.scrollY > 0);
    }
  }

}
