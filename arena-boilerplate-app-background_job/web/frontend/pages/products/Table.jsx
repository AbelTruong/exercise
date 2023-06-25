import PropTypes from 'prop-types'
import { ActionList, Badge, Button, DataTable, Popover, Stack, Thumbnail } from '@shopify/polaris'
import { MobileVerticalDotsMajor, ImagesMajor } from '@shopify/polaris-icons'
import { useState } from 'react'

Table.propTypes = {
  // ...appProps,
  items: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}

Table.defaultProps = {
  items: undefined,
  onEdit: () => null,
  onDelete: () => null,
}

function Table(props) {
  const { items, onEdit, onDelete } = props

  const [selected, setSelected] = useState(null)

  let rows = []
  if (items?.length > 0) {
    rows = items.map((item, index) => [
      index + 1,
      <div style={{ maxWidth: 300, whiteSpace: 'normal' }}>
        <Stack spacing="tight" wrap={false}>
          <Stack.Item>
            <Thumbnail source={item.image?.src || ImagesMajor} size="small" alt={item.title} />
          </Stack.Item>
          <Stack.Item>
            <h3>
              <b>{item.title}</b>
            </h3>
            <p>{item.handle}</p>
          </Stack.Item>
        </Stack>
      </div>,
      <Badge status={item.status === 'active' ? 'success' : ''}>{item.status}</Badge>,
      <div style={{ maxWidth: 300, whiteSpace: 'normal' }}>
        <Stack vertical spacing="extraTight">
          <Stack.Item>Vendor: {item.vendor}</Stack.Item>
          <Stack.Item>Product type: {item.product_type}</Stack.Item>
        </Stack>
      </div>,
      <Stack distribution="trailing">
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
                onAction: () => {
                  window.open(`https://${window.shopOrigin}/products/${item.handle}`)
                  setSelected(null)
                },
                disabled: item.status !== 'active',
              },
              {
                content: 'Edit',
                onAction: () => {
                  onEdit(item)
                  setSelected(null)
                },
              },
              {
                content: 'Delete',
                onAction: () => {
                  onDelete(item)
                  setSelected(null)
                },
              },
            ]}
          />
        </Popover>
      </Stack>,
    ])
  }

  return (
    <DataTable
      headings={['No.', 'Product', 'Status', 'Advanced', 'Actions']}
      columnContentTypes={['text', 'text', 'text', 'text', 'numeric']}
      rows={rows}
      footerContent={items ? (items?.length > 0 ? undefined : 'Have no data') : 'loading..'}
    />
  )
}

export default Table
