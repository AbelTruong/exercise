import { Button, Card, Stack } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import AppHeader from '../../components/AppHeader'
import FormControl from '../../components/FormControl'
import FormValidate from '../../helpers/formValidate'

CreateForm.propTypes = {
  created: PropTypes.object,
  onDiscard: PropTypes.func,
  onSubmit: PropTypes.func,
  vendors: PropTypes.object,
  products: PropTypes.object,
}

CreateForm.defaultProps = {
  created: {},
  onDiscard: () => null,
  onSubmit: () => null,
  vendors: {},
  products: {},
}

const initialFormData = {
  title: {
    type: 'text',
    label: 'Title',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required'],
      minlength: [2, 'Too Short'],
      maxlength: [99, 'Too Long'],
    },
    autoFocus: true,
  },
  description: {
    type: 'text',
    label: 'Description',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required'],
      minlength: [1, 'Too Short'],
      maxlength: [255, 'Too Long'],
    },
  },
  price: {
    type: 'text',
    label: 'Price',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required'],
      minlength: [1, 'Too Short'],
      maxlength: [1000000, 'Too Long'],
    },
  },
  handle: {
    type: 'text',
    label: 'Seo url',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required'],
      minlength: [2, 'Too Short'],
      maxlength: [1000, 'Too Long'],
    },
  },
  publish: {
    type: 'radio',
    label: 'Publish',
    value: false,
    error: '',
    validate: {},
    options: [
      {
        label: 'Publish',
        value: true,
      },
      {
        label: 'Private',
        value: false,
      },
    ],
  },
  status: {
    type: 'select',
    label: 'Status',
    value: false,
    error: '',
    validate: {},
    options: [
      {
        label: 'ACTIVE',
        value: 'ACTIVE',
      },
      {
        label: 'DRAFT',
        value: 'DRAFT',
      },
      {
        label: 'ARCHIVED',
        value: 'ARCHIVED',
      },
    ],
  },
  vendorId: {
    type: 'select',
    label: 'Vendor',
    value: '',
    error: '',
    required: true,
    validate: {
      required: [true, 'Required'],
    },
    options: [{ label: 'Select a vendor', value: '' }],
  },
  thumbnail: {
    type: 'file',
    label: 'Thumbnail',
    value: null,
    originValue: null,
    error: '',
    validate: {},
    allowMultiple: false,
  },
  images: {
    type: 'file',
    label: 'Images',
    value: [],
    originValue: [],
    error: '',
    validate: {},
    allowMultiple: true,
  },
}

function CreateForm(props) {
  const { actions, created, onDiscard, onSubmit, vendors } = props

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    let _formData = JSON.parse(JSON.stringify(initialFormData))

    if (vendors) {
      _formData.vendorId = {
        ..._formData.vendorId,
        options: [
          { label: 'Select a vendor', value: '' },
          ...vendors.items.map((item) => ({ label: item.name.toUpperCase(), value: '' + item.id })),
        ],
      }
    }

    //set default value for handle. Handle is handled on the backend
    _formData.handle.value = 'pr01'

    // handle create and update products
    if (created.id) {
      Array.from(['title', 'description', 'price', 'handle', 'status', 'vendorId']).map(
        (key) => (_formData[key] = { ..._formData[key], value: String(created[key] || '') }),
      )
      Array.from(['publish']).map(
        (key) => (_formData[key] = { ..._formData[key], value: Boolean(created[key] || '') }),
      )
      if (created['thumbnail'] !== null) {
        Array.from(['thumbnail']).map(
          (key) => (_formData[key] = { ..._formData[key], originValue: String(created[key]) }),
        )
      }
      Array.from(['images']).map(
        (key) => (_formData[key] = { ..._formData[key], originValue: created[key] || [] }),
      )
    }

    setFormData(_formData)
  }, [])

  const handleChange = (name, value) => {
    let _formData = JSON.parse(JSON.stringify(formData))
    Array.from(['thumbnail', 'images']).forEach((key) => (_formData[key] = formData[key]))
    _formData[name] = { ..._formData[name], value, error: '' }
    setFormData(_formData)
  }

  const handleSubmit = () => {
    try {
      const { valid, data } = FormValidate.validateForm(formData)

      if (valid) {
        data['thumbnail'].value = formData['thumbnail'].value
        data['images'].value = formData['images'].value

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
      <AppHeader title={created.id ? 'Edit product' : 'Add product'} onBack={onDiscard} />

      <Card sectioned>
        <Stack vertical alignment="fill">
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['title']}
                onChange={(value) => handleChange('title', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['description']}
                onChange={(value) => handleChange('description', value)}
              />
            </Stack.Item>
          </Stack>

          <Stack>
            <Stack.Item>
              <FormControl
                {...formData['publish']}
                onChange={(value) => handleChange('publish', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['status']}
                onChange={(value) => handleChange('status', value)}
              />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['vendorId']}
                onChange={(value) => handleChange('vendorId', value)}
              />
            </Stack.Item>
            <Stack.Item fill></Stack.Item>
          </Stack>
          <Stack>
            {created.id ? (
              <Stack.Item fill>
                <FormControl
                  {...formData['handle']}
                  disabled
                  onChange={(value) => handleChange('handle', value)}
                />
              </Stack.Item>
            ) : (
              ''
            )}
            <Stack.Item fill>
              <FormControl
                {...formData['price']}
                onChange={(value) => handleChange('price', value)}
              />
            </Stack.Item>
          </Stack>

          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['thumbnail']}
                onChange={(value) => handleChange('thumbnail', value)}
                onDeleteOriginValue={(value) => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  Array.from(['thumbnail', 'images']).forEach(
                    (key) => (_formData[key] = formData[key]),
                  )
                  _formData['thumbnail'] = {
                    ..._formData['thumbnail'],
                    originValue: '',
                    error: '',
                  }
                  setFormData(_formData)
                }}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['images']}
                onChange={(value) => handleChange('images', value)}
                //
                onDeleteOriginValue={(value) => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  Array.from(['thumbnail', 'images']).forEach(
                    (key) => (_formData[key] = formData[key]),
                  )
                  _formData['images'] = {
                    ..._formData['images'],
                    originValue: _formData['images'].originValue.filter((item) => item !== value),
                    error: '',
                  }
                  setFormData(_formData)
                }}
              />
            </Stack.Item>
          </Stack>
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
