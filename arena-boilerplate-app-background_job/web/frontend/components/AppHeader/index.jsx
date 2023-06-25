import { Badge, Button, DisplayText, Stack } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { ArrowLeftMinor } from '@shopify/polaris-icons'
import numberWithCommas from '../../helpers/numberWithCommas'

AppHeader.propTypes = {
  title: PropTypes.string,
  primaryActions: PropTypes.array,
  onBack: PropTypes.func,
}

AppHeader.defaultProps = {
  title: '',
  primaryActions: [],
  onBack: undefined,
}

const AppPlanStatus = {
  BASIC: '',
  PRO: 'info',
  PLUS: 'success',
  DYNAMIC: 'info',
}

function AppHeader(props) {
  const { storeSetting, title, primaryActions, onBack } = props

  return (
    <Stack>
      {onBack && (
        <Stack.Item>
          <Button icon={ArrowLeftMinor} onClick={onBack}></Button>
        </Stack.Item>
      )}
      <Stack.Item fill>
        <Stack vertical spacing="extraTight">
          <Stack spacing="tight">
            <DisplayText size="small">
              <b>{title}</b>
            </DisplayText>
            <Badge status={AppPlanStatus[storeSetting.appPlan]}>{storeSetting.appPlan} PLAN</Badge>
          </Stack>
          <div>
            Credit points: <b>{numberWithCommas(storeSetting.credits)}</b>
          </div>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack alignment="baseline" distribution="trailing">
          {primaryActions.map((item, index) => (
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
