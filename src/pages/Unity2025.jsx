import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

import {useEffect, useState} from 'react';

// Imporing images for Unity Festival
import unityFestival from '../../public/unity-poster.jpeg';
import unityFestival2 from '../../public/unity-festival-2.jpg';
import unityFestival3 from '../../public/unity-festival-3.jpg';


const Unity2025 = () => {

  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <section className="bg-primary px-2 mx-auto flex flex-col gap-2 py-12 lg:py-16 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h1 className="font-heading text-3xl pb-6 text-white text-center">Unity Festival</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <img src={unityFestival} alt="Unity Festival" className="w-full mb-4" />
            <img src={unityFestival2} alt="Unity Festival 2" className="w-full mb-4" />
            <img src={unityFestival3} alt="Unity Festival 3" className="w-full mb-4" />
          </div>
        </section>
    </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Unity2025;

