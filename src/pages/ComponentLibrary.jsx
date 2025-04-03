import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import MinistryListing from '../components/MinistryListing';

const ComponentLibrary = () => {
  return (
    <div className="bg-white min-h-screen p-6 font-body text-primary flex flex-col gap-9">
      <section>
        <h2 className="font-heading text-sm mb-2">Buttons</h2>
        <div className='space-x-4'>
          <Button type='primary'>Primary Button</Button>
          <Button type='secondary'>Secondary Button</Button>
          <Button type='outline'>Outline Button</Button>
        </div>
      </section>
      <section>
        <h2 className="font-heading text-sm mb-2">Colors</h2>
        <div className='space-x-4 flex'>
          <div className='flex flex-col'>
            <div className='w-20 h-20 m-auto mb-2 rounded-full bg-primary'></div>
            <p className='text-xs m-auto'>#0F172A</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-20 h-20 m-auto mb-2 rounded-full bg-accent'></div>
            <p className='text-xs m-auto'>#FFD700</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-20 h-20 m-auto mb-2 rounded-full bg-light'></div>
            <p className='text-xs m-auto'>#F1F5F9</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-heading text-sm mb-2">Typography</h2>
        <p className="text-2xl font-heading mb-1">Heading</p>
        <p className="text-base font-body mb-1">Body</p>
        <p className="text-base font-heading mb-1">Caption</p>
      </section>
      <section>
        <h2 className="font-heading text-xs mb-2">Navigation</h2>
        <Header />
      </section>
      <section>
        <h2 className="font-heading text-sm mb-2">Various UI Elements</h2>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col px-16 gap-3'>
            <Button type='outline'>Discover Ministries</Button>
            <Button type='primary'>View Upcoming Events</Button>
          </div>
          <div className="my-auto">
            <SearchBar />
          </div>
          <div>
            <EventCard />
          </div>
          <div>
            <h1 className="font-heading text-xl text-center">Ministry Listing</h1>
            <MinistryListing />
            <MinistryListing />
            <MinistryListing />
            <MinistryListing />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentLibrary;
