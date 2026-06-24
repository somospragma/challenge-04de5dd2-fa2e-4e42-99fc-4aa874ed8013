import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/incomes">Ingresos</Link></li>
        <li><Link to="/expenses">Gastos</Link></li>
        <li><Link to="/savings">Ahorros</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;