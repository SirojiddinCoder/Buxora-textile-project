import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';
import AboutIcon from '../assets/aboutIcon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

import { useTranslation } from "react-i18next";

export const About = () => {

  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="About-Container">
        <div className="about-us" data-aos="fade-up">
          
          <h2 className='about-title'>{t('about.about-title')}</h2>
          <div className="line-about"></div>
          <img className='aboutIcon' src={AboutIcon} alt="About Icon" />
        </div>

        <p className='about-desc' data-aos="fade-up">
        {t('about.about-desc1')}
        </p>
        <p className='about-desc' data-aos="fade-up">
        {t('about.about-desc2')}
        </p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc3')}</p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc4')}</p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc5')}</p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc6')}</p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc7')}</p>
        <p className="about-desc" data-aos="fade-up"> {t('about.about-desc8')}</p>
        <p className="about-desc" data-aos="fade-up">
        {t('about.about-desc9')}
        </p>
        <p className="about-desc" data-aos="fade-up">
        {t('about.about-desc10')}
        </p>

        <div className="video-content" data-aos="fade-up">
          <iframe className='frame' src="https://www.youtube.com/embed/7_v1C0sgxbs?si=mNtBw8QFDvI5e9zD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
