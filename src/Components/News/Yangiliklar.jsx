import React, { useEffect } from 'react';
import './Yangiliklar.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img1 from '../../assets/siteimg/news1.png';
import img2 from '../../assets/siteimg/news2.png';
import img3 from '../../assets/siteimg/news3.png';
import { useTranslation } from "react-i18next";




export const Yangiliklar = () => {

    const { t } = useTranslation();


    const newsData = [
        {
            id: 1,
            img: img1,
            title: t("news.title1"),
            desc: t("news.desc1") 
        },
        {
            id: 2,
            img: img2,
            title: t("news.title2"),
            desc: t("news.desc2") 
        },
        {
            id: 3,
            img: img3,
            title: t("news.title3"),
            desc: t("news.desc3")
        },
    ];
    useEffect(() => {
        AOS.init({ duration: 2000 }); 
    }, []);

    return (
        <div className='Newcontainer'>
            <div className="news">
                <h2 className='news-title'>{t('news.news-title')}</h2>
                <h3 className='news-desc'>{t('news.news-desc')}</h3>
                <div className="news-cards">
                    {newsData.map((value, index) => {
                        return (
                            <div key={value.id} className="news-card" data-aos="fade-up">
                                <div className="card-img">
                                    <img className='news-img' src={value.img} alt={value.title} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Yangiliklar;
