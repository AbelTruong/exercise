import { Button, Popover, ActionList, Stack, Icon } from '@shopify/polaris'
import { useState } from 'react'
import PropTypes from 'prop-types'
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

  const sortASCActionList = [
    {
      content: 'Price',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'price:ASC' }),
    },

    {
      content: 'Title',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'title:ASC' }),
    },

    {
      content: 'UpdatedAt',
      value: 'asc',
      onAction: () => onChange({ ...filter, sort: 'updatedAt:ASC' }),
    },
  ]

  const sortDESCActionList = [
    {
      content: 'Price',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'price:DESC' }),
    },

    {
      content: 'Title',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'title:DESC' }),
    },

    {
      content: 'UpdatedAt',
      value: 'desc',
      onAction: () => onChange({ ...filter, sort: 'updatedAt:DESC' }),
    },
  ]

  return (
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
        <ActionList actionRole="menuitem" items={sortASCActionList} />
      </Popover.Pane>

      <Popover.Pane>
        <Popover.Section>
          <p>Sort by Z-A, 9-0</p>
        </Popover.Section>
      </Popover.Pane>
      <Popover.Pane fixed>
        <ActionList actionRole="menuitem" items={sortDESCActionList} />
      </Popover.Pane>
    </Popover>
  )
}

export default Sort
