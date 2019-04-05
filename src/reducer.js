import { Map, fromJS } from 'immutable';

const initialData = fromJS({
  todos: [
    { id: 1, text: 'React', status: 'active', editing: false, price: 10},
    { id: 2, text: 'Redux', status: 'active', editing: false, price: 20 },
    { id: 3, text: 'Immutable Js', status: 'active', editing: false, price: 30 },
    { id: 4, text: 'Nguyen Dang Khoa', status: 'active', editing: false, price: 40 },
  ],
  filter: "all"
});

const initialState = fromJS({
  todos: [],
  filter: ""
})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE': // khoi tao cac state ban dau cua reducer . viec nay se dc dispatch khi khoi tao store
     return state.merge(initialData)

    case 'TOGGLE_COMPLETE':
      // thay doi trang thai cua item : active=> complete va nguoc lai.
      return state.update('todos', function (list) {
        const item_id = list.findIndex((todo) => {
          return todo.get('id') === action.itemId;
        })
        return list.updateIn([item_id, "status"], status => {
          return status === "active" ? "completed" : "active"
        })
      })

    case 'CHANGE_FILTER':
      return state.set('filter', action.filter)

    case 'EDIT_ITEM':
      const item_index = state.get('todos').findIndex(todo => todo.get('id') === action.itemId)
      return state.updateIn(["todos", item_index], item => item.set('editing', true))

    case 'CANCEL_EDITING':
      const index = state.get('todos').findIndex(todo => todo.get('id') === action.itemId)
      const data = state.updateIn(["todos", index], item => item.set('editing', false))
      console.log(data);
      break;

    case 'DONE_EDITING':
      const index_item = state.get('todos').findIndex(todo => todo.get('id') === action.itemId);
      const item_update = state.get('todos').get(index_item).set('text', action.newText).set('editing', false);
      return state.update('todos', todos => todos.set(index_item, item_update))

    case 'CLEAR_COMPLETED':
      return state.update('todos', todos => {
        return todos.filter((todo) => {
          return todo.get('status') !== 'completed'
        })
      })

    case 'ADD_ITEM':
      const item_id = state.get('todos').reduce((maxId, item) => {
        return Math.max(maxId, item.get('id'))
      }, 0) + 1;
      const todo = {
        id: item_id,
        text: action.text,
        status: "active",
        editing: false
      }
      return state.update('todos', todos => todos.push(fromJS(todo)))

    case 'DELETE_ITEM':
      return state.update('todos', todos => {
        return todos.filter((todo) => {
          return todo.get('id') !== action.itemId
        })
      })
  }
  return state;
}
