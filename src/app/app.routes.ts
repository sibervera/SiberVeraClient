import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../feature/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'hizmetler',
    loadComponent: () =>
      import('../feature/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'hakkimizda',
    loadComponent: () =>
      import('../feature/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'danismanlik',
    loadComponent: () =>
      import('../feature/consulting/consulting.component').then(m => m.ConsultingComponent),
  },
  {
    path: 'iletisim',
    loadComponent: () =>
      import('../feature/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
