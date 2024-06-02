import React, { useEffect } from 'react';
import './Yangiliklar.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img1 from '../../assets/siteimg/news1.png';
import img2 from '../../assets/siteimg/news2.png';
import img3 from '../../assets/siteimg/news3.png';

const newsData = [
    {
        id: 1,
        img: img1,
        title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
        desc: "Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepaliklarga urilganda ..."
    },
    {
        id: 2,
        img: img2,
        title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
        desc: "Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepaliklarga urilganda ..."
    },
    {
        id: 3,
        img: img3,
        title: "Qanday qilib mukammal gadjetlarni tanlash mumkin",
        desc: "Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepaliklarga urilganda ..."
    },
];

export const Yangiliklar = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with a 2000ms animation duration
    }, []);

    return (
        <div className='Newcontainer'>
            <div className="news">
                <h2 className='news-title'>Yangiliklar</h2>
                <h3 className='news-desc'>Buxoro Yangiliklari</h3>
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
