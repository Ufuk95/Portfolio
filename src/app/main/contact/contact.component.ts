import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../language.service';
import { RouterLink } from '@angular/router';
import { VisibleOnScrollDirective } from '../../visible-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, VisibleOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  buttonText: string = 'Send message :)';
  mailTest = true;
  http = inject(HttpClient);
  translation = inject(LanguageService);
  showNotification: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  isChecked = false;
  checkboxTouched = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.checkboxTouched = true;

  }

  post = {
    endPoint: 'https://ufuk-oezsahin.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.checkboxTouched = true;

    console.log('Form submitted');

    if (ngForm.form.valid && this.isChecked && this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            ngForm.resetForm();
            this.isChecked = false;
            this.checkboxTouched = false;
          },
          error: (error) => {
            console.error('Error:', error);
          },
          complete: () => console.info('Send post complete'),
        });
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    } else if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      ngForm.resetForm();
      this.isChecked = false;
      this.checkboxTouched = false;
    }


  }

  constructor(private translationService: LanguageService) {}

  ngOnInit() {
    const currentLanguage = this.translationService.getLanguage();
    this.translationService.translatePage(currentLanguage);
  }
}

