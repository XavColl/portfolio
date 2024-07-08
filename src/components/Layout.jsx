import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import video from '../assets/video.mp4'

function Layout({children}) {

    const [menu, setMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const url =useLocation().pathname.split('/')
    const page = url[url.length - 1]
    console.log(url)

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

  useEffect(() => {
    if(menu === false) {
      const timer = setTimeout(() => {
        setMenu(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [menu])

  const wind = isMobile ? { top: '0'} : { right: '0' }
  const step = isMobile ? { top: '-83px'} : {right: '-103px'}
  const style = menu === true ? step : wind

  return (
    <div className='Layout'>
      <div className='container-video'>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className='name' style={ (menu === false && isMobile === true) ? {top: '90px'}: null }>Xavier Coll</div>
      {children}
      <div className='Menu' style={ style }>
        <div className = 'toggle' style={menu === false? {transform:'rotate(-180deg)'} : null}onClick={() => {setMenu(!menu)}}></div>
        <nav>
          <div className='icon-home'  style={page === 'portfolio' ? {backgroundColor: 'rgba(255,245,235,0.5)', borderRadius: '5px'} : null}  ><Link to="/portfolio" className='icon'></Link></div>
          <div className='icon-skills'   style={page === 'skills' ? {backgroundColor: 'rgba(255,245,235,0.5)', borderRadius: '5px'} : null}  ><Link to="/portfolio/skills" className='icon'></Link></div>
          <div className='icon-project'  style={page === 'projects' ? {backgroundColor: 'rgba(255,245,235,0.5)'  , borderRadius: '5px'} : null}  ><Link to="/portfolio/projects" className='icon'></Link></div>
        </nav>
      </div>
    </div>
  )
}

export default Layout