
export function add (item) {
  return {
    type: 'ADD',
    item: item
  }
}

export function remove (index) {
  return {
    type: 'REMOVE',
    index: index
  }
}
