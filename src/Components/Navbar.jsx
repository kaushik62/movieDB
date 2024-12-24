import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MovieDB</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
