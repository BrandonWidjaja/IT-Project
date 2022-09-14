import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout1 = () => {
    return (
        <>
          <nav className='navi'>
              <Navbar />
          </nav>
          <div>
              <div className = "container">
                <Outlet />
              </div>
          </div>
          <div className = "background"></div>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <Footer/>
        </>
    )
  }
  
  const Layout2 = () => {
    return (
        <>
          <nav className='navi' style = {{backgroundColor: "transparent"}}>
              <Navbar />
          </nav>
          <div style = {{minHeight: "85vh"}}>
            <div className = "login-container">
              <Outlet/>
            </div>
          </div>
          <div className = "background2"> </div>
          <div className='circle3'></div>
          <div className='circle4'></div>
          <Footer/>
        </>
    )
  }

export {Layout1,Layout2};