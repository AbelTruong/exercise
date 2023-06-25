import slices from './../slices'

let reducer = {}

Object.keys(slices).forEach((key) => (reducer[key] = slices[key].reducer))

export default reducer
