import { Modal } from '@shopify/polaris'
import PropTypes from 'prop-types'

ConfirmModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
  onClose: PropTypes.func,
  secondaryActions: PropTypes.array,
}

ConfirmModal.defaultProps = {
  title: '',
  content: null,
  onClose: () => null,
  secondaryActions: [],
}

function ConfirmModal(props) {
  const { title, content, onClose, secondaryActions } = props

  return (
    <Modal open={true} onClose={onClose} title={title} secondaryActions={secondaryActions}>
      <Modal.Section>{content}</Modal.Section>
    </Modal>
  )
}

export default ConfirmModal
