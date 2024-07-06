import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const remaining = budget - totalExpenses;

    return (
        <div className={`alert ${remaining < 0 ? 'alert-danger' : 'alert-success'}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;
