let data = [
  {
    name: 'Japan',
  },
  {
    name: 'Argentina',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Ecuador',
  },
  {
    name: 'China',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Cape Verde',
  },
  {
    name: 'China',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Kyrgyzstan',
  },
  {
    name: 'Syria',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'Hungary',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'Bangladesh',
  },
  {
    name: 'China',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'China',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
  {
    name: 'Canada',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'China',
  },
  {
    name: 'Argentina',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Honduras',
  },
  {
    name: 'Philippines',
  },
  {
    name: 'Malaysia',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'China',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'Mexico',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'China',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'France',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'United States',
  },
  {
    name: 'Sweden',
  },
  {
    name: 'Uzbekistan',
  },
  {
    name: 'Ivory Coast',
  },
  {
    name: 'Mexico',
  },
  {
    name: 'Syria',
  },
  {
    name: 'Vietnam',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Dominican Republic',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Spain',
  },
  {
    name: 'Ethiopia',
  },
  {
    name: 'Pakistan',
  },
  {
    name: 'Iran',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'China',
  },
  {
    name: 'Czech Republic',
  },
  {
    name: 'Norway',
  },
  {
    name: 'Zambia',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'Japan',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Bahrain',
  },
  {
    name: 'Bosnia and Herzegovina',
  },
  {
    name: 'France',
  },
  {
    name: 'Portugal',
  },
  {
    name: 'China',
  },
  {
    name: 'France',
  },
  {
    name: 'Thailand',
  },
  {
    name: 'Brazil',
  },
  {
    name: 'China',
  },
  {
    name: 'Armenia',
  },
  {
    name: 'Vietnam',
  },
  {
    name: 'Indonesia',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Nicaragua',
  },
  {
    name: 'France',
  },
  {
    name: 'China',
  },
  {
    name: 'Peru',
  },
  {
    name: 'Iraq',
  },
  {
    name: 'Russia',
  },
  {
    name: 'Philippines',
  },
  {
    name: 'Ukraine',
  },
  {
    name: 'Netherlands',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
  {
    name: 'China',
  },
]

let _data = []
data.forEach((item) =>
  _data.map((_item) => _item.name).includes(item.name) ? null : _data.push(item),
)
data = _data

export default data
