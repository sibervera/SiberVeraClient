import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../shared/services/contact.service';

type FormState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  state = signal<FormState>('idle');

  form = this.fb.nonNullable.group({
    name:     ['', [Validators.required, Validators.minLength(2)]],
    business: ['', Validators.required],
    email:    ['', [Validators.required, Validators.email]],
    message:  ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {}

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('loading');

    try {
      await this.contactService.send(this.form.getRawValue());
      this.state.set('success');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  retry(): void {
    this.state.set('idle');
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl.touched);
  }
}
