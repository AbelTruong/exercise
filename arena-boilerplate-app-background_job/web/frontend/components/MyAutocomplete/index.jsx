import { Autocomplete } from '@shopify/polaris'

function MyAutocomplete(props) {
  return (
    <Autocomplete
      options={
        props.options
          ? props.options.filter(
              (item) =>
                item.label.toLowerCase().includes(props.value.toLowerCase()) ||
                item.value.toLowerCase().includes(props.value.toLowerCase())
            )
          : []
      }
      selected={[]}
      onSelect={(values) => props.onChange(values[0])}
      textField={
        <Autocomplete.TextField {...props} onClearButtonClick={() => props.onChange('')} />
      }
    />
  )
}

export default MyAutocomplete
