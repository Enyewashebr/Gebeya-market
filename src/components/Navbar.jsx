import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center   text-black p-1 ">
      <div className="logo flex items-center ">
        <img
          src="/public/logo.png"
          alt="logo"
          className="w-10 h-10 "
        />
      </div>
      <div className="flex items-center gap-4 justify-between ">
        <div className="flex items-center gap-2 ">
          <img className="w-5 h-5" src="/src/assets/profile.png" alt="" />
          <h3>Register/Sign In</h3>
          <img className="w-4 h-4" src="/src/assets/down-arrow.png" alt="" />
        </div>
        <ul className="flex items-center gap-4 justify-between">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Men">Men</a>
          </li>
          <li>
            <a href="#Women">Women</a>
          </li>
          <li>
            <a href="#Kids">Kids</a>
          </li>
          <li>
            <a href="#Accessories">Accessories</a>
          </li>
          <div className="flex items-center gap-2">
            <h3>More</h3>
            <img className="w-4 h-4" src="/src/assets/down-arrow.png" alt="" />
          </div>
        </ul>
      </div>
      <div>
        <div className="flex items-center border border-gray-500 rounded-l-2xl gap-2 rounded-r-2xl border-1 h-9">
          <img className="w-5 h-4 pl-1" src="/src/assets/search.png " alt="" />
          <input className="w-30" type="text" placeholder="Search" />
          {/* <img
            className="w-10 p-2 bg-green-600 h-8 rounded-r-lg  !text-white"
            src="/src/assets/search-icon3.png"
            alt=""
          /> */}
          <svg
            className="w-15 h-9 bg-[#882BEC] p-1 rounded-r-2xl"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.75 19.9395L15.086 14.2755C16.4471 12.6415 17.1258 10.5456 16.981 8.42392C16.8361 6.30222 15.8789 4.31804 14.3084 2.88413C12.7379 1.45023 10.675 0.677001 8.54893 0.72531C6.42284 0.773618 4.39723 1.63974 2.89347 3.1435C1.38971 4.64726 0.523588 6.67288 0.475279 8.79896C0.42697 10.9251 1.2002 12.9879 2.6341 14.5584C4.06801 16.1289 6.05219 17.0862 8.17389 17.231C10.2956 17.3758 12.3914 16.6971 14.0255 15.336L19.6895 21L20.75 19.9395ZM1.99996 9C1.99996 7.66497 2.39585 6.35993 3.13754 5.2499C3.87924 4.13986 4.93345 3.2747 6.16685 2.76381C7.40025 2.25292 8.75745 2.11924 10.0668 2.37969C11.3762 2.64014 12.5789 3.28302 13.5229 4.22702C14.4669 5.17103 15.1098 6.37376 15.3703 7.68314C15.6307 8.99251 15.497 10.3497 14.9862 11.5831C14.4753 12.8165 13.6101 13.8707 12.5001 14.6124C11.39 15.3541 10.085 15.75 8.74996 15.75C6.96036 15.748 5.24463 15.0362 3.97919 13.7708C2.71375 12.5053 2.00195 10.7896 1.99996 9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div>search</div>
      <div>currency</div>
    </div>
  );
}

export default Navbar
