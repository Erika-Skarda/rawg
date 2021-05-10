import React, { useState, useEffect, useCallback } from 'react';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import useDarkMode from 'use-dark-mode';
import logo from '../../Assets/LogoG.png';
import { Link } from "react-router-dom";

export default function Header() {
  const [data, setData] = useState(null);
  const { value } = useDarkMode(false);
  const [dataIsReady, setDataIsReady] = useState(false);

  const getRandomImage = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3333/');
      const json = await response.json();
      setData(json);
      setDataIsReady(true);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getRandomImage();
  }, [getRandomImage]);

  const getBackground = () => {
    const backgroundPath = data.background_image;
    let background;
    if (window.innerWidth > 1024) {
      background = backgroundPath.match(/media\/screenshots/)
        ? backgroundPath.replace('media/screenshots', 'media/resize/1280/-/screenshots')
        : backgroundPath.replace('media/games', 'media/resize/1280/-/games');
    } else {
      background = backgroundPath.match(/media\/screenshots/)
        ? backgroundPath.replace('media/screenshots', 'media/resize/420/-/screenshots')
        : backgroundPath.replace('media/games', 'media/resize/420/-/games');
    }
    return background;
  };

  const imagePlacement =  (dataIsReady && !value)
    ? 'linear-gradient(0deg, white 0%, rgba(52,58,64,0) 100%), url(' + getBackground() + ')'
    : (dataIsReady && value) ? 'linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(52,58,64,0) 100%), url(' + getBackground() + ')'
    : 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)';

  return (
    <nav
      className='bg-dark pb-3 sticky-top' 
      style={{
        backgroundImage: imagePlacement,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <header className='container text-white'>
        <div className='row justify-content-md-center'>
          <div className='col my-2'>
            <Link to='/home'>
              <img className='img-fluid text-center resized-logo' src={logo} alt='logo' />
            </Link>
          </div>
          <div className='col-md-auto col-12 align-self-end order-1 order-md-0'>
          </div>
          <div className='col-auto col-mob align-self-center mt-5'>
            <DarkModeToggle />
          </div>
        </div>
      </header>
    </nav>
  );
}