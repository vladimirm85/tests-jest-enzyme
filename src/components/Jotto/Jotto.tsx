import React from 'react';
import { Congrats } from './Congrats';
import { GuessedWords } from './GuessedWords';

export const Jotto = () => (
  <div>
    <Congrats success={true} />
    <GuessedWords />
  </div>
);
