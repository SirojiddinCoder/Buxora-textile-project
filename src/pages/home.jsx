import React from 'react'
import Navbar from '../Components/Navbar/navbar';
import AboutCard from '../Components/AboutCard/AboutCard';
import QishKollleksiya from '../Components/QishKolleksiya/QishKollleksiya';
import KuzKolleksiya from '../Components/KuzKolleksiya/KuzKolleksiya';
import Yangiliklar from '../Components/News/Yangiliklar';
import Footer from '../Components/Footer/Footer';
import NavbarHome from '../Components/Navbar/NavbarHome/NavbarHome';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarHome />
      <AboutCard images1={true} />  
      {/* <QishKollleksiya />
      <AboutCard /> 
      <KuzKolleksiya />
      <AboutCard images3={true} /> 
      <KuzKolleksiya Yoz={true} />
      <Yangiliklar />
      <Footer /> */}
    </div>
  )
}

export default Home;