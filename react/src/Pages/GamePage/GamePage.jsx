import React, { Fragment } from 'react';
import { useQuery } from 'react-query'
import { getGameById } from '../../Api';
import Header from '../../Components/Header';
import TitleGame from '../../Components/TitleGame';
import GameDetail from '../../Components/GameDetail';
import Loading from '../../Components/Loading';

export default function GamePage({ match }) {

  const {
    params: { id }
  } = match;

  const { 
    isLoading,
    data, 
    error
  } = useQuery('game', () => getGameById(id));

  if (isLoading) return (<><Header /><Loading/></>)

  if (error) return "An error has occurred: " + error.message;
  
  return (
    <Fragment>
      <Header />
      <main className='container'>
      <TitleGame info={data}>{(document.title = `${data.name} | Trending on RAWG`)}</TitleGame>
      <GameDetail info={data} id={id} />
      </main>
    </Fragment>
  );
}