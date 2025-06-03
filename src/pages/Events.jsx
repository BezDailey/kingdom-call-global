import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityPoster from '../../public/unity-poster.jpeg';
import Button from '../components/Button';

const Events = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="grid grid-cols-2">
        <div className="pt-10">
          <div className=" w-2/3 mx-auto flex flex-col bg-accent p-10 rounded justify-center text-center">
            <p>Starts In:</p>
            <h1>00:00:00</h1>
            <Button type="outline">Sign up</Button>
          </div>
        </div>
        <img src={UnityPoster} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
