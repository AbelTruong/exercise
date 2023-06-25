import React from 'react'
import './styles.scss'

function BlockedPage(props) {
  return (
    <div id="sub-frame-error" jstcache="0">
      <div
        className="icon icon-generic"
        jseval="updateIconClass(this.classList, iconClass)"
        jstcache="1"
      />
      <div id="sub-frame-error-details" jsselect="summary" jsvalues=".innerHTML:msg" jstcache="2">
        <strong jscontent="hostName" jstcache="23">
          Oops!{' '}
        </strong>
        refused to connect.
      </div>
    </div>
  )
}

export default BlockedPage
