import { RadioButton, Select, Stack, TextField } from '@shopify/polaris'
import MyDropZoneMultiple from '../MyDropZoneMultiple'
import MyDropZoneSingle from '../MyDropZoneSingle'
import MyAutocomplete from '../MyAutocomplete'

function FormControl(props) {
  let label = props.label ? (
    <span>
      {props.label}
      {props.required ? <b style={{ color: 'rgb(220, 53, 69)' }}> *</b> : null}
    </span>
  ) : null

  switch (props.type) {
    case 'file':
      return (
        <Stack vertical spacing="extraTight">
          {label && <Stack.Item>{label}</Stack.Item>}
          <Stack.Item>
            {props.allowMultiple ? (
              <MyDropZoneMultiple {...props} files={props.value} />
            ) : (
              <MyDropZoneSingle {...props} file={props.value} />
            )}
          </Stack.Item>
        </Stack>
      )

    case 'select':
      return <Select {...props} label={label || ''} />

    case 'radio':
      return (
        <Stack vertical spacing="extraTight">
          {label && <Stack.Item>{label}</Stack.Item>}
          <Stack.Item>
            <Stack>
              {props.options?.length > 0 &&
                props.options.map((item, index) => (
                  <Stack.Item key={index}>
                    <RadioButton
                      label={item.label}
                      checked={Boolean(item.value === value)}
                      onChange={() => props.onChange?.(item.value)}
                    />
                  </Stack.Item>
                ))}
            </Stack>
          </Stack.Item>
        </Stack>
      )

    case 'autocomplete':
      return <MyAutocomplete {...props} label={label || ''} />

    default:
      // text
      return (
        <TextField {...props} label={label || ''} onClearButtonClick={() => props.onChange('')} />
      )
  }
}

export default FormControl
