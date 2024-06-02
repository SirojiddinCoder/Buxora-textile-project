import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Ensure the AOS styles are imported
import '../QishKolleksiya/QishKollleksiya.css';
import img1 from '../../assets/siteimg/1.jpg';
import img2 from '../../assets/siteimg/2.jpg';
import img3 from '../../assets/siteimg/3.jpg';
import img4 from '../../assets/siteimg/4.jpg';
import img5 from '../../assets/siteimg/5.jpg';
import img6 from '../../assets/siteimg/6.jpg';
import img7 from '../../assets/siteimg/7.jpg';
import img8 from '../../assets/siteimg/8.jpg';
import img9 from '../../assets/siteimg/9.jpg';
import img10 from '../../assets/siteimg/10.jpg';

const winterData = [
  { id: 1, img: img1, title: "Kvadratchalar" },
  { id: 2, img: img2, title: "Ikat" },
  { id: 3, img: img3, title: "Davralar" },
  { id: 4, img: img4, title: "Geometriya ko'k" },
  { id: 5, img: img5, title: "Tropik barglar" },
  { id: 6, img: img6, title: "Bambi" },
  { id: 7, img: img7, title: "Vizantiya" },
  { id: 8, img: img8, title: "Kechki bog'" },
  { id: 9, img: img9, title: "Pat Markiz" },
  { id: 10, img: img10, title: "Lavanda atirgullari" },
];

const QishKolleksiya = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // controls the speed of the animation
      once: true,  // ensures animation only happens once per element
    });
  }, []);

  const rows = [];
  for (let i = 0; i < winterData.length; i += 5) {
    rows.push(winterData.slice(i, i + 5));
  }

  return (
    <div className='wrapper'>
      <div className="winter-block">
        <h2 className='winter-title'>Qish kolleksiyasi</h2>
        <p className='winter-desc'>Buxoro tabiiy mahsuloti</p>
        {rows.map((row, rowIndex) => (
          <div className="winter-card-groups" key={rowIndex} data-aos="fade-up">
            {row.map((value) => (
              <div className="winter-card" key={value.id}>
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

export default QishKolleksiya;
