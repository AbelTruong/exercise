import { Button, Checkbox, DisplayText, Modal, Stack } from '@shopify/polaris'
import { MobileCancelMajor } from '@shopify/polaris-icons'
import React, { useEffect, useState } from 'react'

function IntroVideo(props) {
  const { actions, appSetting, faqs } = props

  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  const onClose = () => {
    setShow(false)

    let _appSetting = JSON.parse(JSON.stringify(appSetting))
    _appSetting.hide_intro_video = Date.now()
    _appSetting.hide_intro_video_not_show_again = checked
    actions.updateAppSetting(_appSetting)
  }

  useEffect(() => {
    let _show = appSetting.hide_intro_video
      ? appSetting.hide_intro_video_not_show_again
        ? false
        : Date.now() - appSetting.hide_intro_video >= 24 * 60 * 60 * 1000 // show again after 24h
      : true
    setShow(_show)
  }, [props])

  useEffect(() => {
    let el = document.querySelector('.Polaris-Modal-Header--titleHidden')
    if (el) {
      el.remove()
    }
  })

  if (!show) return null

  let url =
    faqs
      .find((item) => item.handle === 'how-it-work')
      ?.body_html?.match(/src="https:\/\/www\.loom\.com\/embed\/[^\s]+"/)?.[0]
      ?.replace(/src="/, '')
      ?.replace(/"/, '') || 'https://www.loom.com/embed/9685c06d93384d04a5db7dee5a36f11c'

  if (!url) return null

  return (
    <Modal open={true}>
      <Modal.Section>
        <Stack distribution="equalSpacing" alignment="center">
          <Stack.Item fill>
            <DisplayText size="small">Getting started</DisplayText>
          </Stack.Item>
          <Stack.Item>
            <Button plain icon={MobileCancelMajor} onClick={onClose}></Button>
          </Stack.Item>
        </Stack>
      </Modal.Section>
      <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
        <iframe
          src={url}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen={true}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        ></iframe>
      </div>
      <Modal.Section>
        <Stack distribution="equalSpacing" alignment="center">
          <Checkbox
            label="Not show again"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Button onClick={onClose}>Close</Button>
        </Stack>
      </Modal.Section>
    </Modal>
  )
}

export default IntroVideo
