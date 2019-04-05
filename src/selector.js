import { createSelector } from 'reselect';
const getTodos = (state) => state; // ham nay lay ra state

export  const totalPriceSelector = createSelector(
    getTodos,
    (todos) => todos.get('todos').reduce((acc, item) => acc + item.get('price'), 0)
)