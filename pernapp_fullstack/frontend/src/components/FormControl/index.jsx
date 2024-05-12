import PropTypes from 'prop-types'
import { Button, RadioButton, Select, Stack, TextField, Thumbnail } from '@shopify/polaris'
import MyDropZoneMultiple from '../MyDropZoneMultiple'
import MyDropZoneSingle from '../MyDropZoneSingle'
import { DeleteMinor } from '@shopify/polaris-icons'

FormControl.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'date', 'radio', 'select', 'file']),
  label: PropTypes.string,
  value: PropTypes.any,
  originValue: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  autoFocus: PropTypes.bool,
  options: PropTypes.array,
  required: PropTypes.bool,
  allowMultiple: PropTypes.bool,
  onDeleteOriginValue: PropTypes.func,
}

FormControl.defaultProps = {
  type: 'text',
  label: '',
  value: null,
  originValue: undefined,
  error: null,
  onChange: () => null,
  disabled: false,
  placeholder: '',
  helpText: '',
  autoFocus: false,
  options: [],
  required: false,
  allowMultiple: false,
  onDeleteOriginValue: () => null,
}

function FormControl(props) {
  const {
    type,
    label,
    value,
    originValue,
    error,
    onChange,
    disabled,
    placeholder,
    helpText,
    autoFocus,
    options,
    required,
    allowMultiple,
    onDeleteOriginValue,
  } = props

  let _label = required ? (
    <span>
      {label}
      <b style={{ color: 'rgb(220, 53, 69)' }}>*</b>
    </span>
  ) : (
    label
  )

  const renderPreview = (url) => {
    return (
      <div style={{ position: 'relative', display: 'inline' }}>
        <div style={{ position: 'absolute', top: '0.5em', right: 0, zIndex: 1 }}>
          <Button icon={DeleteMinor} size="slim" plain onClick={() => onDeleteOriginValue(url)} />
        </div>
        <Thumbnail size="large" source={url} />
      </div>
    )
  }

  switch (type) {
    case 'file':
      return (
        <Stack vertical spacing="extraTight">
          <Stack.Item>{_label}</Stack.Item>
          {originValue !== undefined && (
            <Stack spacing="extraTight">
              {typeof originValue === 'string' && originValue !== '' ? (
                <Stack.Item>{renderPreview(originValue)}</Stack.Item>
              ) : Array.isArray(originValue) && originValue.length > 0 ? (
                originValue.map((item, index) => (
                  <Stack.Item key={index}>{renderPreview(item)}</Stack.Item>
                ))
              ) : null}
            </Stack>
          )}
          <Stack.Item>
            {allowMultiple ? (
              <MyDropZoneMultiple files={value} onChange={onChange} />
            ) : (
              <MyDropZoneSingle file={value} onChange={onChange} />
            )}
          </Stack.Item>
        </Stack>
      )
      break

    case 'select':
      return (
        <Select label={_label} options={options} onChange={onChange} value={value} error={error} />
      )
      break

    case 'radio':
      return (
        <Stack vertical spacing="extraTight">
          <Stack.Item>{_label}</Stack.Item>
          <Stack.Item>
            <Stack>
              {options?.length > 0 &&
                options.map((item, index) => (
                  <Stack.Item key={index}>
                    <RadioButton
                      label={item.label}
                      checked={Boolean(item.value == value)}
                      onChange={() => onChange(item.value)}
                    />
                  </Stack.Item>
                ))}
            </Stack>
          </Stack.Item>
        </Stack>
      )
      break

    default:
      // text
      return (
        <TextField
          type={type}
          label={_label}
          value={value}
          error={error}
          onChange={onChange}
          disabled={Boolean(disabled)}
          placeholder={placeholder}
          helpText={helpText}
          autoFocus={Boolean(autoFocus)}
        />
      )
      break
  }
}

export default FormControl
