import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import MinistryListing from '../components/MinistryListing';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

// Importing images for the header
import header from '../../public/header-banner.jpg';
import home1 from '../../public/home_1.jpg';
import home2 from '../../public/home_2.jpg';
import home3 from '../../public/home_3.jpg';
import home4 from '../../public/home_4.jpg';
import home5 from '../../public/home_5.jpg';
import home6 from '../../public/home_6.jpg';
import home7 from '../../public/home_7.jpg';
import home8 from '../../public/home_8.jpg';

// Home component

const Home = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* Hero */}
        <section
        className="relative w-full flex flex-col items-center bg-center bg-no-repeat py-8 h-96 justify-center px-2 md:px-6 lg:px-2 xl:px-16 2xl:px-24"
          style={{ 
            backgroundImage: `url(${header})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
        </section>

        {/* Featured Ministries */}
        {/*
        <section className="px-2 mx-auto grid gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h2 className="font-heading text-xl pb-2">Featured Ministries</h2>
          <SearchBar />
          <div className='grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <MinistryListing />
            <MinistryListing />
            <MinistryListing />
            <MinistryListing />
          </div>
        </section>
        */}

        {/* Mission */}
        <section className="px-2 bg-primary mx-auto grid gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h2 className="font-heading text-xl pb-2 text-white">Mission</h2>
          <p className='text-white'>Our mission is to unite the disciples of Jesus Christ and usher in the manifestation of the Kingdom of God. Our goal is simple yet profound: to collaborate with spiritual leaders across communities, fostering unity and implementing transformative ideas for the greater good. Together, we strive to bring about positive change, empowering individuals and communities to embody the values of love, compassion, and justice. Join us on this inspiring journey towards collective growth and the realization of God's Kingdom on Earth.</p>
        </section>

        {/* Gallary */}
        <section className="px-2 mx-auto grid gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          {/* <h2 className="font-heading text-xl pb-2">Gallary</h2> */}
          <div className='columns-1 gap-4 pt-4 md:columns-2 lg:columns-3 xl:columns-4'>
            <img src={home1} className="w-full mb-4" />
            <img src={home2} className="w-full mb-4" />
            <img src={home3} className="w-full mb-4" />
            <img src={home4} className="w-full mb-4" />
            <img src={home5} className="w-full mb-4" />
            <img src={home6} className="w-full mb-4" />
            <img src={home7} className="w-full mb-4" />
            <img src={home8} className="w-full mb-4" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
