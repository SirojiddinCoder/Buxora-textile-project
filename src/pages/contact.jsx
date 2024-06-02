import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const yunusobodCoords = [41.3663, 69.2890];
  const bodomzorCoords = [41.3275, 69.2817];

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="contact-us">
          <div className="contact-us-left" data-aos="fade-right">
            <h2 className='contact-title'>Aloqa</h2>
            <form action="#">
              <input className='contact-input' type="text" placeholder='Ismingiz' data-aos="fade-up" /> <br />
              <input className='contact-input' type="tel" placeholder='tel raqamingiz' data-aos="fade-up" data-aos-delay="200" /> <br />
              <textarea className='contact-textAre' name="message" id="message" placeholder='bizga habar yuboring' data-aos="fade-up" data-aos-delay="400"></textarea>
               <div className="submit" data-aos="fade-up" data-aos-delay="600">
                <a className='send-btn' href="#">Yuborish</a>
               </div>
            </form>
          </div>
          <div className="contact-us-right" data-aos="fade-left">
            <YMaps query={{ apikey: 'YOUR_YANDEX_API_KEY' }}>
              <div>
                <Map
                  defaultState={{
                    center: [41.3463, 69.2853],
                    zoom: 12,
                  }}
                  width="700px"
                  height="700px"
                >
                  <Placemark geometry={yunusobodCoords} properties={{ balloonContent: 'Yunusobod' }} />
                  <Placemark geometry={bodomzorCoords} properties={{ balloonContent: 'Bodomzor' }} />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
