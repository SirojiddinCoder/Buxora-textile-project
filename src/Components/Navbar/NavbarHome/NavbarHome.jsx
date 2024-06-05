import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../navbar.css';
import img1 from '../../../assets/siteimg/111-copy.png';
// import img1 from '../../../assets/siteimg/mebel1.png';
import icon1 from '../../../assets/siteimg/delever.svg';
import icon2 from '../../../assets/siteimg/2.svg';
import icon3 from '../../../assets/siteimg/Group-995.svg';
import icon4 from '../../../assets/siteimg/payment.svg';
import { useTranslation } from "react-i18next";

export const NavbarHome = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <di v className="container1">
      <div className="Card-Home">
        <div className="Home-img" data-aos="fade-right">
          <img className="img1" src={img1} alt="nimadir" />
        </div>
        <div className="Home-text" data-aos="fade-left">
          <span className="home-text-title-1">{t('navbarHome.home1')}</span> <br />
          <span className="home-text-title-2">{t('navbarHome.home2')}</span> <br />
          <span className="home-text-desc">{t('navbarHome.home3')}</span>
        </div>
      </div>
      <div className="Home-mini-card-groups">
        <div className="mini-card" data-aos="fade-up" data-aos-delay="100">
          <div><img src={icon1} alt="icon1" /></div>
          <div>
            <h4 className="card-title">{t('navbarHome.card-title')}</h4>
            <p className="home-card-desc">{t('navbarHome.home-card-desc')}</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="200">
          <div><img src={icon2} alt="icon2" /></div>
          <div>
            <h4 className="card-title">{t('navbarHome.card-title2')}</h4>
            <p className="home-card-desc">{t('navbarHome.home-card-desc2')}</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="300">
          <div><img src={icon3} alt="icon3" /></div>
          <div>
            <h4 className="card-title">{t('navbarHome.card-title3')}</h4>
            <p className="home-card-desc">{t('navbarHome.home-card-desc3')}</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="400">
          <div><img src={icon4} alt="icon4" /></div>
          <div>
            <h4 className="card-title">{t('navbarHome.card-title4')}</h4>
            <p className="home-card-desc">{t('navbarHome.home-card-desc4')}</p>
          </div>
        </div>
      </div>
    </di>
  );
};

export default NavbarHome;
