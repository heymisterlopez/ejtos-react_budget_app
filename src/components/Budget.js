import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, spending, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleBudgetChange = (event) => {
        setNewBudget(Number(event.target.value));
    };

    const increaseBudget = () => {
        if (newBudget + 10 <= 20000) {
            setNewBudget(newBudget + 10);
        } else {
            alert("Budget cannot exceed 20000");
        }
    };

    const decreaseBudget = () => {
        if (newBudget - 10 >= spending) {
            setNewBudget(newBudget - 10);
        } else {
            alert("Budget cannot be lower than spending");
        }
    };

    const saveBudget = () => {
        if (newBudget <= 20000 && newBudget >= spending) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        } else if (newBudget > 20000) {
            alert("Budget cannot exceed 20000");
        } else if (newBudget < spending) {
            alert("Budget cannot be lower than spending");
        }
    };

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {selectedCurrency}
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                    onBlur={saveBudget}
                />
            </span>
            <button onClick={increaseBudget}>+</button>
            <button onClick={decreaseBudget}>-</button>
            <div>
                <label htmlFor="currency">Currency: </label>
                <select
                    id="currency"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    style={{ marginLeft: '10px' }}
                >
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
