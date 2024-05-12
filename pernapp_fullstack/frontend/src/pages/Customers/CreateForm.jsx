import PropTypes from 'prop-types'
import { Button, Card, Stack } from '@shopify/polaris'
import { useEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader'
import FormControl from '../../components/FormControl'
import FormValidate from '../../helpers/formValidate'
import MyDropZone from '../../components/MyDropZoneSingle'

CreateForm.propTypes = {
  created: PropTypes.object,
  onDiscard: PropTypes.func,
  onSubmit: PropTypes.func,
  countries: PropTypes.array,
}

CreateForm.defaultProps = {
  created: {},
  onDiscard: () => null,
  onSubmit: () => null,
  countries: [],
}

const initialFormData = {
  firstName: {
    type: 'text',
    label: 'First name',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required!'],
      minlength: [2, 'Too short!'],
      maxlength: [20, 'Too long!'],
    },
    autoFocus: true,
  },
  lastName: {
    type: 'text',
    label: 'Last name',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required!'],
      minlength: [2, 'Too short!'],
      maxlength: [20, 'Too long!'],
    },
  },
  email: {
    type: 'text',
    label: 'Email',
    value: '',
    error: '',
    required: true,
    validate: {
      trim: true,
      required: [true, 'Required!'],
      minlength: [2, 'Too short!'],
      maxlength: [50, 'Too long!'],
      pattern: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
    },
  },
  phone: {
    type: 'text',
    label: 'Phone',
    value: '',
    error: '',
    validate: {},
  },
  gender: {
    type: 'radio',
    label: 'Gender',
    value: false,
    error: '',
    validate: {},
    options: [
      {
        label: 'Male',
        value: true,
      },
      {
        label: 'Female',
        value: false,
      },
    ],
  },
  birthday: {
    type: 'date',
    label: 'Birthday',
    value: '',
    error: '',
    validate: {},
  },
  countryId: {
    type: 'select',
    label: 'Country',
    value: '',
    error: '',
    validate: {},
    options: [{ label: 'Select a country', value: '' }],
  },
  avatar: {
    type: 'file',
    label: 'Avatar',
    value: null,
    originValue: null,
    error: '',
    validate: {},
    allowMultiple: false,
  },
  photos: {
    type: 'file',
    label: 'Photos',
    value: [],
    originValue: [],
    error: '',
    validate: {},
    allowMultiple: true,
  },
}

function CreateForm(props) {
  const { actions, created, onDiscard, onSubmit, countries } = props

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => console.log('formData :>> ', formData), [formData])

  useEffect(() => {
    let _formData = JSON.parse(JSON.stringify(initialFormData))
    _formData.countryId = {
      ..._formData.countryId,
      options: [
        { label: 'Select a country', value: '' },
        ...countries.map((item) => ({ label: item.name, value: '' + item.id })),
      ],
    }

    /**
     * test
     */
    _formData.firstName.value = 'david'
    _formData.lastName.value = 'pham'
    _formData.email.value = `david-pham-${Date.now()}@gmail.com`
    _formData.gender.value = Boolean(Math.random() > 0.4)
    _formData.phone.value = '09797797979'
    _formData.birthday.value = '2000-01-19'
    _formData.countryId.value = String(countries[Math.floor(Math.random() * countries.length)].id)

    if (created.id) {
      Array.from(['firstName', 'lastName', 'email', 'phone', 'birthday', 'countryId']).map(
        (key) => (_formData[key] = { ..._formData[key], value: String(created[key] || '') }),
      )
      Array.from(['gender']).map(
        (key) => (_formData[key] = { ..._formData[key], value: Boolean(created[key] || '') }),
      )
      Array.from(['avatar']).map(
        (key) => (_formData[key] = { ..._formData[key], originValue: String(created[key]) }),
      )
      Array.from(['photos']).map(
        (key) => (_formData[key] = { ..._formData[key], originValue: created[key] || [] }),
      )
    }

    setFormData(_formData)
  }, [])

  const handleChange = (name, value) => {
    let _formData = JSON.parse(JSON.stringify(formData))
    Array.from(['avatar', 'photos']).forEach((key) => (_formData[key] = formData[key]))
    _formData[name] = { ..._formData[name], value, error: '' }
    setFormData(_formData)
  }

  const handleSubmit = () => {
    try {
      const { valid, data } = FormValidate.validateForm(formData)

      if (valid) {
        data['avatar'].value = formData['avatar'].value
        data['photos'].value = formData['photos'].value

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
      <AppHeader title={created.id ? 'Edit customer' : 'Add customer'} onBack={onDiscard} />

      <Card sectioned>
        <Stack vertical alignment="fill">
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['firstName']}
                onChange={(value) => handleChange('firstName', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['lastName']}
                onChange={(value) => handleChange('lastName', value)}
              />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['email']}
                onChange={(value) => handleChange('email', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['phone']}
                onChange={(value) => handleChange('phone', value)}
              />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['gender']}
                onChange={(value) => handleChange('gender', value)}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['birthday']}
                onChange={(value) => handleChange('birthday', value)}
              />
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['countryId']}
                onChange={(value) => handleChange('countryId', value)}
              />
            </Stack.Item>
            <Stack.Item fill></Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <FormControl
                {...formData['avatar']}
                onChange={(value) => handleChange('avatar', value)}
                onDeleteOriginValue={(value) => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  Array.from(['avatar', 'photos']).forEach(
                    (key) => (_formData[key] = formData[key]),
                  )
                  _formData['avatar'] = {
                    ..._formData['avatar'],
                    originValue: '',
                    error: '',
                  }
                  setFormData(_formData)
                }}
              />
            </Stack.Item>
            <Stack.Item fill>
              <FormControl
                {...formData['photos']}
                onChange={(value) => handleChange('photos', value)}
                onDeleteOriginValue={(value) => {
                  let _formData = JSON.parse(JSON.stringify(formData))
                  Array.from(['avatar', 'photos']).forEach(
                    (key) => (_formData[key] = formData[key]),
                  )
                  _formData['photos'] = {
                    ..._formData['photos'],
                    originValue: _formData['photos'].originValue.filter((item) => item !== value),
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
