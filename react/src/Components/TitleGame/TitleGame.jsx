import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { faNeos } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

export default function TitleGame({ info }) {
  const playStation = <FontAwesomeIcon icon={faPlaystation} />;
  const xBox = <FontAwesomeIcon icon={faXbox} />;
  const nintendo = <FontAwesomeIcon icon={faNeos} />;
  const pc = <FontAwesomeIcon icon={faDesktop} />;
  const mac = <FontAwesomeIcon icon={faApple} />;
  const linux = <FontAwesomeIcon icon={faLinux} />;
  const ios = <FontAwesomeIcon icon={faMobileAlt} />;
  const android = <FontAwesomeIcon icon={faAndroid} />;

  const getReleaseYear = () => {
    return info.released ? info.released.match(/[0-9]{4}/) : null;
  };

  const getPlatform = (game) => {
    switch (game) {
      case ('playstation') :
        return <i>{playStation}</i>
      case 'xbox':
        return <i>{xBox}</i>
      case 'pc':
        return <i>{pc}</i>
      case 'nintendo':
        return <i>{nintendo}</i>
      case 'mac':
        return <i>{mac}</i>
      case 'linux':
        return <i>{linux}</i>
      case 'ios':
        return <i>{ios}</i>
      case 'android':
        return <i>{android}</i>
      default:
        console.log(`Without image`);
    }
  };

  return (
    <header id='title' border-bottom='1px' solid='#000'>
      <h2 className='display-4 mt-2' id='title' display='inline'>
        {info.name}
        <span className='lead'> ({getReleaseYear()}) </span>
      </h2>
      <section id='platform'>
        {info.parent_platforms.map((platform, index) => (
          <span key={index} className='ms-2'>
            {getPlatform(platform.platform.slug)}
          </span>
        ))}
      </section>
       {info.genres.length < 1 ? (
        <section id='genres' className='my-2'>
          {' '}
        </section>
      ) : (
        <section id='genres' className='my-2'>
          {info.genres.map((genre, index) => (
            <div key ={index} className="badge rounded-pill bg-dark ms-2">
              {genre.name}
            </div>
          ))}
        </section>
      )}
    </header>
  );
}