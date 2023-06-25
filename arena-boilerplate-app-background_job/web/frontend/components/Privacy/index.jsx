import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, DisplayText, Stack } from '@shopify/polaris'
import formatDateTime from '../../helpers/formatDateTime'
import './styles.scss'

Privacy.propTypes = {
  onAction: PropTypes.func,
  acceptedAt: PropTypes.string,
}

Privacy.defaultProps = {
  onAction: () => null,
  acceptedAt: null,
}

function Privacy(props) {
  const { privacy, onAction, acceptedAt } = props

  const actionSection = (
    <Stack distribution="equalSpacing" alignment="leading">
      <div>{!!acceptedAt && <b>Accepted at: {formatDateTime(acceptedAt, 'LLL')}</b>}</div>
      {onAction && (
        <Button
          primary
          onClick={onAction}
          loading={props.appLoading.loading}
          disabled={props.appLoading.loading}
        >
          {acceptedAt ? 'Back to Home' : 'Accept privacy'}
        </Button>
      )}
    </Stack>
  )

  return (
    <Card sectioned>
      <div id="privacy">
        <Stack vertical alignmen="fill" spacing="extraLoose">
          {actionSection}

          <div dangerouslySetInnerHTML={{ __html: privacy }} />

          {actionSection}
        </Stack>
      </div>
    </Card>
  )
}

export default Privacy
