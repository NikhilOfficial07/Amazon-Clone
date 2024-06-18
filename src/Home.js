import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt="" 
        />

        {/*Product id, title, price, rating , image*/}
    <div className="home__row">
        <Product
        id="1"
        title="Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera"
        price={11999}
        rating={5}
        image="https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg"
        />

       <Product
        id="2"
        title="Fire-Boltt Talk 2 Pro Ultra 1.39, Round Display Stainless Steel Luxury Smart Watch, Bluetooth Calling & 360 Health Monitoring, 123 Sports Modes, Inbuilt Voice Assistant (Black)"
        price={1399}
        rating={4}
        image="https://m.media-amazon.com/images/I/61Szdu3CaoL._SL1500_.jpg"
        />

    </div>

        <div className="home__row">
        <Product
        id="3"
        title="realme Buds T110 with Ai Enc for Calls, Upto 38 Hours of Playback and Fast Charging Bluetooth in Ear Headset (Punk Black, True Wireless)"
        price={1499}
        rating={5}
        image="https://m.media-amazon.com/images/I/61LKTD-YnrL._SY450_.jpg"
        />

    <Product
        id="4"
        title="C J Enterprise Women's Pure Kanjivaram Silk Saree Banarasi Silk Saree With Blouse Piece (paithani Pari122)"
        price={1499}
        rating={4}
        image="https://m.media-amazon.com/images/I/61FJVIxHU1L._SY550_.jpg"
        />

   <Product
        id="5"
        title="Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera"
        price={1476}
        rating={2}
        image="https://m.media-amazon.com/images/I/41ykC0f0VTL.jpg"
        />
        </div>

        <div className="home__row">
        <Product
        id="6"
        title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)"
        price={77990}
        rating={5}
        image="https://m.media-amazon.com/images/I/81MRU+3RJLL._SX450_.jpg"
        />
        </div>
    </div>
  )
}

export default Home