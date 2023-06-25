import PropTypes from 'prop-types'
import { ActionList, Badge, Button, Popover, Stack, Tooltip } from '@shopify/polaris'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MaximizeMinor, MinimizeMinor, HorizontalDotsMinor } from '@shopify/polaris-icons'
import Divider from '../Divider'

AppNavigation.propTypes = {
  // ...appProps
  primaryActions: PropTypes.array,
  secondaryActions: PropTypes.array,
  secondaryMoreActions: PropTypes.object,
}

AppNavigation.defaultProps = {
  primaryActions: [],
  secondaryActions: [],
  secondaryMoreActions: null,
}

function AppNavigation(props) {
  const { primaryActions, secondaryActions, secondaryMoreActions } = props

  const [openSecondaryMoreActions, setOpenSecondaryMoreActions] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const currentPathname = '/' + location.pathname.split('/')[1]

  return (
    <Stack vertical spacing="tight" alignment="fill">
      <Stack spacing="tight" distribution="equalSpacing">
        <Stack.Item fill>
          {primaryActions?.length > 0 && (
            <Stack spacing="tight">
              {primaryActions.map((item, index) => (
                <Button
                  key={index}
                  primary={item.primary}
                  destructive={item.destructive}
                  icon={item.icon ? item.icon : undefined}
                  onClick={() => (item.onAction ? item.onAction() : navigate(item.pathname))}
                  disabled={currentPathname === item.pathname}
                >
                  <Stack spacing="extraTight" alignment="center">
                    <div>{item.label}</div>
                    {Boolean(item.beta) && <Badge status="attention">beta</Badge>}
                    {Boolean(item.new) && <Badge status="success">new</Badge>}
                  </Stack>
                </Button>
              ))}
            </Stack>
          )}
        </Stack.Item>
        <Stack spacing="tight" distribution="trailing" wrap={false}>
          {secondaryMoreActions && (
            <Popover
              active={openSecondaryMoreActions}
              activator={
                <Button
                  onClick={() => setOpenSecondaryMoreActions(!openSecondaryMoreActions)}
                  disclosure={Boolean(secondaryMoreActions.label)}
                  icon={secondaryMoreActions.label ? undefined : HorizontalDotsMinor}
                >
                  {secondaryMoreActions.label}
                </Button>
              }
              onClose={() => setOpenSecondaryMoreActions(false)}
            >
              <ActionList
                actionRole="menuitem"
                items={secondaryMoreActions.items.map((item) => ({
                  content: item.label,
                  onAction: () => {
                    if (item.onAction) {
                      item.onAction()
                    } else {
                      navigate(item.pathname)
                    }

                    setOpenSecondaryMoreActions(false)
                  },
                  disabled: currentPathname === item.pathname,
                }))}
              />
            </Popover>
          )}
          {secondaryActions?.length > 0 && (
            <Stack spacing="tight" distribution="trailing">
              {secondaryActions.map((item, index) => (
                <Button
                  key={index}
                  primary={item.primary}
                  destructive={item.destructive}
                  icon={item.icon ? item.icon : undefined}
                  onClick={() => (item.onAction ? item.onAction() : navigate(item.pathname))}
                  disabled={location.pathname === item.pathname}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
          <Tooltip content={props.fullScreen.isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
            <Button
              icon={props.fullScreen.isFullScreen ? MinimizeMinor : MaximizeMinor}
              onClick={() => {
                props.fullScreen.isFullScreen
                  ? props.actions.setFullScreen({ ...props.fullScreen, openConfirmClose: true })
                  : props.actions.setFullScreen({
                      ...props.fullScreen,
                      isFullScreen: !props.fullScreen.isFullScreen,
                    })
              }}
            />
          </Tooltip>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  )
}

export default AppNavigation
