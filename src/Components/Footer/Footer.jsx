import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import { IoIosTime } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.png";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footer-1" data-aos="fade-up">
          <div className="icon">
            <IoIosTime className='ikon' />
          </div>
          <div>
            <p>Dushanba-Juma <br />
              Soat: 09:00-18:00
              <br />
              <br />
         
+998 93 960 78 00
              </p>
          </div>
        </div>
        <div className="footer-1" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">
            <MdOutlineMarkEmailUnread className='ikon' />
          </div>
          <div>
            <p>Elekron pochta <br />
              Bnpuz@bk.ru</p>
          </div>
        </div>
        <div className="footer-1" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">
            <FaLocationDot className='ikon' />
          </div>
          <div>
            Buxoro, st. Alpomish 80. <br />
            MChJ "BUXORA NATURAL PRODUCT".
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="footer1">
        <p className='text-copy'>
          © 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan.
        </p>
      </div>
    </>
  );
}

export default Footer;
