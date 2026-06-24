import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Expenses: React.FC = () => {
  const { globalState } = useGlobalContext();

  return (
    <div>
      <h1>Gastos</h1>
      <p>Estado global: {JSON.stringify(globalState)}</p>
    </div>
  );
};

export default Expenses;