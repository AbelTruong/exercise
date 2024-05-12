import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ActionList, Button, ButtonGroup, Popover, Stack, Tag, TextField } from '@shopify/polaris'

Filter.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
  countries: PropTypes.array,
}

Filter.defaultProps = {
  filter: {},
  onChange: () => null,
  countries: [],
}

function Filter(props) {
  const { filter, onChange, countries } = props

  const [genderActive, setGenderActive] = useState(false)
  const [countryActive, setCountryActive] = useState(false)

  const [search, setSearch] = useState(filter.keyword || '')

  const gendersActionList = [
    {
      content: 'Male',
      value: 'true',
      onAction: () => onChange({ ...filter, gender: 'true' }) & setGenderActive(false),
    },
    {
      content: 'Female',
      value: 'false',
      onAction: () => onChange({ ...filter, gender: 'false' }) & setGenderActive(false),
    },
  ]

  const countriesActionList = countries.map((item) => ({
    content: item.name,
    value: '' + item.id,
    onAction: () => onChange({ ...filter, countryId: '' + item.id }) & setCountryActive(false),
  }))

  const handleSearch = (value) => {
    setSearch(value)

    console.log('first', window.__searchTimeout)
    if (window.__searchTimeout) {
      clearTimeout(window.__searchTimeout)
    }

    window.__searchTimeout = setTimeout(() => {
      onChange({ ...filter, keyword: value })
    }, 600)
  }

  return (
    <Stack vertical alignment="fill">
      <Stack>
        <Stack.Item fill>
          <TextField
            value={search}
            placeholder="Search.."
            onChange={(value) => handleSearch(value)}
            clearButton
            onClearButtonClick={() => setSearch('') & onChange({ ...filter, keyword: '' })}
          />
        </Stack.Item>
        <Stack.Item>
          <ButtonGroup segmented>
            <Popover
              active={genderActive}
              activator={
                <Button disclosure onClick={() => setGenderActive(!genderActive)}>
                  Gender
                </Button>
              }
              onClose={() => setGenderActive(false)}
            >
              <ActionList actionRole="menuitem" items={gendersActionList} />
            </Popover>
            <Popover
              active={countryActive}
              activator={
                <Button disclosure onClick={() => setCountryActive(!countryActive)}>
                  Country
                </Button>
              }
              onClose={() => setCountryActive(false)}
            >
              <ActionList actionRole="menuitem" items={countriesActionList} />
            </Popover>
          </ButtonGroup>
        </Stack.Item>
      </Stack>
      <Stack>
        {Boolean(filter.gender) && (
          <Tag onRemove={() => onChange({ ...filter, gender: '' })}>
            Gender: {gendersActionList.find((item) => item.value === filter.gender).content}
          </Tag>
        )}
        {Boolean(filter.countryId) && (
          <Tag onRemove={() => onChange({ ...filter, countryId: '' })}>
            Country: {countriesActionList.find((item) => item.value === filter.countryId).content}
          </Tag>
        )}
      </Stack>
    </Stack>
  )
}

export default Filter
