import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, Button, Icon, Select, Stack, TextField } from '@shopify/polaris'
import { DeleteMinor, InfoMinor } from '@shopify/polaris-icons'
import { useEffect } from 'react'
import { SampleConditions } from './constansts'

ConditionItem.propTypes = {
  formData: PropTypes.object,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  deletable: PropTypes.bool,
  resourceType: PropTypes.string,
}

ConditionItem.defaultProps = {
  formData: {},
  onChange: () => null,
  onDelete: () => null,
  deletable: false,
  resourceType: '',
}

function ConditionItem(props) {
  const { formData, onChange, onDelete, deletable, resourceType } = props
  const { type, field, fields, condition, conditions, value, values, error } = formData

  let _values =
    values.length > 0
      ? value
        ? values.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
        : values
      : []

  const handleChange = (name, value) => {
    let _formData = JSON.parse(JSON.stringify(formData))

    switch (name) {
      case 'field':
        _formData = SampleConditions[resourceType].find((item) => item.field === value)
        onChange(_formData)
        break

      default:
        _formData[name] = value
        onChange(_formData)
        break
    }
  }

  const renderTextField = () => {
    switch (type) {
      case 'date':
      case 'datetime':
        return (
          <TextField
            type="date"
            value={value}
            error={Boolean(error)}
            onChange={(value) => handleChange('value', value)}
          />
        )

      case 'number':
        return (
          <TextField
            type="number"
            value={value}
            error={Boolean(error)}
            onChange={(value) => handleChange('value', value)}
          />
        )

      case 'boolean':
        return (
          <Select
            options={values.map((item) => ({
              label: item.replace(/_/g, ' ').toLowerCase(),
              value: item,
            }))}
            value={value}
            error={Boolean(error)}
            onChange={(value) => handleChange('value', value)}
          />
        )

      default:
        return (
          <Autocomplete
            options={_values.map((item) => ({ label: item, value: item }))}
            selected={value ? [value] : []}
            onSelect={(values) => handleChange('value', values[0])}
            textField={
              <Autocomplete.TextField
                value={value}
                error={Boolean(error)}
                onChange={(value) => handleChange('value', value)}
                clearButton
                onClearButtonClick={() => handleChange('value', '')}
              />
            }
          />
        )
    }
  }

  return (
    <Stack vertical spacing="extraTight">
      <Stack spacing="extraTight">
        <Stack.Item fill>
          <Stack spacing="extraTight" distribution="fillEvenly">
            <Stack.Item fill>
              <Select
                value={field}
                options={fields.map((item) => ({
                  label:
                    item.replace(/_/g, ' ')[0].toUpperCase() +
                    item.replace(/_/g, ' ').slice(1).toLowerCase(),
                  value: item,
                }))}
                onChange={(value) => handleChange('field', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <Select
                value={condition}
                options={conditions.map((item) => ({
                  label: item.replace(/_/g, ' ').toLowerCase(),
                  value: item,
                }))}
                onChange={(value) => handleChange('condition', value)}
                disabled={type === 'boolean'}
              />
            </Stack.Item>
            <Stack.Item fill>{renderTextField()}</Stack.Item>
          </Stack>
        </Stack.Item>
        <Button icon={DeleteMinor} onClick={onDelete} disabled={!deletable} />
      </Stack>
      {Boolean(error) && (
        <div className="color__error">
          <Stack alignment="center" spacing="extraTight">
            <Icon source={InfoMinor}></Icon>
            <div>{error}</div>
          </Stack>
        </div>
      )}
    </Stack>
  )
}

export default ConditionItem
