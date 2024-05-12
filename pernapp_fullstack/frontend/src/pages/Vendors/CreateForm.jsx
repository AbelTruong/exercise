import { Button, Card, Stack } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'

import AppHeader from '../../components/AppHeader'
import FormControl from '../../components/FormControl'
import FormValidate from '../../helpers/formValidate'

CreateForm.propTypes = {
  created: PropTypes.object,
  onDiscard: PropTypes.func,
  onSubmit: PropTypes.func,
}

CreateForm.defaultProps = {
  created: {},
  onDiscard: () => null,
  onSubmit: () => null,
}

const initialFormData = {
  name: {
    type: 'text',
    label: 'Vendor',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required!'],
      minlength: [2, 'Too short!'],
      maxlength: [50, 'Too long!'],
    },
    autoFocus: true,
  },
}

function CreateForm(props) {
  const { actions, created, onDiscard, onSubmit } = props

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    let _formData = JSON.parse(JSON.stringify(formData))
    _formData.name.value = `vendor-${Date.now()}`

    if (created.id) {
      Array.from(['name']).map(
        (key) => (_formData[key] = { ..._formData[key], value: String(created[key] || '') }),
      )
    }

    setFormData(_formData)
  }, [])

  const handleChange = (name, value) => {
    let _formData = JSON.parse(JSON.stringify(formData))

    _formData[name] = { ..._formData[name], value, error: '' }
    setFormData(_formData)
  }

  const handleSubmit = () => {
    try {
      const { valid, data } = FormValidate.validateForm(formData)

      if (valid) {
        onSubmit(data)
      } else {
        setFormData(data)
        throw new Error('Invalid form data')
      }
    } catch (error) {
      console.log(error)
      actions.showNotify({ error: true, message: error.message })
    }
  }

  return (
    <Stack vertical alignment="fill">
      <AppHeader title={created.id ? 'Edit vendor' : 'Add vendor'} onBack={onDiscard} />

      <Card sectioned>
        <Stack vertical aligment="fill">
          <FormControl {...formData['name']} onChange={(value) => handleChange('name', value)} />
        </Stack>
      </Card>

      <Stack distribution="trailing">
        <Button onClick={onDiscard}>Discard</Button>
        <Button primary onClick={handleSubmit}>
          {created.id ? 'Save' : 'Add'}
        </Button>
      </Stack>
    </Stack>
  )
}

export default CreateForm
