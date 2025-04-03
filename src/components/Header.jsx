import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex flex-col w-full bg-white'>
      <div className='text-center m-auto mb-2'>
        <h1 className='font-heading text-3xl'>KINGDOM CALL GLOBAL</h1>
      </div>
      <div className="flex flex-row justify-center gap-4 font-body">
        <Link className="hover:text-accent">Home</Link>
        <Link className="hover:text-accent">About</Link>
        <Link className="hover:text-accent">Events</Link>
        <Link className="hover:text-accent">Past Events</Link>
        <Link className="hover:text-accent">Partnerships</Link>
        <Link className="hover:text-accent">Ministries</Link>
        <Link className="hover:text-accent">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
