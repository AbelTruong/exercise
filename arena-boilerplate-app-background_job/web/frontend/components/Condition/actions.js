import { SampleConditions } from './constansts'

export const generateConditionFormData = (resourceType) => {
  return {
    type: 'all',
    conditions: [
      {
        type: 'all',
        conditions: SampleConditions[resourceType].slice(0, 1),
      },
    ],
  }
}

export const convertFormDataToData = (formData) => {
  // check filters empty
  let isEmpty = true
  for (let i = 0; i < formData.conditions.length; i++) {
    for (let j = 0; j < formData.conditions[i].conditions.length; j++) {
      if (formData.conditions[i].conditions[j].value) {
        isEmpty = false
      }
    }
  }
  if (isEmpty) {
    return null
  }

  let data = JSON.parse(JSON.stringify(formData))

  for (let i = 0; i < data.conditions.length; i++) {
    for (let j = 0; j < data.conditions[i].conditions.length; j++) {
      const { type, field, condition, value } = data.conditions[i].conditions[j]

      data.conditions[i].conditions[j] = { field, condition, value }
    }
  }

  return data
}

export const convertDataToFormData = (data, resourceType) => {
  let formData = JSON.parse(JSON.stringify(data))

  let sampleCondition = null

  for (let i = 0; i < formData.conditions.length; i++) {
    for (let j = 0; j < formData.conditions[i].conditions.length; j++) {
      sampleCondition = SampleConditions[resourceType].find(
        (item) => item.field === formData.conditions[i].conditions[j].field
      )

      formData.conditions[i].conditions[j] = {
        ...formData.conditions[i].conditions[j],
        fields: sampleCondition.fields,
        conditions: sampleCondition.conditions,
        values: sampleCondition.values,
      }
    }
  }

  return formData
}

export const generateFilterString = (filter) => {
  const FilterTypes = {
    all: 'AND',
    any: 'OR',
  }

  let str = ``

  for (let i = 0; i < filter.conditions.length; i++) {
    str += str ? ` ${FilterTypes[filter.type]} ` : ``

    let _str = ``
    for (let j = 0; j < filter.conditions[i].conditions.length; j++) {
      let condition = filter.conditions[i].conditions[j]

      _str += _str ? ` ${FilterTypes[filter.conditions[i].type]} ` : ``
      _str += `(${condition.field} ${condition.condition} "${condition.value}")`
    }
    _str = `(${_str})`

    str += _str
  }

  return str
}
