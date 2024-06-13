import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import { useTranslation } from "react-i18next";

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
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';

function Details() {
  const { id } = useParams();
  const { t } = useTranslation();

  const cardDetails = {
    1: { id: 1, img: img1, summerImg: summerImg1, title: t("summerData.title1") },
    2: { id: 2, img: img2, summerImg: summerImg2, title: t("summerData.title2") },
    3: { id: 3, img: img3, summerImg: summerImg3, title: t("summerData.title3") },
    4: { id: 4, img: img4, summerImg: summerImg4, title: t("summerData.title4") },
    5: { id: 5, img: img5, summerImg: summerImg5, title: t("summerData.title5") },
    6: { id: 6, img: img6, summerImg: summerImg6, title: t("summerData.title6") },
    7: { id: 7, img: img7, summerImg: summerImg7, title: t("summerData.title7") },
    8: { id: 8, img: img8, summerImg: summerImg8, title: t("summerData.title8") },
    9: { id: 9, img: img9, summerImg: summerImg9, title: t("summerData.title9") },
    10: { id: 10, img: img10, summerImg: summerImg10, title: t("summerData.title10") },





// 11:{ id: 1, img: img1, title: t("winterData.title1") },
//   12:  { id: 2, img: img2, title: t("winterData.title2") },
//  13:   { id: 3, img: img3, title: t("winterData.title3") },
//  14:   { id: 4, img: img4, title: t("winterData.title4") },
//   15:  { id: 5, img: img5, title: t("winterData.title5") },
//  16:   { id: 6, img: img6, title: t("winterData.title6") },
//  17:   { id: 7, img: img7, title: t("winterData.title7") },
//  18:   { id: 8, img: img8, title: t("winterData.title8") },
// 19: { id: 9, img: img9, title: t("winterData.title9") },
//   20:  { id: 10, img: img10, title: t("winterData.title10") },
  };

  const details = cardDetails[id];

  if (!details) {
    return <div>NOT FOUND </div>;
  }

  return (
   <>
   
   <Navbar />

    <div className='container-details'>
<div className="details-block">
<div className="details-img">
        <img src={details.img} alt={details.title} />
      </div>


      <div className="block">
        <h3 className='title'>{details.title}</h3>
      <table border={1} cellSpacing={0}>
        <tbody>
          <tr>
            <td>Material:</td>
            <td>100% paxta flanel</td>
          </tr>
          <tr>
            <td>Yostiq kiyimi:</td>
            <td>50x70 sm (2 dona)</td>
          </tr>
          <tr>
            <td>Choyshab:</td>
            <td>260×280 sm (1 dona)</td>
          </tr>
          <tr>
            <td>Ko'rpa-to'shak:</td>
            <td>160x220 sm (2 dona)</td>
          </tr>
          <tr>
            <td>Hajmi:</td>
            <td>Maxsus o'lcham</td>
          </tr>
          <tr>
            <td>Ishlab chiqaruvchi:</td>
            <td>Buxoro tabiiy mahsuloti</td>
          </tr>
        </tbody>
      </table>
      </div>
   
</div>
    </div>
    <Footer />
   </>
  );
}

export default Details;
