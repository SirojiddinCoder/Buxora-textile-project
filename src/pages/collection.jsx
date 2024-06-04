import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './collection.css';
import img1 from '../assets/siteimg/1.jpg';
import img2 from '../assets/siteimg/2.jpg';
import img3 from '../assets/siteimg/3.jpg';
import img4 from '../assets/siteimg/4.jpg';
import img5 from '../assets/siteimg/5.jpg';
import img6 from '../assets/siteimg/6.jpg';
import img7 from '../assets/siteimg/7.jpg';
import img8 from '../assets/siteimg/8.jpg';
import img9 from '../assets/siteimg/9.jpg';
import img10 from '../assets/siteimg/10.jpg';
import img11 from '../assets/siteimg/k1.jpg';
import img12 from '../assets/siteimg/k2.jpg';
import img13 from '../assets/siteimg/k3.jpg';
import img14 from '../assets/siteimg/k4.jpg';
import img15 from '../assets/siteimg/k5.jpg';
import img16 from '../assets/siteimg/k6.jpg';
import img17 from '../assets/siteimg/k7.jpg';
import img18 from '../assets/siteimg/k8.jpg';
import img19 from '../assets/siteimg/k9.jpg';
import img25 from '../assets/siteimg/k10.jpg';

import { useTranslation } from "react-i18next";

const Card = ({ image, title }) => {
    return (
        <div className="card" data-aos="fade-up">
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

const Collection = () => {
    const { t, ready } = useTranslation();  // Ensure that `ready` is also destructured from useTranslation

    const cardsData = [
        { id: 1, image: img1, title: t("cardsData.title1"), category: t("cardsData.category1") },
        { id: 2, image: img2, title: t("cardsData.title2"), category: t("cardsData.category2") },
        { id: 3, image: img3, title: t("cardsData.title3"), category: t("cardsData.category3") },
        { id: 4, image: img4, title: t("cardsData.title4"), category: t("cardsData.category4") },
        { id: 5, image: img5, title: t("cardsData.title5"), category: t("cardsData.category5") },
        { id: 6, image: img6, title: t("cardsData.title6"), category: t("cardsData.category6") },
        { id: 7, image: img7, title: t("cardsData.title7"), category: t("cardsData.category7") },
        { id: 8, image: img8, title: t("cardsData.title8"), category: t("cardsData.category8") },
        { id: 9, image: img9, title: t("cardsData.title9"), category: t("cardsData.category9") },
        { id: 10, image: img10, title: t("cardsData.title10"), category: t("cardsData.category10") },
        { id: 11, image: img11, title: t("cardsData.title11"), category: t("cardsData.category11") },
        { id: 12, image: img12, title: t("cardsData.title12"), category: t("cardsData.category12") },
        { id: 13, image: img13, title: t("cardsData.title13"), category: t("cardsData.category13") },
        { id: 14, image: img14, title: t("cardsData.title14"), category: t("cardsData.category14") },
        { id: 15, image: img15, title: t("cardsData.title15"), category: t("cardsData.category15") },
        { id: 16, image: img16, title: t("cardsData.title16"), category: t("cardsData.category16") },
        { id: 17, image: img17, title: t("cardsData.title17"), category: t("cardsData.category17") },
        { id: 18, image: img18, title: t("cardsData.title18"), category: t("cardsData.category18") },
        { id: 19, image: img19, title: t("cardsData.title19"), category: t("cardsData.category19") },
        { id: 20, image: img25, title: t("cardsData.title20"), category: t("cardsData.category20") },
    ];

   


    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const cardsPerPage = 9;

    useEffect(() => {
        AOS.init({ duration: 1000 });
        if (ready) {
            setSelectedFilter(t('cardsData.jami'));  // Now set after translations are ready
        }
    }, [ready, t]);  // Depend on `ready` and `t`

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredCards = cardsData.filter(card => {
        return (selectedFilter === t('cardsData.jami') || card.category === selectedFilter) &&
               card.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />

            <div className="pagination-cards">
                <div className="container22">
                    <div className="forma">
                        <form action="#">
                            <input 
                                className='search' 
                                type="text"  
                                placeholder='search' 
                                value={searchTerm} 
                                onChange={handleSearchChange} 
                            />
                            <h3 className='toplam-text-2'>{t('cardsData.toplam-text-2')}</h3>
                            <ul className='collection-itemas'>
                                <li className='collection-iitem'>
                                    <a className='collection-link' href="#" onClick={() => handleFilterChange(t('cardsData.category1'))}>
                                        {t('cardsData.category1')}
                                    </a>
                                </li>
                                <li className='collection-iitem'>
                                    <a className='collection-link' href="#" onClick={() => handleFilterChange(t('cardsData.category2'))}>
                                        {t('cardsData.category2')}
                                    </a>
                                </li>
                                <li className='collection-iitem'>
                                    <a className='collection-link' href="#" onClick={() => handleFilterChange(t('cardsData.category3'))}>
                                        {t('cardsData.category3')}
                                    </a>
                                </li>
                                <li className='collection-iitem'>
                                    <a className='collection-link' href="#" onClick={() => handleFilterChange(t('cardsData.category4'))}>
                                        {t('cardsData.category4')}
                                    </a>
                                </li>
                                <li className='collection-iitem'>
                                    <a className='collection-link' href="#" onClick={() => handleFilterChange(t('cardsData.jami'))}>
                                        {t('cardsData.jami')}
                                    </a>
                                </li>
                            </ul>
                        </form>
                        <div className="count">
                            <p className='toplam-text'>{t('cardsData.toplam-text-2')}</p>
                            <p>{indexOfFirstCard + 1} - {Math.min(indexOfLastCard, filteredCards.length)} {t('cardsData.tadan')} {filteredCards.length} {t('cardsData.koʻrsatilmoqda')}</p>
                        </div>
                    </div>

                    <div className="filter-select">
                        <form action="#">
                            <select name="name" id="id" onChange={(e) => handleFilterChange(e.target.value)}>
                                <option value={t('cardsData.jami')}>{t('cardsData.jami')}</option>
                                <option value={t('cardsData.category1')}>{t('cardsData.category1')}</option>
                                <option value={t('cardsData.category2')}>{t('cardsData.category2')}</option>
                                <option value={t('cardsData.category3')}>{t('cardsData.category3')}</option>
                                <option value={t('cardsData.category4')}>{t('cardsData.category4')}</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className="card-list-container">
                    <div className="card-list"> 
                        {currentCards.map(card => (
                            <Card key={card.id} image={card.image} title={card.title} />
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={index + 1 === currentPage ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collection;
