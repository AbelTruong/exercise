import { ActionList, Button, DataTable, Popover, Stack, Thumbnail } from '@shopify/polaris'
import { MobileVerticalDotsMajor } from '@shopify/polaris-icons'
import { useState } from 'react'
import Avatar from '../../components/Avatar'

function Table(props) {
  const { products, onEdit, onDelete } = props

  const [selected, setSelected] = useState(null)

  let rows =
    products?.items.map((item, index) => [
      (products?.page - 1) * products?.limit + index + 1,
      <Stack vertical spacing="extraTight">
        <Stack.Item>
          <Stack spacing="tight" wrap={false}>
            <Stack.Item>
              <Avatar alt={item.handle} src={item.thumbnail} size="3em" />
            </Stack.Item>
            <Stack.Item>
              <p>
                <b>{item.title}</b>
              </p>
              <p>
                <i>{item.price}</i>
              </p>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack spacing="extraTight">
            {item.images.length > 0 &&
              item.images.map((_item, _index) => (
                <Stack.Item key={_index}>
                  <Thumbnail alt="" source={_item} size="small" />
                </Stack.Item>
              ))}
          </Stack>
        </Stack.Item>
      </Stack>,
      <Stack vertical spacing="tight">
        <Stack.Item>Seo-url: {item.handle}</Stack.Item>
        <Stack.Item>Description: {item.description}</Stack.Item>
        <Stack.Item>Status: {item.status}</Stack.Item>
        <Stack.Item>Vendor: {item.vendor?.name}</Stack.Item>
        <Stack.Item>Publish: {item.publish ? 'true' : 'false'}</Stack.Item>
      </Stack>,
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
      headings={['No.', 'Product', 'Advanced', 'Action']}
      rows={rows}
    />
  )
}

export default Table
