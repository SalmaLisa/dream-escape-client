import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className=" mt-16">
      <div
        className="hero "
        style={{
          backgroundImage: `url("https://tourismteacher.com/wp-content/uploads/2020/09/pexels-photo-753626.jpeg?ezimgfmt=ngcb4/notWebP")`,
        }}
      >
        <div className="hero-overlay bg-black opacity-50 "></div>
        <Navbar></Navbar>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              className="mb-2 text-3xl font-bold"
              style={{ fontFamily: `'Satisfy', cursive` }}
            >
              Amazing Tour
            </h1>
            <h1 className="mb-5 text-6xl font-bold">Dream Escape</h1>
          </div>
        </div>
      </div>
      {/* <div className=" w-3/5 mx-auto">
        <ul className=" flex justify-center">
          <li>
            {" "}
            <Link className=" px-16 py-10 block border">Large</Link>
          </li>
          <li>
            {" "}
            <Link className=" px-16 py-10 block border">Large</Link>
          </li>
          <li>
            <Link className=" px-16 py-10 block border">Large</Link>
          </li>
          <li>
            <Link className=" px-16 py-10 block border">Large</Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
