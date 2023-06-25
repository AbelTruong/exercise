import { Toast } from '@shopify/app-bridge-react'
import { Page } from '@shopify/polaris'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppBridgeProvider, PolarisProvider, QueryProvider } from './components'
import AppFullscreen from './components/AppFullscreen'
import BlockedPage from './components/BlockedPage'
import ConfirmModal from './components/ConfirmModal'
import LoadingPage from './components/LoadingPage'
import Privacy from './components/Privacy'
import SkeletonPage from './components/SkeletonPage'

function AppContainer(props) {
  const { actions, storeSetting, notify, appLoading } = props

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (['hahalolo.myshopify.com', 'electro-5-demo.myshopify.com'].includes(window.shopOrigin)) {
      console.log('appProps :>> ', props)
    }

    if (!isReady && props.storeSetting) {
      setIsReady(true)
    }
  }, [props])

  useEffect(() => {
    actions.getStoreSetting()
  }, [])

  const acceptPrivacy = async () => {
    try {
      await actions.updateStoreSetting({ acceptedAt: new Date().toISOString() })
    } catch (error) {
      actions.showNotify({ message: error.message, error: true })
    }
  }

  const toastMarkup = notify?.show && (
    <Toast
      error={notify.error}
      content={notify.message}
      onDismiss={() => {
        if (notify.onDismiss) {
          notify.onDismiss()
        }
        actions.hideNotify()
      }}
    />
  )

  const renderContent = () => {
    if (!isReady) return <SkeletonPage />

    if (storeSetting.status === 'LOCKED') return <BlockedPage />

    if (!storeSetting.acceptedAt || storeSetting.status === 'INSTALLED')
      return (
        <Page fullWidth>
          <Privacy {...props} onAction={acceptPrivacy} />
        </Page>
      )

    return <App {...props} />
  }

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <AppFullscreen isFullscreen={props.fullScreen.isFullScreen}>
              <Page fullWidth={props.fullScreen.isFullScreen}>{renderContent()}</Page>
            </AppFullscreen>

            {appLoading?.loading && <LoadingPage {...appLoading} />}

            {toastMarkup}

            {props.fullScreen.openConfirmClose && (
              <ConfirmModal
                title="Are you sure you want to exit fullscreen?"
                content="Confirm to leave the fullscreen."
                onClose={() =>
                  props.actions.setFullScreen({ ...props.fullScreen, openConfirmClose: false })
                }
                secondaryActions={[
                  {
                    content: 'No, I want to stay',
                    onAction: () =>
                      props.actions.setFullScreen({ ...props.fullScreen, openConfirmClose: false }),
                  },
                  {
                    content: 'Yes, I am sure',
                    onAction: () =>
                      props.actions.setFullScreen({
                        ...props.fullScreen,
                        openConfirmClose: false,
                        isFullScreen: false,
                      }),
                    primary: true,
                  },
                ]}
              />
            )}
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  )
}

export default AppContainer
