import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactForm {
  name: string;
  business: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor() {
    emailjs.init(environment.emailjs.publicKey);
  }

  send(form: ContactForm): Promise<void> {
    return emailjs
      .send(environment.emailjs.serviceId, environment.emailjs.templateId, {
        from_name: form.name,
        from_business: form.business,
        from_email: form.email,
        message: form.message,
        to_email: 'kadircetin@sibervera.com.tr',
      })
      .then(() => void 0);
  }
}
