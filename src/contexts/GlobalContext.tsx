import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const Incomes: React.FC = () => {
  const { globalState } = useGlobalContext();

  return (
    <div>
      <h1>Ingresos</h1>
      <p>Estado global: {JSON.stringify(globalState)}</p>
    </div>
  );
};

export default Incomes;