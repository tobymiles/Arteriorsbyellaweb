import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <div className='Navbar'>
      <span className='nav-logo'>Arteriorsbyella</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to='/'>Home</Link>
        <HashLink to={"/#about"}>About Us</HashLink>
        <HashLink to={"/#service"}>Services</HashLink>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/singleblog'></Link>
        <button
          className='btn-nav'
          onClick={() => {
            Navigate("/contact");
          }}
        >
          Contact
        </button>
      </div>
      <div className='social-icons'>
        <svg
          width='38'
          height='39'
          viewBox='0 0 38 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='0.5' width='38' height='38' rx='4' fill='#FDD4B2' />
          <path
            d='M19.0037 15.4571C16.7678 15.4571 14.9643 17.2606 14.9643 19.4965C14.9643 21.7325 16.7678 23.536 19.0037 23.536C21.2396 23.536 23.0432 21.7325 23.0432 19.4965C23.0432 17.2606 21.2396 15.4571 19.0037 15.4571ZM19.0037 22.1227C17.5588 22.1227 16.3775 20.945 16.3775 19.4965C16.3775 18.0481 17.5553 16.8704 19.0037 16.8704C20.4521 16.8704 21.6299 18.0481 21.6299 19.4965C21.6299 20.945 20.4486 22.1227 19.0037 22.1227ZM24.1506 15.2918C24.1506 15.8157 23.7287 16.234 23.2084 16.234C22.6846 16.234 22.2662 15.8122 22.2662 15.2918C22.2662 14.7715 22.6881 14.3497 23.2084 14.3497C23.7287 14.3497 24.1506 14.7715 24.1506 15.2918ZM26.826 16.2481C26.7662 14.986 26.4779 13.868 25.5533 12.9469C24.6322 12.0258 23.5143 11.7375 22.2521 11.6743C20.9514 11.6004 17.0525 11.6004 15.7518 11.6743C14.4932 11.734 13.3752 12.0223 12.4506 12.9434C11.526 13.8645 11.2412 14.9825 11.1779 16.2446C11.1041 17.5454 11.1041 21.4442 11.1779 22.745C11.2377 24.0071 11.526 25.125 12.4506 26.0461C13.3752 26.9672 14.4896 27.2555 15.7518 27.3188C17.0525 27.3926 20.9514 27.3926 22.2521 27.3188C23.5143 27.259 24.6322 26.9708 25.5533 26.0461C26.4744 25.125 26.7627 24.0071 26.826 22.745C26.8998 21.4442 26.8998 17.5489 26.826 16.2481ZM25.1455 24.1407C24.8713 24.8297 24.3404 25.3606 23.6479 25.6383C22.6107 26.0497 20.1498 25.9547 19.0037 25.9547C17.8576 25.9547 15.3932 26.0461 14.3596 25.6383C13.6705 25.3641 13.1396 24.8333 12.8619 24.1407C12.4506 23.1036 12.5455 20.6426 12.5455 19.4965C12.5455 18.3504 12.4541 15.886 12.8619 14.8524C13.1361 14.1633 13.667 13.6325 14.3596 13.3547C15.3967 12.9434 17.8576 13.0383 19.0037 13.0383C20.1498 13.0383 22.6143 12.9469 23.6479 13.3547C24.3369 13.629 24.8678 14.1598 25.1455 14.8524C25.5568 15.8895 25.4619 18.3504 25.4619 19.4965C25.4619 20.6426 25.5568 23.1071 25.1455 24.1407Z'
            fill='#755B4D'
          />
        </svg>
        {/*-----Instagram Icon Ends------*/}
        {/*----- Facebook Icon Starts------*/}
        <svg
          width='38'
          height='39'
          viewBox='0 0 38 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='0.5' width='38' height='38' rx='4' fill='#FDD4B2' />
          <path
            d='M23.1885 20.625L23.6884 17.3674H20.5627V15.2535C20.5627 14.3623 20.9993 13.4936 22.3992 13.4936H23.8202V10.7201C23.8202 10.7201 22.5307 10.5 21.2978 10.5C18.7236 10.5 17.0411 12.0602 17.0411 14.8847V17.3674H14.1797V20.625H17.0411V28.5H20.5627V20.625H23.1885Z'
            fill='#755B4D'
          />
        </svg>

        <svg
          width='38'
          height='39'
          viewBox='0 0 38 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='0.5' width='38' height='38' rx='4' fill='#FDD4B2' />
          <path
            d='M26.1497 15.8338C26.1612 15.9937 26.1612 16.1536 26.1612 16.3135C26.1612 21.1904 22.4492 26.8097 15.665 26.8097C13.5749 26.8097 11.6333 26.2043 10 25.1536C10.297 25.1879 10.5825 25.1993 10.8909 25.1993C12.6154 25.1993 14.203 24.6168 15.4708 23.6232C13.849 23.5889 12.4898 22.5267 12.0216 21.0648C12.25 21.099 12.4784 21.1219 12.7183 21.1219C13.0495 21.1219 13.3807 21.0762 13.6891 20.9963C11.9987 20.6536 10.7309 19.1688 10.7309 17.3757V17.33C11.222 17.6041 11.7931 17.7755 12.3984 17.7983C11.4048 17.1358 10.7538 16.0051 10.7538 14.7259C10.7538 14.0407 10.9365 13.4125 11.2563 12.8643C13.0723 15.1028 15.802 16.5647 18.8629 16.7247C18.8058 16.4506 18.7715 16.1651 18.7715 15.8795C18.7715 13.8465 20.4162 12.1904 22.4606 12.1904C23.5228 12.1904 24.4822 12.6359 25.156 13.3554C25.9898 13.1955 26.7893 12.8871 27.4974 12.4645C27.2233 13.3212 26.6408 14.0407 25.8756 14.4975C26.618 14.4176 27.3375 14.212 27.9999 13.9265C27.4975 14.6574 26.8693 15.3084 26.1497 15.8338Z'
            fill='#755B4D'
          />
        </svg>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bar'></div>
      </div>
    </div>
  );
};

export default Navbar;
