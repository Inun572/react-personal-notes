import React from 'react';

const Navbar = ({ onSearch }) => {
  return (
    <header className="note-app__header">
      <h1>
        My<span>Notes</span>
      </h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Search Note..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar;
