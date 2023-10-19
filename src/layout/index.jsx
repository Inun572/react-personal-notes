import React, { Children } from 'react';
import Navbar from './Navbar';

const Layout = ({ onSearch, children }) => {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <main className="note-app__body">{children}</main>
    </>
  );
};

export default Layout;
