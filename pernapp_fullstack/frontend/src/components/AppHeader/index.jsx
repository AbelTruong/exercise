import { Button, DisplayText, Stack } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { ArrowLeftMinor } from '@shopify/polaris-icons'

AppHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  onBack: PropTypes.func,
}

AppHeader.defaultProps = {
  title: '',
  actions: [],
  onBack: undefined,
}

function AppHeader(props) {
  const { title, actions, onBack } = props

  return (
    <Stack>
      {onBack && (
        <Stack.Item>
          <Button icon={ArrowLeftMinor} onClick={onBack}></Button>
        </Stack.Item>
      )}
      <Stack.Item fill>
        {typeof title === 'string' ? (
          <DisplayText size="small">
            <b>{title}</b>
          </DisplayText>
        ) : (
          title
        )}
      </Stack.Item>
      <Stack.Item>
        <Stack alignment="baseline" distribution="trailing">
          {actions.map((item, index) => (
            <Stack.Item key={index}>
              <Button {...item}>{item.label}</Button>
            </Stack.Item>
          ))}
        </Stack>
      </Stack.Item>
    </Stack>
  )
}

export default AppHeader
