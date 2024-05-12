import { ActionList, Button, DataTable, Popover, Stack, Thumbnail } from '@shopify/polaris'
import { MobileVerticalDotsMajor } from '@shopify/polaris-icons'
import { useState } from 'react'
import Avatar from '../../components/Avatar/index.jsx'
import formatDateTime from '../../helpers/formatDateTime.js'

function Table(props) {
  const { items, page, limit, onEdit, onDelete } = props

  const [selected, setSelected] = useState(null)

  let rows = items.map((item, index) => [
    (page - 1) * limit + index + 1,
    <Stack vertical spacing="extraTight">
      <Stack spacing="tight" wrap={false}>
        <Avatar alt={item.fullName} src={item.avatar} size="3em" />
        <div>
          <b>{item.fullName}</b>
        </div>
      </Stack>
      <Stack spacing="extraTight">
        {item.photos?.length > 0 &&
          item.photos.map((_item, _index) => (
            <Thumbnail key={_index} alt="" source={_item} size="small" />
          ))}
      </Stack>
    </Stack>,
    <Stack vertical spacing="extraTight">
      <Stack.Item>Email: {item.email}</Stack.Item>
      <Stack.Item>Phone: {item.phone}</Stack.Item>
      <Stack.Item>Country: {item.country?.name}</Stack.Item>
      <Stack.Item>Gender: {item.gender ? 'Male' : 'Female'}</Stack.Item>
      <Stack.Item>Birthday: {formatDateTime(item.birthday, 'LL')}</Stack.Item>
      <Stack.Item>Age: {item.age}</Stack.Item>
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
  ])

  return (
    <DataTable
      columnContentTypes={['text', 'text', 'text', 'text']}
      headings={['No.', 'Customer', 'Advanced', 'Action']}
      rows={rows}
    />
  )
}

export default Table
