import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search Ministries"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
    ></input>
  );
};

export default SearchBar;

