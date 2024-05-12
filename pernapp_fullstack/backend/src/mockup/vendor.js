let data = [
  {
    name: 'gucci',
  },
  {
    name: 'dior',
  },
  {
    name: 'nike',
  },
  {
    name: 'adidas',
  },
  {
    name: 'samsung',
  },
  {
    name: 'nokia',
  },
  {
    name: 'acbook',
  },
  {
    name: 'apt2',
  },
  {
    name: 'fpt',
  },
  {
    name: 'vin',
  },
]

let _data = []
data.forEach((item) => {
  _data.map((_item) => _item.name).includes(item.name) ? null : _data.push(item)
})

data = _data

export default data
