import React from "react";
import Link from "next/link";
import SearchIcon from "./SearchIcon";

const Header = () => {
  return (
    <header className="bg-green mb-2">
      <div className="px-4 pt-5 pb-4">
        <div className="flex justify-between items-center">
          <h1>Mølle Prep</h1>
          <Link href="/" aria-label="Søg efter opskrift">
            <SearchIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
