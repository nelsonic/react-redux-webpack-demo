/*
  * This function takes an array and property and returns a new array of objects
  * Objects with the same property are only represented once
  * The counter represents the position of each uniq object in the new array
*/

export default (array, prop) => {

  let properties = {}
  let counter = -1

  return array.reduce((previouse, current, index) => {

    let groupByProp = current[prop]
    let currentIndex = properties[groupByProp]

    if (typeof currentIndex === 'undefined') {
      counter = counter + 1
      properties[groupByProp] = counter 
      current['index'] = [index]
      previouse.push(current)
    } else {
      previouse[currentIndex].index.push(index)
    }
    return previouse
  }, [])
}
