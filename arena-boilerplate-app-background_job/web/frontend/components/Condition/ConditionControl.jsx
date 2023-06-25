import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Card, RadioButton, Stack } from '@shopify/polaris'
import { useEffect } from 'react'
import ConditionItem from './ConditionItem'
import { DeleteMinor } from '@shopify/polaris-icons'

ConditionControl.propTypes = {
  globalFormData: PropTypes.object,
  formData: PropTypes.object,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  deletable: PropTypes.bool,
  resourceType: PropTypes.string,
}

ConditionControl.defaultProps = {
  globalFormData: {},
  formData: {},
  onChange: () => null,
  onDelete: () => null,
  deletable: false,
  resourceType: '',
}

function ConditionControl(props) {
  const { globalFormData, formData, onChange, onDelete, deletable, resourceType } = props

  const toggleRadioButton = () => {
    let _formData = JSON.parse(JSON.stringify(formData))
    _formData.type = _formData.type === 'all' ? 'any' : 'all'
    onChange(_formData)
  }

  return (
    <Stack vertical alignment="fill">
      {props.__index !== 0 && (
        <Stack distribution="center">
          <ButtonGroup segmented>
            <Button
              disabled={globalFormData.type !== 'all'}
              primary={globalFormData.type === 'all'}
            >
              <div style={{ minWidth: 40 }}>ALL</div>
            </Button>
            <Button
              disabled={globalFormData.type !== 'any'}
              primary={globalFormData.type === 'any'}
            >
              <div style={{ minWidth: 40 }}>ANY</div>
            </Button>
          </ButtonGroup>
        </Stack>
      )}

      <Card sectioned>
        <Stack vertical alignment="fill">
          <Stack distribution="equalSpacing" alignment="center">
            <Stack alignment="center">
              <div>Conditions must match:</div>
              <RadioButton
                label="all conditions"
                checked={Boolean(formData.type === 'all')}
                name={`condition_${props.__index}`}
                onChange={toggleRadioButton}
              />
              <RadioButton
                label="any condition"
                checked={Boolean(formData.type === 'any')}
                name={`condition_${props.__index}`}
                onChange={toggleRadioButton}
              />
            </Stack>
            <Button plain icon={DeleteMinor} onClick={onDelete} disabled={!deletable} />
          </Stack>
          <Stack vertical alignment="fill" spacing="extraTight">
            {formData.conditions.map((item, index) => (
              <ConditionItem
                key={index}
                formData={item}
                onChange={(value) => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  _formData.conditions[index] = value
                  onChange(_formData)
                }}
                deletable={Boolean(formData.conditions.length > 1)}
                onDelete={() => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  _formData.conditions = _formData.conditions.filter(
                    (_item, _index) => _index !== index
                  )
                  onChange(_formData)
                }}
                resourceType={resourceType}
              />
            ))}
          </Stack>
          <Button
            onClick={() => {
              let _formData = JSON.parse(JSON.stringify(formData))

              let condition = JSON.parse(JSON.stringify(_formData.conditions[0]))
              condition.value = ''
              condition.error = ''

              _formData.conditions.push(condition)
              onChange(_formData)
            }}
          >
            Add another condition
          </Button>
        </Stack>
      </Card>
    </Stack>
  )
}

export default ConditionControl
