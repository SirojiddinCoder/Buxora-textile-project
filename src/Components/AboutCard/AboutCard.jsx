import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../AboutCard/AboutCard.css';
import WrapperImg from '../../assets/siteimg/AboutCard1.png';
import WrapperImg2 from '../../assets/siteimg/AboutCard2.png'; // Aslida boshqa rasmni import qilish
import WrapperImg3 from '../../assets/siteimg/AboutCard3.png'; // Uchinchi rasmni import qilish

const AboutCard = ({ images1, images3 }) => {
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
          <p className="wrapper-desc">Materialning sifati</p>
        </div>
        <div className="wrapper-middle" data-aos="zoom-in">
          <img className='WrapperImg' src={imageSrc} alt="images" />
        </div>
        <div className="wrapper-right" data-aos="fade-left">
          <p className="middle-title">
            "Buxoro Tabiiy mahsuloti"
          </p>
          <p className="middle-desc">
            Ko'p yillar davomida butun dunyoda <br />
            foydalanish uchun paxta matolarini <br />
            ishlab chiqaradigan kompaniya bo'lib kelgan <br />
            <div className="line">
              <a href="#" className='wrapper-btn'>To'plamlar</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
