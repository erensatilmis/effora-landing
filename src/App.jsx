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

const statIcons = {
  student: StudentStatIcon,
  parent: ParentStatIcon,
  institution: InstitutionStatIcon,
  staff: StaffStatIcon,
};

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
            <div className="contact-info">
              <h4 className="lms-font-bold contact-info-title">
                İletişim Bilgileri
              </h4>
              <div className="contact-info-item">
                <span className="contact-info-label">Adres</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Telefon</span>
                <p>+90 (212) 000 00 00</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">E-posta</span>
                <p>lorem.ipsum@dolor.sit</p>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Çalışma Saatleri</span>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
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
    </div>
  );
}

export default App;
