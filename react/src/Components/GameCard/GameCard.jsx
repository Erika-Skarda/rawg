import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { Link } from "react-router-dom";

export default function GameCard({ game }) {

  return (
    <Link key={game.id} to={`/game/${game.id}`}>
      <p> 🎮 {game.name} </p>   
    </Link>
  );
}