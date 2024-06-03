import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import '../QishKolleksiya/QishKollleksiya.css';
import img1 from '../../assets/siteimg/k1.jpg';
import img2 from '../../assets/siteimg/k2.jpg';
import img3 from '../../assets/siteimg/k3.jpg';
import img4 from '../../assets/siteimg/k4.jpg';
import img5 from '../../assets/siteimg/k5.jpg';
import img6 from '../../assets/siteimg/k6.jpg';
import img7 from '../../assets/siteimg/k7.jpg';
import img8 from '../../assets/siteimg/k8.jpg';
import img9 from '../../assets/siteimg/k9.jpg';
import img10 from '../../assets/siteimg/k10.jpg';

import summerImg1 from '../../assets/siteimg/s1.jpg';
import summerImg2 from '../../assets/siteimg/s2.jpg';
import summerImg3 from '../../assets/siteimg/s3.jpg';
import summerImg4 from '../../assets/siteimg/s4.jpg';
import summerImg5 from '../../assets/siteimg/s5.jpg';
import summerImg6 from '../../assets/siteimg/s6.jpg';
import summerImg7 from '../../assets/siteimg/s7.jpg';
import summerImg8 from '../../assets/siteimg/s8.jpg';
import summerImg9 from '../../assets/siteimg/s9.jpg';
import summerImg10 from '../../assets/siteimg/s10.jpg';

const KuzKolleksiya = ({ Yoz }) => {
  const { t } = useTranslation();

  const winterData = [
    { id: 1, img: img1, title: t("winterData.title1") },
    { id: 2, img: img2, title: t("winterData.title2") },
    { id: 3, img: img3, title: t("winterData.title3") },
    { id: 4, img: img4, title: t("winterData.title4") },
    { id: 5, img: img5, title: t("winterData.title5") },
    { id: 6, img: img6, title: t("winterData.title6") },
    { id: 7, img: img7, title: t("winterData.title7") },
    { id: 8, img: img8, title: t("winterData.title8") },
    { id: 9, img: img9, title: t("winterData.title9") },
    { id: 10, img: img10, title: t("winterData.title10") },
  ];
  
  const summerData = [
    { id: 1, img: summerImg1, title: t("summerData.title1") },
    { id: 2, img: summerImg2, title: t("summerData.title2") },
    { id: 3, img: summerImg3, title: t("summerData.title3") },
    { id: 4, img: summerImg4, title: t("summerData.title4") },
    { id: 5, img: summerImg5, title: t("summerData.title5") },
    { id: 6, img: summerImg6, title: t("summerData.title6") },
    { id: 7, img: summerImg7, title: t("summerData.title7") },
    { id: 8, img: summerImg8, title: t("summerData.title8") },
    { id: 9, img: summerImg9, title: t("summerData.title9") },
    { id: 10, img: summerImg10, title: t("summerData.title10") },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = Yoz ? summerData : winterData;
  const rows = [];
  for (let i = 0; i < data.length; i += 5) {
    rows.push(data.slice(i, i + 5));
  }

  return (
    <div className='wrapper'>
      <div className="winter-block">
        <h2 className='winter-title' data-aos="fade-up">{Yoz ? t('summerData.k') : t('summerData.k1')}</h2>
        <p className='winter-desc' data-aos="fade-up" data-aos-delay="100">{t('aboutCard.middle-title')}</p>
        {rows.map((row, rowIndex) => (
          <div className="winter-card-groups" key={rowIndex} data-aos="fade-up" data-aos-delay={rowIndex * 100}>
            {row.map((value) => (
              <div className="winter-card" key={value.id} data-aos="fade-up" data-aos-delay={rowIndex * 100 + value.id * 50}>
                <img className='winter-img' src={value.img} alt={value.title} />
                <h4>{value.title}</h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KuzKolleksiya;
