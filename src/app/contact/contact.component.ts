import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  buttonText: string = 'Send message :)';
  mailTest = true;
  http = inject(HttpClient);

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
    this.checkboxTouched = true;  // Mark checkbox as touched

    if (ngForm.form.valid && this.isChecked) {
      if (!this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
              this.isChecked = false;
              this.checkboxTouched = false;
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else {
        ngForm.resetForm();
        this.isChecked = false;
        this.checkboxTouched = false;
      }
    }
  }
}
