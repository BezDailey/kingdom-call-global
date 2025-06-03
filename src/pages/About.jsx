import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderLanguages from '../../public/header-languages.jpeg';
import AboutOurStory from '../../public/about-our-story.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-light text-primary font-body flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full">
        {/* Our Mission */}
        <section className="bg-primary px-2 mx-auto grid grid-cols-2 gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div>
            <h1 className="font-heading text-white text-xl pb-2">Our Mission</h1>
            <p className="text-white">Our mission is to unite the disciples of Jesus Christ and usher in the manifestation of the Kingdom of God. Our goal is simple yet profound: to collaborate with spiritual leaders across communities, fostering unity and implementing transformative ideas for the greater good. Together, we strive to bring about positive change, empowering individuals and communities to embody the values of love, compassion, and justice. Join us on this inspiring journey towards collective growth and the realization of God's Kingdom on Earth.</p>
          </div>
          <img src={HeaderLanguages} />
        </section>

        {/* Our Story */}
        <section className="px-2 mx-auto grid grid-cols-2 gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <img src={AboutOurStory} />
          <div>
            <h1 className="font-heading text-xl pb-2">Our Story</h1>
            <p>Kingdom Call Global began as a vision to unify and amplify the voices of ministries across the world. Born from a passion for outreach, discipleship, and digital connection, our journey started with a simple goal: to create a central platform where ministries could share their mission, partner with others, and reach the nations with the Gospel. From local gatherings to international partnerships, we’ve grown into a thriving network driven by faith, collaboration, and a deep desire to see lives transformed by the love of Christ. Every event, every connection, and every story shared here is a testament to the power of unity in the Kingdom of God.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
