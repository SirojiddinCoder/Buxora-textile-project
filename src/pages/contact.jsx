import React, { useState } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  
  const SendMessage = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const token =  "7045954792:AAFQAI9R6q9CQ5veso12Ijc5dWToIVCMOj4";
    const URL = `https://api.telegram.org/bot${token}/sendMessage`;
    const chat_id = '5011507273';
    const name = event.target.elements.name.value;
    const telRaqam = event.target.elements.telRaqam.value;
    const msg1 = event.target.elements.message1.value;
    
    const MessageContent = `ismi : ${name} \n Tel: ${telRaqam} \n Habar: ${msg1} `;
    
    try {
      const response = await axios.post(URL, {
        chat_id: chat_id,
        text: MessageContent
      });
      if (response.status === 200) {
        toast.success('Habaringiz yuborildi');
        event.target.reset();
      }
    } catch (error) {
      toast.error('Xatolik yuz berdi');
      console.error('Xatolik yuz berdi', error);
    } finally {
      setLoading(false);
    }
  };

  const yunusobodCoords = [41.3663, 69.2890];
  const bodomzorCoords = [41.3275, 69.2817];

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="contact-us">
          <div className="contact-us-left" data-aos="fade-up">
            <h2 className='contact-title'>{t('contact.Aloqa')}</h2>
            <form id="MyForm" onSubmit={SendMessage}>
              <input 
                className='contact-input' 
                type="text" 
                name="name"
                placeholder={t('contact.Ismingiz')} 
                required 
              /> <br />
              <input 
                className='contact-input' 
                type="tel" 
                name="telRaqam"
                placeholder={t('contact.telraqamingiz')} 
                required 
              /> <br />
              <textarea 
                className='contact-textAre' 
                name="message1" 
                placeholder={t('contact.habar')} 
                required 
              ></textarea>
              <div className="submit">
                <button className="send-btn" type="submit" disabled={loading}>
                  {loading ? t("contact.BTN1") : t("contact.BTN2")}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-us-right" data-aos="fade-left">
            <YMaps query={{ apikey: 'YOUR_YANDEX_API_KEY' }}>
              <div className='maps-1'>
                <Map
                  defaultState={{
                    center: [41.3463, 69.2853],
                    zoom: 12,
                  }}
                  className="custom-map"
                >
                  <Placemark geometry={yunusobodCoords} properties={{ balloonContent: 'Yunusobod' }} />
                  <Placemark geometry={bodomzorCoords} properties={{ balloonContent: 'Bodomzor' }} />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Contact;
