import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {useEffect, useState} from 'react';


const Gallery = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    fetch('/public/gallery/index.json')
      .then(res => res.json())
      .then(data => setImageFilenames(data));
  }, []);
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full">
        <section className="bg-primary px-2 mx-auto grid grid-cols-2 gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <h1 className="font-heading text-3xl pb-3 text-white text-center">Our Gallary</h1>
          <div className="grid-cols-2 gap-3">
            {imageFilenames.map((name, i) => (
              <img key={i} src={`../public/gallery/${name}`} alt={`Image ${i}`} style={{width: '100%'}} />
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
