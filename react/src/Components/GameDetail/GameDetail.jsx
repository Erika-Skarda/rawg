import React, { Fragment } from 'react';
import { useQuery } from 'react-query'
import dompurify from 'dompurify';
import { getDevelopers } from '../../Api';
import styles from '../../Styles/Components/GameDetail.module.css';

export default function GameDetail({ info, id }) {
  const { 
    status, 
    data, 
    error, 
  } = useQuery('developer', () => getDevelopers(id));

  const getBackground = () => {
    try {
      let background;
     info.background_image_additional ? (background = info.background_image_additional) : (background =info.background_image);

      if (background) {
        background.match(/media\/screenshots/)
          ? (background = background.replace('media/screenshots', 'media/crop/600/400/screenshots'))
          : (background = background.replace('media/games', 'media/crop/600/400/games'));
      }
      return background;
    } catch (e) {
      console.error(e);
    }
  };

  const getPoster = () => {
    try {
      let poster;
      if (info.background_image) {
       info.background_image.match(/media\/screenshots/)
          ? (poster = info.background_image.replace('media/screenshots', 'media/crop/600/400/screenshots'))
          : (poster = info.background_image.replace('media/games', 'media/crop/600/400/games'));
      }
      return poster;
    } catch (e) {
      console.error(e);
    }
  };

  const bgImage = getBackground()
    ? 'linear-gradient(rgba(0,0,0,.8), rgba(52,58,64,.8)), url(' + getBackground() + ')'
    : 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)';

  return (
    <main
      id='gameDetails'
      className='col text-light rounded'
      style={{ backgroundImage: bgImage }}
    >
      <img src={getPoster()} alt='poster' style={{width: "100%"}}/>

      <article id='overview' className='col my-3'>
        <div className='p-4'>
          <h4>Overview:</h4>
          <p className='mb-2' dangerouslySetInnerHTML={{ __html: dompurify.sanitize(info.description)}}></p>
        </div>
        <div>
        {status === 'loading' ? (
          <div>Loading...</div>
          ) : status === 'error' ? (
          <div>Error: {error.message}</div>
          ) : (
            <Fragment>
              {data.count > 0 ? (
                <Fragment>
                  <ul className='row list-unstyled list-group p-4 list-group-horizontal'>
                  <h4>Developers:</h4>
                    {data.results.map((dev, index) => (
                      <li key={index} className='col my-3 mx-3'>
                        {dev.image? (
                          <img
                            className={`mr-3 rounded-circle ${styles.avatar}`}
                            alt={dev.name}
                            src={
                              dev.image.match(/media\/persons_wiki/)
                                ? dev.image.replace('media/persons_wiki', 'media/resize/200/-/persons_wiki')
                                : dev.image.replace('media/persons', 'media/resize/200/-/persons')
                            }
                          />
                        ) : (
                          <div className='mr-3'>
                            <svg width='100' height='100'>
                              <circle cx='45' cy='45' r='45' fill='#555' />
                            </svg>{' '}
                          </div>
                        )}
                        <div className='media-body'>
                          <h5 className='mt-0 mb-1'>{dev.name}</h5>
                          {dev.positions.map((position, index) => (
                            <small key={index}>{`${index ? ', ' : ''} ${position.name}`}</small>
                          ))}
                        </div>
                        </li>
                      ))}
                  </ul>
                </Fragment>
              ) : null} 
          </Fragment> 
         )}
        </div>
      </article>
    </main>
  );
}