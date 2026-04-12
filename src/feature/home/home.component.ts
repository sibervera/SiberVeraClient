import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  current = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  slides: Slide[] = [
    {
      image: 'assets/slader_menu_assets/urbanorigami-ai-generated-9127211_1920.jpg',
      eyebrow: 'Güvenilir Siber Güvenlik Ortağınız',
      title: 'Verinizi korur,',
      highlight: 'işinizi güçlendirir.',
      desc: 'Kurumların bilgi güvenliğini sürdürülebilir, ölçülebilir ve mevzuata uyumlu hale getirmek için sahadan gelen deneyimle tasarlanmış çözümler sunuyoruz.',
      ctaText: 'Hemen Teklif İste',
      ctaLink: '/iletisim',
    },
    {
      image: 'assets/slader_menu_assets/viarami-security-8499276_1920.jpg',
      eyebrow: 'ISO/IEC 27001 & KVKK',
      title: 'Regülasyona uyum,',
      highlight: 'tam güvence.',
      desc: 'EPDK, KVKK ve ISO 27001 gerekliliklerini bilen, denetimlerden geçirmiş uzman ekibimizle uyum süreçlerinizi hızlandırıyoruz.',
      ctaText: 'Hizmetleri İncele',
      ctaLink: '/hizmetler',
    },
    {
      image: 'assets/slader_menu_assets/slide-3.png',
      eyebrow: 'Siber Tehdit Farkındalığı',
      title: 'Denizde olmaman,',
      highlight: 'hedef olmadığın anlamına gelmez.',
      desc: 'Hiçbir kurum saldırılardan muaf değildir. Riskinizi analiz ediyor, sizi görünmez kılacak savunma katmanlarını birlikte inşa ediyoruz.',
      ctaText: 'Risk Analizi Al',
      ctaLink: '/iletisim',
    },
    {
      image: 'assets/slader_menu_assets/slide-4.png',
      eyebrow: 'Eğitim & Farkındalık',
      title: 'Personel farkındalığını',
      highlight: 'nasıl sağlıyorsunuz?',
      desc: 'İnsan faktörü en kritik güvenlik açığıdır. Farkındalık eğitimlerimizle çalışanlarınızı ilk savunma hattınıza dönüştürün.',
      ctaText: 'Eğitim Programları',
      ctaLink: '/hizmetler',
    },
    {
      image: 'assets/slader_menu_assets/slide-6.png',
      eyebrow: 'Sızma Testi & Red Team',
      title: 'Sosyal mühendislik',
      highlight: 'yaklaşımımıza hazır mısın?',
      desc: 'Gerçek saldırganlar gibi düşünüyor, kurumunuzun zayıf noktalarını siz fark etmeden önce tespit ediyoruz.',
      ctaText: 'Danışmanlık Al',
      ctaLink: '/danismanlik',
    },
    {
      image: 'assets/slader_menu_assets/slide-5.png',
      eyebrow: 'Yerli Yazılım Platformları',
      title: 'Vera ile süreçler,',
      highlight: 'otomasyona geçiyor.',
      desc: 'Vera KVKK ve Vera Data platformlarıyla veri yönetimi ve uyum süreçlerinizi dijitalleştirin, raporlayın ve izleyin.',
      ctaText: 'Çözümlerimizi Keşfet',
      ctaLink: '/hizmetler',
    },
  ];

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  next(): void {
    this.current.update(i => (i + 1) % this.slides.length);
    this.restartTimer();
  }

  prev(): void {
    this.current.update(i => (i - 1 + this.slides.length) % this.slides.length);
    this.restartTimer();
  }

  goTo(i: number): void {
    this.current.set(i);
    this.restartTimer();
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      this.current.update(i => (i + 1) % this.slides.length);
    }, 5000);
  }

  private restartTimer(): void {
    clearInterval(this.timer);
    this.startTimer();
  }
}
