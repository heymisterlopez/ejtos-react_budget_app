import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti'; // For the delete icon
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'; // For the increase and decrease icons

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FaPlusCircle size='1.5em' color="green" onClick={increaseAllocation} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <FaMinusCircle size='1.5em' color="red" onClick={decreaseAllocation} style={{ cursor: 'pointer' }} />
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} style={{ cursor: 'pointer' }} /></td>
        </tr>
    );
};

export default ExpenseItem;
