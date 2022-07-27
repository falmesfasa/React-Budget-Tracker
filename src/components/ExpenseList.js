import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12344, name: 'Shopping', cost:50 },
        { id: 12344, name: 'Holiday', cost:300 },
        { id: 12344, name: 'Transportation', cost:50 },
        { id: 12344, name: 'Fuel', cost:40 },
        { id: 12344, name: 'Child Care', cost:500 },
    ];

    return (
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    );
}

export default ExpenseList;