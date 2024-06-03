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

    const { t } = useTranslation();


    const cardsData = [
        { id: 1, image: img1, title: "Kvadratchalar", category: "Bahor Kolleksiyasi" },
        { id: 2, image: img2, title: 'Ikat', category: "Qish Kolleksiyasi" },
        { id: 3, image: img3, title: 'Davralar', category: "Yoz Kolleksiyasi" },
        { id: 4, image: img4, title: 'Geometriya kok', category: "Kuz Kolleksiyasi" },
        { id: 5, image: img5, title: 'Tropik barglar', category: "Bahor Kolleksiyasi" },
        { id: 6, image: img6, title: 'Bambi', category: "Qish Kolleksiyasi" },
        { id: 7, image: img7, title: 'Vizantiya', category: "Yoz Kolleksiyasi" },
        { id: 8, image: img8, title: 'Kechki bog', category: "Kuz Kolleksiyasi" },
        { id: 9, image: img9, title: 'Pat Markiz', category: "Bahor Kolleksiyasi" },
        { id: 10, image: img10, title: 'Lavanda atirgullari', category: "Qish Kolleksiyasi" },
        { id: 11, image: img11, title: 'Safari', category: "Yoz Kolleksiyasi" },
        { id: 12, image: img12, title: 'Kop rangli ametist', category: "Kuz Kolleksiyasi" },
        { id: 13, image: img13, title: 'Shivali bezak', category: "Bahor Kolleksiyasi" },
        { id: 14, image: img14, title: 'Zumrad', category: "Qish Kolleksiyasi" },
        { id: 15, image: img15, title: 'Malaxit qutisi', category: "Yoz Kolleksiyasi" },
        { id: 16, image: img16, title: 'Bahorning hidlari', category: "Kuz Kolleksiyasi" },
        { id: 17, image: img17, title: 'Kuzgi barglar tushishi', category: "Bahor Kolleksiyasi" },
        { id: 18, image: img18, title: 'Moviy shabada', category: "Qish Kolleksiyasi" },
        { id: 19, image: img19, title: 'Moviy suv', category: "Yoz Kolleksiyasi" },
        { id: 20, image: img25, title: 'Plaid', category: "Kuz Kolleksiyasi" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const cardsPerPage = 9;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredCards = cardsData.filter(card => {
        return (selectedFilter === 'all' || card.category === selectedFilter) &&
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
                            <h3 className='toplam-text-2'>Toplamlar</h3>
                            <ul className='collection-itemas'>
                                <li className='collection-iitem'><a className='collection-link' href="#" onClick={() => handleFilterChange('Bahor Kolleksiyasi')}>Bahorgi Kolleksiyalar</a></li>
                                <li className='collection-iitem'><a className='collection-link' href="#" onClick={() => handleFilterChange('Qish Kolleksiyasi')}>Qishgi Kolleksiyalar</a></li>
                                <li className='collection-iitem'><a className='collection-link' href="#" onClick={() => handleFilterChange('Yoz Kolleksiyasi')}>Yozgi Kolleksiyalar</a></li>
                                <li className='collection-iitem'><a className='collection-link' href="#" onClick={() => handleFilterChange('Kuz Kolleksiyasi')}>Kuzgi Kolleksiyalar</a></li>
                                <li className='collection-iitem'><a className='collection-link' href="#" onClick={() => handleFilterChange('all')}>Hammasi</a></li>
                            </ul>
                        </form>
                        <div className="count">
                            <p className='toplam-text'>To'plam</p>
                            <p>{indexOfFirstCard + 1} - {Math.min(indexOfLastCard, filteredCards.length)} tadan {filteredCards.length} koʻrsatilmoqda</p>
                        </div>
                    </div>

                    <div className="filter-select">
                        <form action="#">
                            <select name="name" id="id" onChange={(e) => handleFilterChange(e.target.value)}>
                                <option value="all">Ommobop</option>
                                <option value="Bahor Kolleksiyasi">Bahor Kolleksiyasi</option>
                                <option value="Qish Kolleksiyasi">Qish Kolleksiyasi</option>
                                <option value="Yoz Kolleksiyasi">Yoz Kolleksiyasi</option>
                                <option value="Kuz Kolleksiyasi">Kuz Kolleksiyasi</option>
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
                                className={currentPage === index + 1 ? 'active' : ''}
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
