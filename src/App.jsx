import { useState } from "react";
import { faqItems, modules, stats } from "./landingData";
import { ModuleIcon } from "./moduleIcons";
import {
  InstitutionStatIcon,
  ParentStatIcon,
  StaffStatIcon,
  StudentStatIcon,
} from "./statsIcons";
import { EasyIcon, PersonalIcon, PlatformIcon } from "./whyIcons";
import "./App.css";

const STUDENT_LOGIN_URL = "https://ogrenci.effora.com.tr/";
const TEACHER_LOGIN_URL = "https://kurumsal.effora.com.tr/signin";
const CONTACT_PHONE = "903124181002";
const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE}`;
const TEL_URL = `tel:+${CONTACT_PHONE}`;

const statIcons = {
  student: StudentStatIcon,
  parent: ParentStatIcon,
  institution: InstitutionStatIcon,
  staff: StaffStatIcon,
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="floating-contact-icon"
      aria-hidden="true"
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.14 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.33 8.7 7.33 8.53 7.33Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="floating-contact-icon"
      aria-hidden="true"
    >
      <path
        d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="floating-contact-icon"
      aria-hidden="true"
    >
      <path
        d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M8,12V14H16V12H8M8,16V18H13V16H8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FloatingContactButtons() {
  return (
    <div className="floating-contact">
      <a
        href="#iletisim"
        className="floating-contact-btn floating-contact-btn--form"
        aria-label="İletişim formuna git"
      >
        <FormIcon />
        <span>İletişim Formu</span>
      </a>
      <a
        href={TEL_URL}
        className="floating-contact-btn floating-contact-btn--call"
        aria-label="Hemen ara"
      >
        <PhoneIcon />
        <span>Hemen Ara</span>
      </a>
      <a
        href={WHATSAPP_URL}
        className="floating-contact-btn floating-contact-btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="accordion-icon"
      aria-hidden="true"
    >
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
    </svg>
  );
}

function StatItem({ icon, value, label, showDivider }) {
  const Icon = statIcons[icon];

  return (
    <div className="stat-item">
      <div className="stat-row">
        <Icon />
        <div className="stat-text">
          <h3 className="stat-value">{value}</h3>
          <h3 className="stat-label">{label}</h3>
        </div>
      </div>
      {showDivider ? <div className="stat-divider" aria-hidden="true" /> : null}
    </div>
  );
}

function FeatureCard({ title, icon, backImage, subtitle, description, items }) {
  return (
    <div className="feature-card-flip">
      <div className="feature-card-inner">
        <div className="feature-card-front feature-card">
          <div className="feature-card-header feature-card-header--green">
            <ModuleIcon type={icon} className="feature-card-header-icon" />
            <h4 className="lms-font-bold feature-card-header-title">{title}</h4>
          </div>
          <p>
            <em>{subtitle}</em>
          </p>
          <p>{description}</p>
          <ul className="text-left">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="feature-card-back feature-card">
          <img
            src={backImage}
            alt={title}
            className="feature-card-back-image"
          />
        </div>
      </div>
    </div>
  );
}

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      <div className="accordion-grid">
        <div className="accordion-column">
          {items.slice(0, 3).map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        <div className="accordion-column">
          {items.slice(3).map((item, index) => {
            const realIndex = index + 3;
            return (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === realIndex}
                onToggle={() =>
                  setOpenIndex(openIndex === realIndex ? null : realIndex)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="footer-social-icon"
      aria-hidden="true"
    >
      <path
        d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      role="presentation"
      className="footer-social-icon"
      aria-hidden="true"
    >
      <path
        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="container footer-inner">
        <p className="footer-copyright">
          © 2026 Miray Yayınları. Tüm hakları saklıdır.
        </p>
        <div className="footer-links">
          <span className="footer-link">Gizlilik Politikası</span>
          <span className="footer-link">KVKK</span>
          <span className="footer-social" aria-label="Instagram">
            <InstagramIcon />
          </span>
          <span className="footer-social" aria-label="LinkedIn">
            <LinkedInIcon />
          </span>
        </div>
      </div>
    </footer>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          type="button"
          className={`accordion-button ${isOpen ? "open" : ""}`}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="accordion-button-inner">
            <p className="lms-font-bold accordion-question">{item.question}</p>
            <PlusIcon />
          </div>
        </button>
      </h2>
      {isOpen ? (
        <div className="accordion-body text-left">{item.answer}</div>
      ) : null}
      <div className="accordion-divider" />
    </div>
  );
}

function App() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="container nav-inner">
          <img
            src="/media/logos/miray-logo-yatay.png"
            className="nav-logo"
            height="61"
            alt="Miray"
          />
          <div className="nav-actions">
            <a
              href={STUDENT_LOGIN_URL}
              className="btn-outline btn-outline-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                className="btn-icon"
                aria-hidden="true"
              >
                <path
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                  fill="currentColor"
                />
              </svg>
              Oturum Aç
            </a>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-desktop">
          <img
            src="/media/landing/banner.svg"
            alt="Banner background"
            className="hero-bg"
          />
          <a href="#iletisim" className="hero-badge">
            <img
              src="/media/logos/miray-logo.png"
              alt="Miray Yayınları"
              className="hero-badge-logo"
            />
            <p className="hero-badge-text">
              YILLARIN TECRÜBESİ, EĞİTİMDE MİRAY YAYINLARI GÜVENCESİ
            </p>
          </a>
        </div>
        <div className="hero-mobile">
          <img
            src="/media/landing/banner-mobile.svg"
            alt="Banner background mobile"
            className="hero-bg"
          />
          <a href="#iletisim" className="hero-badge">
            <img
              src="/media/logos/miray-logo.png"
              alt="Miray Yayınları"
              className="hero-badge-logo"
            />
            <p className="hero-badge-text">
              YILLARIN TECRÜBESİ, EĞİTİMDE MİRAY YAYINLARI GÜVENCESİ
            </p>
          </a>
        </div>
      </div>

      <main className="section section-about">
        <div className="container text-center">
          <h2 className="section-title">
            <span className="text-purple">Effora </span>Nedir?
          </h2>
          <h3 className="section-subtitle">
            Etkili, Modern, Kişiselleştirilmiş: Effora Öğrenme Sürecini Yeniden
            Tanımlar.
          </h3>
          <div className="about-content">
            <p>
              Modern arayüzü, yenilikçi modülleri, kullanım kolaylığı ve etkin
              destek ekibi ile Effora
              <b> Eğitim Platformu</b>, tüm eğitim{" "}
              <br className="hide-mobile" /> kademelerinde kullanıma uygun bir
              öğrenme platformudur.
            </p>
            <p className="about-paragraph">
              Kullanımı kolaydır, öğrenme süreçlerini kişiselleştirilmiş
              yöntemlerle zenginleştirir. <br className="hide-mobile" />
              Effora ile farklı türdeki öğrenme metotlarını keşfet ve öğrenmeyi
              kolaylaştır.
            </p>
          </div>
          <div className="about-actions-wrap">
            <div className="about-actions-row">
              <a
                href={STUDENT_LOGIN_URL}
                className="btn-about btn-about-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oturum Aç
              </a>
              <a href="#iletisim" className="btn-about btn-about-secondary">
                Bilgi Al
              </a>
            </div>
          </div>
        </div>
      </main>

      <main className="section section-why">
        <div className="container text-center">
          <img
            src="/media/landing/effora-example.png"
            alt=""
            className="visual-image"
          />
          <h2 className="section-title">
            Neden <span className="text-pink">Biz </span>?
          </h2>
          <div className="why-grid">
            <div className="why-item">
              <PlatformIcon />
              <h3 className="lms-font-bold">6 Farklı Türde Zengin İçerik</h3>
              <p className="text-left">
                Tek bir öğrenme metoduna sıkışıp kalmayın. Effora, her öğrenme
                stiline uygun zengin içerikler sunar:
              </p>
              <ul className="text-left">
                <li>İnteraktif İçerikler ve Podcast&apos;ler</li>
                <li>Dinamik Kavram Haritaları</li>
                <li>Detaylı Konu Anlatımları ve Pratik Özet Videoları</li>
                <li>
                  Gelişmiş yapay zekâ altyapımızla, dijital eğitim sürecinizi
                  çok daha akıllı ve verimli hâle getiriyoruz.
                </li>
              </ul>
            </div>
            <div className="why-divider" />
            <div className="why-item">
              <EasyIcon />
              <h3 className="lms-font-bold">Dev Soru Bankası (300.000+)</h3>
              <p className="text-left">
                Başarının anahtarı nitelikli pratiktir. Müfredatla %100 uyumlu,
                300.000&apos;den fazla sorudan oluşan dev havuzumuz sayesinde:
              </p>
              <ul className="text-left">
                <li>Kendinizi düzenli olarak test edin.</li>
                <li>Eksiklerinizi anında tespit edin.</li>
                <li>Sınavlara eksiksiz ve tam hazır olun.</li>
              </ul>
            </div>
            <div className="why-divider" />
            <div className="why-item">
              <PersonalIcon />
              <h3 className="lms-font-bold">
                Seni Tanır, Sana Özel Sorular Sunar
              </h3>
              <p className="text-left">
                Her öğrencinin öğrenme hızı ve ilgi alanı benzersizdir. Effora,
                statik bir sistem olmak yerine kullanıcısını yakından tanır,
                performansını analiz eder ve tamamen ona özel kişiselleştirilmiş
                bir içerik akışı sunar. Odaklanılması gereken konuları
                belirleyerek bireysel başarıyı maksimuma çıkarır.
              </p>
            </div>
          </div>
        </div>
      </main>

      <main className="section section-stats">
        <div className="container text-center">
          <h2 className="section-title text-white">
            Neden <span className="text-blue">Effora</span>?
          </h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                showDivider={index < stats.length - 1}
              />
            ))}
          </div>
        </div>
      </main>

      <main className="section section-modules">
        <div className="container text-center">
          <h2 className="section-title">İçerik Türlerimiz</h2>
          <h3 className="section-subtitle">Effora ile Öğren</h3>
          <div className="cards-grid cards-grid-3-2">
            {modules.map((module) => (
              <FeatureCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </main>

      <main id="iletisim" className="section section-contact">
        <div className="container text-center">
          <h2 className="section-title section-contact-title">
            <span className="text-light-purple">Bizimle</span> İletişime Geçin
          </h2>
          <h3 className="section-contact-subtitle">
            Bize ulaşın, alanında uzman ekibimiz ile aklınızdaki soruları
            yanıtlayalım.
          </h3>
          <div className="contact-panel">
            <div className="contact-card contact-info">
              <h4 className="lms-font-bold contact-info-title">
                İletişim Bilgileri
              </h4>
              <div className="contact-info-item">
                <span className="contact-info-label">Adres</span>
                <p>
                  Haymana Yolu 5. km, Karşıyaka Mah. 577. Sok. No:1, Gölbaşı,
                  Ankara
                </p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Telefon</span>
                <p>+90 (312) 418 10 02</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">E-posta</span>
                <p>destek@effora.com.tr</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Çalışma Saatleri</span>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              </div>
            </div>
            <div className="contact-card contact-map">
              <div className="contact-map-frame">
                <iframe
                  title="Miray Yayınları konum haritası"
                  src="https://maps.google.com/maps?q=Haymana+Yolu+5.km+Kar%C5%9F%C4%B1yaka+Mah.+577.+Sok.+No:1+G%C3%B6lba%C5%9F%C4%B1+Ankara&hl=tr&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="section section-teacher-cta">
        <div className="container text-center">
          <a
            href={TEACHER_LOGIN_URL}
            className="btn-teacher-login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Öğretmen Girişi
          </a>
        </div>
      </section>

      <main className="section">
        <div className="container text-center">
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          <h3 className="section-subtitle">
            İşte merak edebileceğinizi düşündüğümüz bir kaç soru ve detaylı
            cevapları:
          </h3>
          <FaqAccordion items={faqItems} />
        </div>
      </main>

      <Footer />

      <FloatingContactButtons />
    </div>
  );
}

export default App;
