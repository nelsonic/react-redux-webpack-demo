import test from 'tape'
import groupBy from '../../src/lib/group-by.js'
import mockArr from '../mock.js'

test('groupBY should take an array and return a new array where duplicates have been removed', (t) => {
  const newArr = groupBy(mockArr, 'name')
  t.equal(newArr.length, 2, 'duplicates have been removed')
  t.equal(newArr[0].index.length, 2, 'the number property represents the number of duplicates')
  t.end()
})
