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
import styles from '../../Styles/Components/TitleGame.module.css';

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
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{playStation}</i>
          </a>
        );
      case 'xbox': 
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{xBox}</i>
          </a>
        );
      case 'pc':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{pc}</i>
          </a>
        );
      case 'nintendo':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{nintendo}</i>
          </a>
        );
      case 'mac':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{mac}</i>
          </a>
        );
      case 'linux':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{linux}</i>
          </a>
        );
      case 'ios':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{ios}</i>
          </a>
        );
      case 'android':
        return (
          <a data-bs-toggle="tooltip" data-bs-placement="top" title={game}>
            <i>{android}</i>
          </a>
        );
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
      
      <div className={styles.div}>
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
        {info.metacritic !== null && (
          <section id='metacritic' className='my-2'>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title='metascore'>
              <ul className={styles.ul}>
                <li>{info.metacritic}</li>
              </ul>
            </a>
          </section>
        )}
      </div>
 
    </header>
  );
}