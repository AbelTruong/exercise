import { useState } from 'react'
import PropTypes from 'prop-types'
import { ActionList, Button, Pagination, Popover, Stack } from '@shopify/polaris'
import { useEffect } from 'react'

MyPagination.propTypes = {
  page: PropTypes.number,
  limit: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func,
}

MyPagination.defaultProps = {
  page: 1,
  limit: 20,
  totalPages: 0,
  onChange: () => null,
}

function MyPagination(props) {
  const { totalPages, onChange, filters } = props

  const [page, setPage] = useState(props.page)
  const [limit, setLimit] = useState(props.limit)
  const [limitExpanded, setLimitExpanded] = useState(false)

  useEffect(() => {
    if (page !== props.page || limit !== props.limit) {
      onChange({ page, limit })
    }
  }, [page, limit])

  return (
    <Stack distribution="center">
      <Stack.Item>
        <Pagination
          label={`${page} of ${totalPages}`}
          hasPrevious={page > 1}
          onPrevious={() => setPage(page - 1)}
          hasNext={page < totalPages}
          onNext={() => setPage(page + 1)}
        />
      </Stack.Item>
      <Stack.Item>
        <Popover
          active={limitExpanded}
          activator={
            <Button
              disclosure={limitExpanded ? 'up' : 'down'}
              onClick={() => setLimitExpanded(!limitExpanded)}
            >
              {limit}
            </Button>
          }
          onClose={() => setLimitExpanded(false)}
        >
          <ActionList
            actionRole="menuitem"
            items={[10, 20, 50, 100].map((item) => ({
              content: item,
              onAction: () => {
                setLimit(item)
                setPage(1)
                setLimitExpanded(false)
              },
            }))}
          />
        </Popover>
      </Stack.Item>
    </Stack>
  )
}

export default MyPagination
