import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';
import AboutIcon from '../assets/aboutIcon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="About-Container">
        <div className="about-us" data-aos="fade-up">
          <h2 className='about-title'>Biz haqimizda</h2>
          <div className="line-about"></div>
          <img className='aboutIcon' src={AboutIcon} alt="About Icon" />
        </div>

        <p className='about-desc' data-aos="fade-up">
          Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar 
          Fabrikamız uzoq yillar davomida butun dunyoda foydalanish uchun paxta 
          matolarini ishlab chiqaradigan kompaniya bo'lib kelgan.
        </p>
        <p className='about-desc' data-aos="fade-up">
          Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniya 17 yildan beri mijozlarga xizmat ko'rsatmoqda.
        </p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniyaning asosiy maqsadi yuqori sifatli va tejamkor mahsulotlar ishlab chiqarishdir.</p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarUshbu kompaniyaning ishlab chiqarish jarayoni butunlay ekologik toza.</p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarKorxonada xaridorlarning talab va takliflari asosida har qanday turdagi paxta xomashyosi ishlab chiqarilishi mumkin.</p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarKompaniya DongJia to‘quv mashinalarining O‘zbekistondagi rasmiy dileri hisoblanadi.</p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarAyni paytda 80 dan ortiq oila o‘z oilasini moddiy jihatdan ta’minlab, korxona nufuzi va muvaffaqiyatiga hissa qo‘shmoqda.</p>
        <p className="about-desc" data-aos="fade-up">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarBu talabni qondirish maqsadida 50 ta to‘quv dastgohi to‘xtovsiz yuqori tezlikda ishlamoqda.</p>
        <p className="about-desc" data-aos="fade-up">
          Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalarOyiga 200-250 ming metr gazlama to‘qish quvvatiga egamiz.
        </p>
        <p className="about-desc" data-aos="fade-up">
          Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar“Bukhara Natural Product” kompaniyasi oʻz sodiq mijozlariga istalgan vaqtda xizmat koʻrsatishdan mamnun.
        </p>

        <div className="video-content" data-aos="fade-up">
          <iframe width="80%" height="500" src="https://www.youtube.com/embed/7_v1C0sgxbs?si=mNtBw8QFDvI5e9zD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
