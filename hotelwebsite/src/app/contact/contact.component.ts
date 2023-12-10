import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {



  formData:any = {
    nombre: '',
    asunto: '',
    email: '',
    mensaje: ''
  };
  errorMessage = '';
  formStatus = '';

  handleSubmit(): void {
    if (this.validation()) {
      const form = new FormData();
      Object.keys(this.formData).forEach(key => {
        form.append(key, this.formData[key]);
      });

      fetch('https://formspree.io/f/xoqbnrqy', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            this.formStatus =
              'Thank you for contacting us; we will respond as soon as possible!';

             this.resetForm();
          } else {
            response.json().then(data => {
              if (data.hasOwnProperty('errors')) {
                this.formStatus = data['errors']
                  .map((error: { [x: string]: any; }) => error['message'])
                  .join(', ');
              } else {
                this.formStatus =
                  'There was an error trying to send your message. Please try again later';
              }
            });
          }
        })
        .catch(() => {
          this.formStatus =
            'There was an error trying to send your message. Please try again later';
        });
    }
  }

  validation(): boolean {
    const { nombre, asunto, email, mensaje } = this.formData;

    if (nombre.length < 5) {
      this.errorMessage = 'Please enter your full name';
      return false;
    }
    if (asunto.length <= 2) {
      this.errorMessage = 'Please enter a longer subject';
      return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }
    if (mensaje.length <= 20) {
      this.errorMessage = 'Please enter more than 20 letters';
      return false;
    }

    this.errorMessage = '';
    return true;
  }


   resetForm(): void {
     this.formData = {
       nombre: '',
       asunto: '',
       email: '',
       mensaje: ''
     };
   }
}


/*
  async handleSubmit(contactForm: NgForm) {
    if (this.validation(contactForm.value)) {
      this.formStatus = 'Processing...';
      try {
        const response = await fetch('https://formspree.io/f/xoqbnrqy', {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            Accept: 'application/json'
          }
        });

        if (response.ok) {
          this.formStatus = 'Thank you for contacting us! We will respond as soon as possible.';
          contactForm.reset();
        } else {
          const data = await response.json();
          if (data.errors) {
            this.formStatus = data.errors.map((error: { message: string }) => error.message).join(', ');
          } else {
            this.formStatus = 'There was an error trying to send your message. Please try again later';
          }
        }
      } catch (error) {
        this.formStatus = 'There was an error trying to send your message. Please try again later';
      }
    }
  }*/



