import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderLanguages from '../../public/header-languages.jpeg';
import AboutOurStory from '../../public/about-our-story.jpg';
import UnityFestivalBanner from '../components/UnityFestivalBanner';

const About = () => {
  return (
    <div className="min-h-screen bg-light text-primary font-body flex flex-col">
      {/* Header */}
      <Header />
      <UnityFestivalBanner />

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
        <section className="px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 py-6 md:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <img src={AboutOurStory} />
          <div>
            <h1 className="font-heading text-xl pb-2">Our Story</h1>
            <p className="font-body pb-1">My name is Pastor Tina Bivins-Robinson, Founder and CEO of Kingdom Call Global, Inc. I am reaching out to introduce myself and to share some information about our global
movement. Born and raised in Miami, I embarked on a transformative journey in the fall of 1993 when I moved to Tampa to attend the University of South Florida. On this journey, I experienced life as a college student and matured to a wife and mother of two. Along the way, I honed various talents as I pursued careers in different
industries. I earned an MBA from the University of Miami and a Juris Doctorate from Western Michigan University Thomas M. Cooley Law School.</p>
<p className="font-body pb-1">Throughout, I have weathered periods of loss, sorrow, and disappointment, and have also embraced times of love, healing, deliverance, and ultimately the discovery of my purpose. In 2013, guided by the Holy Spirit, I was moved to
establish Kingdom Call Global, an organization that unites spiritual leaders from various faiths worldwide. Following deep prayer and thoughtful consultation, Kingdom Call Global was founded with a holy mission: "Uniting the disciples of Jesus Christ to bring manifestation of the Kingdom of God. " I am a firm believer in unity;
together, we can strengthen our collective voice and influence to address the pressing challenges our communities and society face. My goal is to foster respectful dialogue among spiritual leaders, promote joint efforts on projects, and most importantly, oversee the implementation of programs that provide significant benefits to the communities
we serve.</p>
<p className="font-body pb-1">
  With our united efforts, we can create a profound and enduring impact on the lives of those we are called to serve, embodying the teachings of God's Word and demonstrating His love, compassion, and justice. This year marks the  11th anniversary of our organization. While we have consistently hosted our annual luncheon to expand our network, we are now thrilled to embark on tangible community projects. Your wisdom, experience, and unique perspective are vital to this sacred mission, whether you're a Pastor, Apostle, Rabbi, Imam, Spiritual Teacher, or community leader. We would be honored to have you join us in the crucial endeavor of fortifying our community. Thus, I extend an invitation to you to partner with Kingdom Call Global, Inc., and join our expanding circle of influential leaders.
</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
