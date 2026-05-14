import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light text-primarytext font-body flex flex-col">
      <Header />

      <main className="flex-grow w-full">
        <section className="kc-bg-navy flex flex-col items-center justify-center px-2 py-24 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <span className="kc-badge mb-6">404</span>
          <h1 className="kc-display kc-display--white text-center pb-4">
            Page Not Found
          </h1>
          <p className="kc-script text-center pb-8">
            Looks like this path leads somewhere we haven&apos;t been yet.
          </p>
          <Link className="kc-btn kc-btn--gold" to="/">
            Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
