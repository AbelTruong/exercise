import PropTypes from 'prop-types'
import { Modal, TextContainer } from '@shopify/polaris'

ConfirmDelete.propTypes = {
  onDiscard: PropTypes.func,
  onSubmit: PropTypes.func,
}

ConfirmDelete.defaultProps = {
  onDiscard: () => null,
  onSubmit: () => null,
}

function ConfirmDelete(props) {
  const { onDiscard, onSubmit } = props

  return (
    <Modal
      open={true}
      onClose={onDiscard}
      title="Are you sure want to delete?"
      secondaryActions={[
        {
          content: 'Discard',
          onAction: onDiscard,
        },
        {
          content: 'Delete now',
          onAction: onSubmit,
          destructive: true,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p>This cannot be undone.</p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  )
}

export default ConfirmDelete
