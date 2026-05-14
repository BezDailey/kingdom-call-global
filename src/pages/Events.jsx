import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityPoster from '../../public/unity-poster.jpeg';
import Button from '../components/Button';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const Events = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col bg-accent p-10 rounded justify-center text-center">
            <p className="text-primarytext">Starts In:</p>
            <h1 className="font-heading text-3xl text-primary py-2">00:00:00</h1>
            <Button type="outline">Sign up</Button>
          </div>
          <img src={UnityPoster} className="w-full rounded object-cover" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
