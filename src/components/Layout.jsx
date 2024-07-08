import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/video.mp4'

function Layout({children}) {

    const [menu, setMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const wind = isMobile ? { top: '0'} : { right: '0' }
  const step = isMobile ? { top: '-113px'} : {right: '-113px'}
  const style = menu === true ? step : wind

  return (
    <div className='Layout'>
      <div className='container-video'>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className='name' style={ (menu === false && isMobile === true) ? {top: '130px'}: null }>Xavier Coll</div>
      {children}
      <div className='Menu' style={ style }>
        <div className = 'toggle' style={menu === false? {transform:'rotate(-180deg)'} : null}onClick={() => {setMenu(!menu)}}></div>
        <nav>
        <div className='icon-home'><Link to="/" className='icon'></Link></div>
        <div className='icon-skills'><Link to="/skills" className='icon'></Link></div>
        <div className='icon-project'><Link to="/projects" className='icon'></Link></div>
        </nav>
      </div>
    </div>
  )
}

export default Layout