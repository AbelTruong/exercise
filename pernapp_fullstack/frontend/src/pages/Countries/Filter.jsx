import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Stack, TextField } from '@shopify/polaris'

Filter.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
}

Filter.defaultProps = {
  filter: {},
  onChange: () => null,
}

function Filter(props) {
  const { filter, onChange } = props

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
    <Stack vertical alignment="fill">
      <TextField
        value={search}
        placeholder="Search.."
        onChange={(value) => handleSearch(value)}
        clearButton
        onClearButtonClick={() => {
          setSearch('')
          onChange({ ...filter, keyword: '' })
        }}
      />
    </Stack>
  )
}

export default Filter
