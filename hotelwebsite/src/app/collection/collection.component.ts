import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

  currentIndex = 0; // Current slide index
  imageUrls: any[] = [
    "/assets/Images/slider-corfu-greece.jpeg" ,
    "/assets/Images/slider-CourchevelBelvedere-France.jpg",
    "/assets/Images/slider-cransmontana-suiza.jpg",
    "/assets/Images/slider-grandvilla-suiza.jpg",
  ];

  plusSlides(n: number) {
    this.showSlides(this.currentIndex + n);
  }
  currentSlide(n: number) {
    this.showSlides(this.currentIndex = n);
  }

  showSlides(n: number) {
    if (n >= this.imageUrls.length) {
      this.currentIndex = 0; }
    else if (n < 0) { this.currentIndex = this.imageUrls.length - 1; }
    else { this.currentIndex = n; }
  }

}
