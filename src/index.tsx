import React from 'react';
import Navigation from './components/Navigation';
import { GlobalProvider } from './contexts/GlobalContext';
import Incomes from './features/incomes/Incomes';
import Expenses from './features/expenses/Expenses';
import Savings from './features/savings/Savings';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div>
        <Navigation />
        <Incomes />
        <Expenses />
        <Savings />
      </div>
    </GlobalProvider>
  );
};

export default App;