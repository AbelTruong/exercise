import { MediaCard } from '@shopify/polaris'
import PropTypes from 'prop-types'
import React from 'react'

QuickStart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.any,
  primaryAction: PropTypes.object,
  popoverActions: PropTypes.array,
}

function QuickStart(props) {
  const { title, description, media, primaryAction, popoverActions } = props
  return (
    <MediaCard
      title={title}
      primaryAction={primaryAction}
      description={description}
      popoverActions={popoverActions}
    >
      <img
        alt=""
        width="100%"
        height="100%"
        loading="lazy"
        style={{
          maxHeight: 200,
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        src={media}
      />
    </MediaCard>
  )
}

export default QuickStart
