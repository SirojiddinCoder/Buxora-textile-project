import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../navbar.css';
import img1 from '../../../assets/siteimg/111-copy.png';
import icon1 from '../../../assets/siteimg/delever.svg';
import icon2 from '../../../assets/siteimg/2.svg';
import icon3 from '../../../assets/siteimg/Group-995.svg';
import icon4 from '../../../assets/siteimg/payment.svg';

export const NavbarHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container1">
      <div className="Card-Home">
        <div className="Home-img" data-aos="fade-right">
          <img className="img1" src={img1} alt="nimadir" />
        </div>
        <div className="Home-text" data-aos="fade-left">
          <span className="home-text-title-1">Buxoro</span> <br />
          <span className="home-text-title-2">Tabiiy</span> <br />
          <span className="home-text-desc">MAHSULOT</span>
        </div>
      </div>
      <div className="Home-mini-card-groups">
        <div className="mini-card" data-aos="fade-up" data-aos-delay="100">
          <div><img src={icon1} alt="icon1" /></div>
          <div>
            <h4 className="card-title">Yetkazib berish bepul</h4>
            <p className="home-card-desc">Barcha buyurtmalar uchun bepul yetkazib berish</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="200">
          <div><img src={icon2} alt="icon2" /></div>
          <div>
            <h4 className="card-title">Qaytish kafolati</h4>
            <p className="home-card-desc">30 kunlik pulni qaytarish</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="300">
          <div><img src={icon3} alt="icon3" /></div>
          <div>
            <h4 className="card-title">24/7 onlayn qo'llab-quvvatlash</h4>
            <p className="home-card-desc">24/7 texnik yordam</p>
          </div>
        </div>
        <div className="mini-card" data-aos="fade-up" data-aos-delay="400">
          <div><img src={icon4} alt="icon4" /></div>
          <div>
            <h4 className="card-title">Xavfsiz to'lov</h4>
            <p className="home-card-desc">Barcha to'lov usullari qabul qilinadi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
