import { Badge, Button, Card, DisplayText, Stack, TextField } from '@shopify/polaris'
import { useEffect, useState } from 'react'
import DuplicatorApi from '../../apis/duplicator'

const InitFormData = {
  code: { value: '', error: '', placeholder: 'xxxx-xxxx-xxxx-xxxx' },
}

function DuplicatorCard(props) {
  const { actions, navigate, duplicators } = props

  const [formData, setFormData] = useState(InitFormData)

  const handleChange = (name, value) => {
    let _formData = JSON.parse(JSON.stringify(formData))
    _formData[name] = { ..._formData[name], value, error: '' }
    setFormData(_formData)
  }

  const handleSubmit = async () => {
    try {
      actions.showAppLoading()

      let res = await DuplicatorApi.activeCode({ code: formData['code'].value.trim() })
      if (!res.success) throw res.error

      actions.getDuplicators()
      actions.getStoreSetting()

      actions.showNotify({ message: 'Unique code actived' })

      setFormData(InitFormData)
    } catch (error) {
      actions.showNotify({ message: error.message, error: true })
    } finally {
      actions.hideAppLoading()
    }
  }

  return (
    <Card>
      <Card.Section>
        <Stack distribution="center">
          <DisplayText size="small">Active Destination Store Mode</DisplayText>
        </Stack>
      </Card.Section>
      <Card.Section subdued>
        <Stack vertical distribution="fill" spacing="tight">
          <div>Add unique code from resource store:</div>
          <Stack distribution="equalSpacing" alignment="baseline" spacing="tight">
            <Stack.Item fill>
              <TextField
                {...formData['code']}
                onChange={(value) => handleChange('code', value)}
                clearButton
                onClearButtonClick={() => handleChange('code', '')}
              />
            </Stack.Item>
            <Button
              onClick={handleSubmit}
              primary={Boolean(formData['code'].value)}
              disabled={!Boolean(formData['code'].value)}
            >
              Active code
            </Button>
          </Stack>
        </Stack>
      </Card.Section>
      <Card.Section>
        <Button
          fullWidth
          primary
          onClick={() => props.navigate('import')}
          disabled={!Boolean(duplicators.length >= 1)}
        >
          New import data
        </Button>
      </Card.Section>
      <Card.Section subdued>
        <Stack vertical alignment="fill" spacing="extraTight">
          {/* <Stack distribution="center">
            <DisplayText size="small">
              <span className="color__note">What is destination store?</span>
            </DisplayText>
          </Stack> */}
          <Stack distribution="center">
            <div className="color__note" style={{ textAlign: 'center', whiteSpace: 'normal' }}>
              Enter resource store unique code from another store that installed AClone.
            </div>
          </Stack>
        </Stack>
      </Card.Section>
    </Card>
  )
}

export default DuplicatorCard
