import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DataEditor, { GridCellKind } from '@glideapps/glide-data-grid'

import '@glideapps/glide-data-grid/dist/index.css'
import './styles.scss'

SheetJS.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
}

SheetJS.defaultProps = {
  data: undefined,
  onChange: () => null,
}

function SheetJS(props) {
  const { onChange } = props

  if (!props.data?.length) return null

  const [data, setData] = useState(props.data)

  useEffect(() => onChange(data), [data])

  const keys = Object.keys(data[0])

  const columns = keys.map((key) => ({ id: key, title: key }))

  const getCellContent = useCallback(
    (cell) => {
      const [col, row] = cell
      const dataRow = data[row]
      const indexes = keys
      const d = dataRow[indexes[col]]
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        readonly: false,
        displayData: d,
        data: d,
      }
    },
    [data]
  )

  const onCellEdited = useCallback(
    (cell, newValue) => {
      if (newValue.kind !== GridCellKind.Text) {
        return
      }
      const indexes = keys
      const [col, row] = cell
      const key = indexes[col]

      let _data = JSON.parse(JSON.stringify(data))
      _data[row][key] = newValue.data
      setData(_data)
    },
    [data]
  )

  return (
    <div id="SheetJS">
      <DataEditor
        columns={columns}
        rows={data.length}
        getCellContent={getCellContent}
        onCellEdited={onCellEdited}
      />
    </div>
  )
}

export default SheetJS
