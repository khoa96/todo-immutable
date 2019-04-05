export function toggleComplete(itemId) {
  return {
    type: 'TOGGLE_COMPLETE',
    itemId
  }
}
// thay doi trang thai cua 1 item {active hoac complete}

export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}
// chuc nang filter.


// chuc nang edit
export function editItem(itemId) {
  return {
    type: 'EDIT_ITEM',
    itemId
  }
}

// khi eidt thanh cong ( hai tham so la id cua item va text moi)
export function doneEditing(itemId, newText) {
  return {
    type: 'DONE_EDITING',
    itemId,
    newText
  }
}

// khong edit nua
export function cancelEditing(itemId) {
  return {
    type: 'CANCEL_EDITING',
    itemId
  }
}

// xoa bo tat ca trang thai  complete  cua item ve active
export function clearCompleted() {
  return {
    type: 'CLEAR_COMPLETED'
  }
}

// xoa 1 item id
export function deleteItem(itemId) {
  return {
    type: 'DELETE_ITEM',
    itemId
  }
}

// them 1 item ( co tham so la text)
export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text
  }
}
