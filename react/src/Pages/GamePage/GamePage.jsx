import React from 'react';

export default function GamePage({ match }) {
  const {
    params: { id }
  } = match;
  return (
    <div className='col-md-6'>
      página de detalhes {id}
    </div>
  );
}