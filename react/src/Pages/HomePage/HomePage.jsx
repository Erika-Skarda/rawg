import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useQuery, useQueryClient } from 'react-query';
import { Link } from "react-router-dom";
import { getRawgApi } from '../../Api';
import Header from '../../Components/Header';
import GameCard from '../../Components/GameCard'
import styles from '../../Styles/Pages/Home.module.css';

export default function HomePage(props) {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(Number(1))

  let history = useHistory();

  function handleClick() {
    history.push(`/game`);
  }

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
          <div>Loading...</div>
        ) : status === 'error' ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            {data.results.map(game => (
              // <GameCard game={game} key={game.id}/>
              // <Link key={game.id} to={`/game/${game.id}`}>{game.name}</Link>
              <p key={game.id}>{game.name} <Link key={game.id} to={`/game/${game.id}`}>{game.id}</Link></p>
            ))}
          </div>
        )}
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 1}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            setPage(old => (data?.results ? old + 1 : old))
          }}
          disabled={isPreviousData || !data?.results}
        >
          Next Page
        </button>
        { isFetching ? <span> Loading...</span> : null }{' '}
        </div>
      </div> 
      </Fragment>
  )
};
