import PropTypes from 'prop-types'
import { Autocomplete, Stack, Tag } from '@shopify/polaris'
import { useCallback, useState } from 'react'
import { useEffect } from 'react'

FilterVendors.propTypes = {
  vendors: PropTypes.object,
  onchange: PropTypes.func,
  filter: PropTypes.object,
}

FilterVendors.defaultProps = {
  vendors: {},
  onChange: () => null,
  filter: {},
}

function FilterVendors(props) {
  const { vendors, onChange, filter } = props

  const paginationInterval = 15
  const vendorsOptions = Array.from(vendors.items).map((item, index) => ({
    value: '' + item.id,
    label: `${index + 1}. ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`,
  }))

  const [selectedOptions, setSelectedOptions] = useState(filter?.vendors?.split(',') || [])
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState(vendorsOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [willLoadMoreResults, setWillLoadMoreResults] = useState(true)
  const [visibleOptionIndex, setVisibleOptionIndex] = useState(paginationInterval)

  const handleLoadMoreResults = useCallback(() => {
    if (willLoadMoreResults) {
      setIsLoading(true)

      setTimeout(() => {
        const remainingOptionCount = options.length - visibleOptionIndex
        const nextVisibleOptionIndex =
          remainingOptionCount >= paginationInterval
            ? visibleOptionIndex + paginationInterval
            : visibleOptionIndex + remainingOptionCount

        setIsLoading(false)
        setVisibleOptionIndex(nextVisibleOptionIndex)

        if (remainingOptionCount <= paginationInterval) {
          setWillLoadMoreResults(false)
        }
      }, 1000)
    }
  }, [willLoadMoreResults, visibleOptionIndex, options.length])

  useEffect(() => {
    onChange({ ...filter, vendors: selectedOptions.join('-') })
  }, [selectedOptions])

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions]
      options.splice(options.indexOf(tag), 1)
      setSelectedOptions(options)
    },
    [selectedOptions],
  )

  const updateText = (value) => {
    setInputValue(value)

    if (value === '') {
      setOptions(vendorsOptions)
      return
    }

    const filterRegex = new RegExp(value, 'i')
    const resultOptions = vendorsOptions.filter((option) => option.label.match(filterRegex))

    setOptions(resultOptions)
  }

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Filter"
      value={inputValue}
      placeholder="choose your vendors"
    />
  )

  const hasSelectedOptions = selectedOptions.length > 0

  const tagsMarkup = hasSelectedOptions
    ? selectedOptions?.map((option) => {
        let tagLabel = ''
        vendorsOptions.forEach((vendorOption) => {
          if (vendorOption.value === option) {
            tagLabel = vendorOption.label
          }
        })
        return (
          <Tag key={`option${option}`} onRemove={removeTag(option)}>
            {tagLabel}
          </Tag>
        )
      })
    : null

  const optionList = options.slice(0, visibleOptionIndex)

  const selectedTagMarkup = hasSelectedOptions ? (
    <Stack spacing="extraTight">{tagsMarkup}</Stack>
  ) : null

  return (
    <Stack vertical>
      <Stack.Item fill>
        <Autocomplete
          allowMultiple
          options={optionList}
          selected={selectedOptions}
          textField={textField}
          onSelect={setSelectedOptions}
          listTitle="Suggested Tags"
          loading={isLoading}
          onLoadMoreResults={handleLoadMoreResults}
          willLoadMoreResults={willLoadMoreResults}
        />
      </Stack.Item>
      {selectedTagMarkup}
    </Stack>
  )
}

export default FilterVendors
