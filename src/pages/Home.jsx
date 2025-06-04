import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import MinistryListing from '../components/MinistryListing';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

// Importing images for the header
import header from '../../public/header-banner.jpg';

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
          <div className='grid grid-cols-1 gap-4 pt-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/1R7A2580.jpg/:/rs=w:740,cg:true,m" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/DSCN4541.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:740,cg:true" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/1R7A2582.jpg/:/cr=t:0%25,l:5.55%25,w:88.91%25,h:88.91%25/rs=w:740,cg:true,m" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/1R7A2573.jpg/:/rs=w:740,cg:true,m" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/DSCN4532.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:740,cg:true" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/1R7A2578.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:740,cg:true" />
            <img src="https://img1.wsimg.com/isteam/ip/71f1264f-d92b-4910-b43a-96d18f952c69/DSCN4558.JPG/:/rs=w:740,cg:true,m" />
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
