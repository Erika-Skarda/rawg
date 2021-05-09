import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query'
import { getGameById} from '../../Api';

export default function GameCard({ game }) {
  const queryClient = useQueryClient()
  const [detailsData, setDetailsData] = useState(null);

  const selectedGame= () => {
    const videogame = `/game/:${game.id}`;
    return videogame;
  };

  const { 
    isLoading,
    data, 
    error
  } = useQuery('game', () => getGameById(game.id));
  
  setDetailsData(data)
  console.log(data)
  return (
    <div className='col-md-6'>
      <a href={selectedGame()}>
        <p>{game.name}</p>
    </a></div>
      
  );
}