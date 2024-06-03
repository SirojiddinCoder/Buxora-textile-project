import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../AboutCard/AboutCard.css';
import { useTranslation } from "react-i18next";
import WrapperImg from '../../assets/siteimg/AboutCard1.png';
import WrapperImg2 from '../../assets/siteimg/AboutCard2.png'; // Aslida boshqa rasmni import qilish
import WrapperImg3 from '../../assets/siteimg/AboutCard3.png'; // Uchinchi rasmni import qilish

const AboutCard = ({ images1, images3 }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  let imageSrc;
  if (images3) {
    imageSrc = WrapperImg3;
  } else if (images1) {
    imageSrc = WrapperImg;
  } else {
    imageSrc = WrapperImg2;
  }

  return (
    <div className='wrapper' data-aos="fade-up">
      <div className="wrapper-block" data-aos="fade-in">
        <div className="wrapper-left" data-aos="fade-right">
          <p className="wrapper-title">100%</p>
          <p className="wrapper-desc">{t('aboutCard.wrapper-desc')}</p>
        </div>
        <div className="wrapper-middle" data-aos="zoom-in">
          <img className='WrapperImg' src={imageSrc} alt="images" />
        </div>
        <div className="wrapper-right" data-aos="fade-left">
          <p className="middle-title">
            {t('aboutCard.middle-title')}
          </p>
          <p className="middle-desc">
            {t('aboutCard.middle-desc1')} <br />
            {t('aboutCard.middle-desc2')} <br />
            {t('aboutCard.middle-desc3')} <br />
            <div className="line">
              <a href="#" className='wrapper-btn'>{t('aboutCard.wrapper-btn')}</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
