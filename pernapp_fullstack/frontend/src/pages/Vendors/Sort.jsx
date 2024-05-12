import { ActionList, Button, Icon, Popover, Stack, Tag } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { SortMinor } from '@shopify/polaris-icons'

Sort.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
}

Sort.defaultProps = {
  onChange: () => null,
  filter: {},
}

function Sort(props) {
  const { onChange, filter } = props

  const [popoverActive, setPopoverActive] = useState(false)

  const togglePopoverActive = () => setPopoverActive((popoverActive) => !popoverActive)

  const activator = (
    <Button onClick={togglePopoverActive} disclosure={popoverActive ? 'up' : 'down'}>
      <Stack spacing="tight">
        <Icon source={SortMinor} color="base" />
        <p>Sort</p>
      </Stack>
    </Button>
  )

  const sortActionList = [
    {
      content: 'Name A->Z',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'name:ASC' }),
    },
    {
      content: 'Id 0->9',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'id:ASC' }),
    },
    {
      content: 'CreatedAt soon',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'createdAt:ASC' }),
    },
    {
      content: 'UpdatedAt soon',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'updatedAt:ASC' }),
    },
    {
      content: 'Name Z->A',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'name:DESC' }),
    },
    {
      content: 'Id 9->0',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'id:DESC' }),
    },
    {
      content: 'CreatedAt last',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'createdAt:DESC' }),
    },
    {
      content: 'UpdatedAt last',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'updatedAt:DESC' }),
    },
  ]

  return (
    <Stack vertical alignment="fill">
      <Stack>
        <Stack.Item>
          <Popover
            active={popoverActive}
            activator={activator}
            autofocusTarget="first-node"
            onClose={togglePopoverActive}
          >
            <Popover.Pane>
              <Popover.Section>
                <p>Sort by A-Z, 0-9</p>
              </Popover.Section>
            </Popover.Pane>
            <Popover.Pane fixed>
              <ActionList actionRole="menuitem" items={sortActionList} />
            </Popover.Pane>
          </Popover>
        </Stack.Item>
      </Stack>
      <Stack>
        {Boolean(filter.sort) && (
          <Tag
            onRemove={() => {
              onChange({ ...filter, sort: '' })
            }}
          >
            Sort by: {filter.sort}
          </Tag>
        )}
      </Stack>
    </Stack>
  )
}

export default Sort
