// import React from 'react'
// import './Navbar.css'
// import menuIcon from '../../assets/menu.png'
// import logo from '../../assets/logo.png'
// import searchIcon from '../../assets/search.png'
// import upload_icon from '../../assets/upload.png'
// import more_icon from '../../assets/more.png'
// import notification_icon from '../../assets/notification.png'
// import profile_Icon from '../../assets/jack.png'

// const Navbar = () => {
//   console.log("Navbar is rendering");
//   return (
    // <nav className='flex-div'>
    //   <div className='nav-left flex-div'>
    //     <img className='menu-icon' src={menuIcon} alt="" />
    //     <img className='logo' src={logo} alt="" />
    //   </div>

    //   <div className='nav-middle flex-div'>
    //     <div className="search-box flex-div">
    //       <input type="text" placeholder='Search' />
    //       <img src={searchIcon} alt="" />
    //     </div>

    //   </div>

    //   <div className='nav-right flex-div'>
    //     <img src={upload_icon} alt="" />
    //     <img src={more_icon} alt="" />
    //     <img src={notification_icon} alt="" />
    //     <img src={profile_Icon} className='user-icon' alt="" />
    //   </div>
      

    // </nav>
//   )
// }

// export default Navbar


import React from 'react';
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_Icon from '../../assets/Mishthi(3).jpg'
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  console.log("Navbar is rendering");

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menuIcon} alt="" />
        <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={searchIcon} alt="" />
        </div>

      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_Icon} className='user-icon' alt="" />
      </div>
      

    </nav>
  );
};

export default Navbar;
