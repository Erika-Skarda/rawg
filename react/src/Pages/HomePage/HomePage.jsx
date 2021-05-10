import React, { Fragment, useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from "react-router-dom";
import useDarkMode from 'use-dark-mode';
import { getRawgApi } from '../../Api';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import GameCard from '../../Components/GameCard'
import styles from '../../Styles/Pages/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function HomePage(props) {
  const [page, setPage] = useState(Number(1));
  const { value } = useDarkMode(false);
  const queryClient = useQueryClient();
  const left = <FontAwesomeIcon icon={ faArrowAltCircleLeft} />;
  const right = <FontAwesomeIcon icon={faArrowAltCircleRight} />;

  const { 
    status, 
    data, 
    error, 
    isFetching, 
    isPreviousData 
  } = useQuery(
    ['games', page],
    () => getRawgApi(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  useEffect(() => {
    if (data?.results) {
      queryClient.prefetchQuery(['games', page + 1], () =>
      getRawgApi(page + 1)
      )
    }
  }, [data, page, queryClient]);

  return (
    <Fragment>
      <Header />
      <div className={styles.content}>
        <div>
          {status === 'loading' ? (
            <div></div>
          ) : status === 'error' ? (
            <div>Error: {error.message}</div>
          ) : (
            <Fragment>
              <div>
                {data.results.map(game => (
                  <GameCard game={game} key={game.id}/>
                ))}
              </div>
              <a
              type="button"
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                className={!value ? "btn btn-outline-dark mb-4" : "btn btn-outline-light mb-4"}
                disabled={page === 1}
              >
                <i>{left}</i> Previous Page 
              </a>{' '}
              <a
                type="button"
                className={!value ? "btn btn-outline-dark mb-4" : "btn btn-outline-light mb-4"}
                onClick={() => {
                  setPage(old => (data?.results ? old + 1 : old))
                }}
                disabled={isPreviousData || !data?.results}
              >
                Next Page <i>{right}</i>
              </a>
            </Fragment>
          )}
          { isFetching ? <span></span> : null }{' '}
          </div>
        </div> 
        <Footer/>
      </Fragment>
  )
};
