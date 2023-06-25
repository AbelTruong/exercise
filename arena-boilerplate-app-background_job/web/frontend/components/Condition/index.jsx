import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Modal, RadioButton, Stack } from '@shopify/polaris'
import { useEffect } from 'react'
import ConditionControl from './ConditionControl'
import { convertFormDataToData } from './actions'

Condition.propTypes = {
  formData: PropTypes.object,
  onDiscard: PropTypes.func,
  onSubmit: PropTypes.func,
  resourceType: PropTypes.string,
}

Condition.defaultProps = {
  formData: {},
  onDiscard: () => null,
  onSubmit: () => null,
  resourceType: '',
}

function Condition(props) {
  const { onDiscard, onSubmit, resourceType } = props

  const [formData, setFormData] = useState(null)

  useEffect(() => setFormData(props.formData), [])

  const toggleRadioButton = () => {
    let _formData = JSON.parse(JSON.stringify(formData))
    _formData.type = _formData.type === 'all' ? 'any' : 'all'
    setFormData(_formData)
  }

  if (!formData) {
    return null
  }

  return (
    <Modal
      large
      open={true}
      title="Conditions"
      onClose={onDiscard}
      secondaryActions={[
        {
          content: 'Discard',
          onAction: onDiscard,
        },
        {
          content: 'Submit',
          onAction: () => onSubmit(formData),
          primary: true,
        },
      ]}
    >
      <Modal.Section>
        <Card>
          <Card.Section>
            <Stack alignment="center">
              <div>Conditions must match:</div>
              <RadioButton
                label="all conditions"
                checked={Boolean(formData.type === 'all')}
                name="condition"
                onChange={toggleRadioButton}
              />
              <RadioButton
                label="any condition"
                checked={Boolean(formData.type === 'any')}
                name="condition"
                onChange={toggleRadioButton}
              />
            </Stack>
          </Card.Section>
          <Card.Section subdued>
            <Stack vertical alignment="fill">
              {formData.conditions.map((item, index) => (
                <ConditionControl
                  key={index}
                  __index={index}
                  formData={item}
                  onChange={(value) => {
                    let _formData = JSON.parse(JSON.stringify(formData))
                    _formData.conditions[index] = value
                    setFormData(_formData)
                  }}
                  globalFormData={formData}
                  deletable={Boolean(formData.conditions.length > 1)}
                  onDelete={() => {
                    let _formData = JSON.parse(JSON.stringify(formData))
                    _formData.conditions = _formData.conditions.filter(
                      (_item, _index) => _index !== index
                    )
                    setFormData(_formData)
                  }}
                  resourceType={resourceType}
                />
              ))}

              <Button
                onClick={() => {
                  let _formData = JSON.parse(JSON.stringify(formData))

                  let condition = JSON.parse(JSON.stringify(_formData.conditions[0]))
                  condition.conditions = condition.conditions
                    .slice(0, 1)
                    .map((item) => ({ ...item, value: '', error: '' }))

                  _formData.conditions.push(condition)
                  setFormData(_formData)
                }}
              >
                Add another condition
              </Button>
            </Stack>
          </Card.Section>
        </Card>
      </Modal.Section>
    </Modal>
  )
}

export default Condition
