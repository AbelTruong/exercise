import { ActionList, Button, DataTable, Popover, Stack } from '@shopify/polaris'
import { MobileVerticalDotsMajor } from '@shopify/polaris-icons'
import { useState } from 'react'

function Table(props) {
  const { vendors, onEdit, onDelete } = props

  const [selected, setSelected] = useState(null)

  let rows =
    vendors?.items.map((item, index) => [
      (vendors?.page - 1) * vendors?.limit + index + 1,
      <Stack vertical spacing="extraTight">
        <div>
          <b>{item.name}</b>
        </div>
      </Stack>,
      <Stack vertical spacing="extraTight"></Stack>,
      <Popover
        active={item.id === selected?.id}
        activator={
          <Button
            onClick={() => setSelected(selected?.id === item.id ? null : item)}
            icon={MobileVerticalDotsMajor}
            outline
          />
        }
        onClose={() => setSelected(null)}
      >
        <ActionList
          actionRole="menuitem"
          items={[
            {
              content: 'Preview',
              onAction: () => setSelected(null),
            },
            {
              content: 'Edit',
              onAction: () => onEdit(item) & setSelected(null),
            },
            {
              content: 'Delete',
              onAction: () => onDelete(item) & setSelected(null),
            },
          ]}
        />
      </Popover>,
    ]) || []

  return (
    <DataTable
      columnContentTypes={['text', 'text', 'text', 'text']}
      headings={['No.', 'Vendor', 'Advanced', 'Action']}
      rows={rows}
    />
  )
}

export default Table
