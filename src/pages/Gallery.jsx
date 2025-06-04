import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

import {useEffect, useState} from 'react';


const Gallery = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    fetch('/gallery/index.json')
      .then(res => res.json())
      .then(data => setImageFilenames(data));
  }, []);

  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <section className="bg-primary px-2 mx-auto flex flex-col gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h1 className="font-heading text-3xl pb-3 text-white text-center">Our Gallery</h1>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {imageFilenames.map((name, i) => (
              <img
                key={i}
                src={`/gallery/${name}`}
                alt={`Image ${i}`}
                className="w-full mb-3 rounded"
                style={{ display: 'block' }}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Gallery;
