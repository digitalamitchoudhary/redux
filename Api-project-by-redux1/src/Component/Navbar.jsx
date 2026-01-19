import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex p-4 bg-[#002092]/50 justify-center">
      <div className="w-[90%] p-4 h-16 flex  items-center justify-between">
        <div className="text-white text-[25px]">
          
          <Link to="/">Media Search</Link>
        </div>

        <div className="btn flex gap-4">
     
          <Link to="/" className="bg-white rounded text-black py-2 px-5">
            Search
          </Link>
          <Link
            to="/collection"
            className="bg-white rounded text-black py-2 px-5"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
