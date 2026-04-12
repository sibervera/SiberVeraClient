// Bu dosyayı kopyalayıp environment.ts ve environment.prod.ts olarak oluşturun.
// Gerçek değerleri EmailJS dashboard'undan alın.
export const environment = {
  production: false,
  emailjs: {
    publicKey: 'YOUR_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
  },
};
