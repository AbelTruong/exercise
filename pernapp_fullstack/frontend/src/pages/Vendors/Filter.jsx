import PropTypes from 'prop-types'
import { Autocomplete, Stack, Tag, TextField } from '@shopify/polaris'
import { useCallback, useState } from 'react'
import { useEffect } from 'react'
import Sort from './Sort'

Filter.propTypes = {
  vendors: PropTypes.object,
  onchange: PropTypes.func,
  filter: PropTypes.object,
}

Filter.defaultProps = {
  vendors: {},
  onChange: () => null,
  filter: {},
}

function Filter(props) {
  const { onChange, filter } = props

  const [search, setSearch] = useState(filter.keyword || '')

  const handleSearch = (value) => {
    setSearch(value)

    if (window.__searchTimeout) {
      clearTimeout(window.__searchTimeout)
    }

    window.__searchTimeout = setTimeout(() => {
      onChange({ ...filter, keyword: value })
    }, 600)
  }

  return (
    <Stack>
      <Stack.Item fill>
        <TextField
          value={search}
          placeholder="Search..."
          onChange={(value) => handleSearch(value)}
          clearButton
          onClearButtonClick={() => {
            setSearch('')
            onChange({ ...filter, keyword: '' })
          }}
        />
      </Stack.Item>
      <Stack.Item>
        <Sort onChange={onChange} filter={filter} />
      </Stack.Item>
    </Stack>
  )
}

export default Filter
