import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Savings: React.FC = () => {
  const { globalState } = useGlobalContext();

  return (
    <div>
      <h1>Ahorros</h1>
      <p>Estado global: {JSON.stringify(globalState)}</p>
    </div>
  );
};

export default Savings;