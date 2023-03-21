'use strict'

import { register, load } from '@shopify/theme-sections'

const APP_NAME = 'Arena Social Feed'

/**
 * Tiny Slider
 * https://github.com/ganlanyuan/tiny-slider
 * v2.9.3
 */
// -------------------------------------------------
// START TINY-SLIDER

if (!window.tns) {
  let tnsScripts = document.createElement('script')
  tnsScripts.type = 'text/javascript'
  tnsScripts.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/min/tiny-slider.js'
  document.body.appendChild(tnsScripts)

  let tnsStyles = document.createElement('link')
  tnsStyles.rel = 'stylesheet'
  tnsStyles.type = 'text/css'
  tnsStyles.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.css'
  document.head.appendChild(tnsStyles)
}

// END TINY-SLIDER
// -------------------------------------------------

// -------------------------------------------------
// START HELPERS

/**
 *
 * @param {Number} value
 * @returns String
 */
const formatLongNumber = (value) => {
  // billion
  if (value > 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`
  }
  // million
  if (value > 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }
  // thousand
  if (value > 1000) {
    return `${(value / 1000).toFixed(1)}K`
  }

  return value
}

/**
 *
 * @param {Number} datetime
 * @param {String} type
 * @returns String
 */
const formatDateTime = (datetime, type) => {
  const newDate = new Date(datetime)
  const yyyy = newDate.getFullYear()
  const yyyyStr = `${yyyy}`
  const mm = newDate.getMonth() + 1
  const mmStr = `${mm < 10 ? `0` : ``}${mm}`
  const dd = newDate.getDate()
  const ddStr = `${dd < 10 ? `0` : ``}${dd}`

  switch (type) {
    case 'YYYY-MM-DD':
      // 2020-02-26
      return `${yyyyStr}-${mmStr}-${ddStr}`

    case 'YYYY/MM/DD':
      // 2020/02/26
      return `${yyyyStr}/${mmStr}/${ddStr}`

    case 'MM/DD/YYYY':
      // 02/26/2020
      return `${mmStr}/${ddStr}/${yyyyStr}`

    default:
      // 'YYYY/MM/DD'
      // 2020-02-26
      return `${yyyyStr}-${mmStr}-${ddStr}`
  }
}

/**
 *
 * @param {String} duration
 * @return String
 */
function formatDurationTime(duration) {
  let a = duration.match(/\d+/g)

  if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
    a = [0, a[0], 0]
  }

  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
    a = [a[0], 0, a[1]]
  }
  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
    a = [a[0], 0, 0]
  }

  duration = 0

  if (a.length == 3) {
    duration = duration + parseInt(a[0]) * 3600
    duration = duration + parseInt(a[1]) * 60
    duration = duration + parseInt(a[2])
  }

  if (a.length == 2) {
    duration = duration + parseInt(a[0]) * 60
    duration = duration + parseInt(a[1])
  }

  if (a.length == 1) {
    duration = duration + parseInt(a[0])
  }

  const timestamp = duration * 1000

  const hh = Math.floor(timestamp / (60 * 60 * 1000))
  const mm = Math.floor((timestamp - hh * 60 * 60 * 1000) / (60 * 1000))
  const ss = Math.floor((timestamp - (hh * 60 * 60 * 1000 + mm * 60 * 1000)) / 1000)

  const hhStr = hh < 10 ? `0${hh}` : `${hh}`
  const mmStr = mm < 10 ? `0${mm}` : `${mm}`
  const ssStr = ss < 10 ? `0${ss}` : `${ss}`

  if (hh > 0) {
    return `${hhStr}:${mmStr}:${ssStr}`
  } else {
    return `${mmStr}:${ssStr}`
  }
}

// END HELPERS
// -------------------------------------------------

// -------------------------------------------------
// ICONS

const youtubeIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 -77 512.00213 512"
  >
    <g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
        fill="#ffffff"
        data-original="#ff0000"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
        fill="#ff0000"
        data-original="#ffffff"
      />
    </g>
  </svg>
`

const youtubePlayIcon = `
  <svg
    height="512pt"
    viewBox="0 -77 512.00213 512"
    width="512pt"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
      fill="#f00"
    />
    <path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" />
  </svg>
`

const pagiBtnPreviousIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 492 492"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            fill="#111111"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const pagiBtnNextIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 492.004 492.004"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
            fill="#111111"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const pagiBtnDownIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 491.996 491.996"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224    C491.996,136.902,489.204,130.046,484.132,124.986z"
            fill="#111111"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const pagiBtnUpIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 492.002 492.002"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844    L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124    c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064    c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132    C494.624,356.041,494.624,338.965,484.136,328.473z"
            fill="#111111"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const closeIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 329.26933 329"
  >
    <g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
        fill="#ffffff"
        data-original="#000000"
      />
    </g>
  </svg>
`

const dislikeIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 512 512"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M117.333,10.667h-64C23.936,10.667,0,34.603,0,64v170.667C0,264.064,23.936,288,53.333,288h96V21.461    C140.395,14.72,129.344,10.667,117.333,10.667z"
            fill="#888888"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M512,208c0-18.496-10.581-34.731-26.347-42.667c3.285-6.549,5.013-13.803,5.013-21.333    c0-18.517-10.603-34.752-26.368-42.688c4.885-9.728,6.315-20.928,3.861-32.043C463.381,47.659,443.051,32,419.819,32H224    c-13.995,0-35.968,4.416-53.333,12.608v228.651l2.56,1.301l61.44,133.12V480c0,3.243,1.472,6.315,3.989,8.341    c0.683,0.512,16.512,12.992,38.677,12.992c24.683,0,64-39.061,64-85.333c0-29.184-10.453-65.515-16.981-85.333h131.776    c28.715,0,53.141-21.248,55.637-48.363c1.387-15.211-3.691-29.824-13.653-40.725C506.923,232.768,512,220.821,512,208z"
            fill="#888888"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const likeIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 0 512 512"
  >
    <g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64    c12.011,0,23.061-4.053,32-10.795V224H53.333z"
            fill="#888888"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725    c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333    c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651    C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043    c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"
            fill="#888888"
            data-original="#000000"
          />
        </g>
      </g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
      <g xmlns="http://www.w3.org/2000/svg"></g>
    </g>
  </svg>
`

const shareIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    x="0"
    y="0"
    viewBox="0 -22 512 511"
  >
    <g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0"
        fill="#888888"
        data-original="#000000"
      />
    </g>
  </svg>
`

// -------------------------------------------------

/**
 *
 * @param {DOM element} root
 * @param {Object} widget
 */
const renderBanner = (root, widget) => {
  let image =
    widget.youtube_channel.youtube_channel.imageCustom ||
    widget.youtube_channel.youtube_channel.image
  if (widget.setting.layout.header.show && image) {
    let bannerDiv = document.createElement('DIV')
    bannerDiv.className = 'ayfs-banner'
    bannerDiv.style.backgroundImage = `url('${image}')`
    root.appendChild(bannerDiv)
  }
}

/**
 *
 */
const renderDivider = () => {
  const dividerDiv = document.createElement('DIV')
  dividerDiv.className = 'divider'
  return dividerDiv
}

/**
 *
 * @param {Object} widget
 * @returns String
 */
const renderLogo = (widget) => {
  let _thumbnail =
    widget.youtube_channel.youtube_channel.thumbnailCustom ||
    widget.youtube_channel.youtube_channel.thumbnail

  return `
    <div class="ayfs-logo">
      <a href="${widget.youtube_channel.youtube_channel.url}" target="_blank">
        ${_thumbnail ? `<img alt="${APP_NAME}" src="${_thumbnail}"/>` : ''}
      </a>
    </div>
  `
}

/**
 *
 * @param {Object} widget
 * @returns String
 */
const renderSubscribeButton = (widget) => {
  return `
    <div class="ayfs-subscribe-button">
      <a href="${widget.youtube_channel.youtube_channel.url}?sub_confirmation=1" target="_blank">
        <div class="youtube-logo">
          ${youtubeIcon}
          <div>Youtube</div>
        </div>
      </a>
      ${
        widget.youtube_channel.youtube_channel.statistics.subscriberCount
          ? `<div class="subscribers-counter">
            ${formatLongNumber(widget.youtube_channel.youtube_channel.statistics.subscriberCount)}
          </div>`
          : ''
      }            
    </div>
  `
}

/**
 *
 * @param {DOM element} root
 * @param {Object} widget
 */
const renderHeader = (root, widget) => {
  let _title =
    widget.youtube_channel.youtube_channel.titleCustom ||
    widget.youtube_channel.youtube_channel.title
  let _description =
    widget.youtube_channel.youtube_channel.descriptionCustom ||
    widget.youtube_channel.youtube_channel.description

  const layoutSelected = widget.setting.layout.header.layout.selected
  const layoutName = widget.setting.layout.header.layout.data[layoutSelected].toLowerCase()

  const htmlText = `
    <div class="ayfs-header ayfs-header-${layoutName}">
      ${widget.setting.layout.header.elements.logo.show ? renderLogo(widget) : ''}

      <div class="header-information">
        ${
          widget.setting.layout.header.elements.channel_name.show
            ? `<div class="channel-name">
                <a href="${widget.youtube_channel.youtube_channel.url}" target="_blank">
                  ${_title}
                </a>
              </div>`
            : ''
        }

        <div class="information-counter">
          ${
            widget.setting.layout.header.elements.subscribers_counter.show
              ? `<div>${formatLongNumber(
                  widget.youtube_channel.youtube_channel.statistics.subscriberCount
                )} Subscribers</div>`
              : ''
          }

          ${
            widget.setting.layout.header.elements.subscribers_counter.show &&
            widget.setting.layout.header.elements.videos_counter.show
              ? `<div class="divider"></div>`
              : ''
          }

          ${
            widget.setting.layout.header.elements.videos_counter.show
              ? `<div>${formatLongNumber(
                  widget.youtube_channel.youtube_channel.statistics.videoCount
                )} Videos</div>`
              : ''
          }

          ${
            (widget.setting.layout.header.elements.videos_counter.show &&
              widget.setting.layout.header.elements.views_counter.show) ||
            (widget.setting.layout.header.elements.subscribers_counter.show &&
              widget.setting.layout.header.elements.views_counter.show)
              ? `<div class="divider"></div>`
              : ''
          }

          ${
            widget.setting.layout.header.elements.views_counter.show
              ? `<div>${formatLongNumber(
                  widget.youtube_channel.youtube_channel.statistics.viewCount
                )} Views</div>`
              : ''
          }
        </div>

        ${
          widget.setting.layout.header.elements.channel_description.show
            ? `<div class="channel-description" id="yta-channel-description-${widget.id}"></div>`
            : ''
        }
      </div>

      ${
        widget.setting.layout.header.elements.subcribe_button.show
          ? renderSubscribeButton(widget)
          : ''
      }
    </div>
  `
  const header = new DOMParser().parseFromString(htmlText, 'text/html').body.firstChild
  root.appendChild(header)

  const channelDesEl = document.getElementById(`yta-channel-description-${widget.id}`)
  if (channelDesEl) {
    _description.split('\n').forEach((item) => {
      if (item) {
        let desChild = document.createElement('DIV')
        desChild.innerHTML = item
        channelDesEl.appendChild(desChild)
      }
    })
  }
}

/**
 *
 * @param {Object} widget
 * @param {Object} video
 */
const renderVideoCard = (widget, video) => {
  const root = document.getElementById(widget.id)
  const videoLayoutSelected = widget.setting.layout.video.layout.selected
  const variant = widget.setting.layout.video.layout.data[videoLayoutSelected].toLowerCase()

  // handle value
  let _thumbnailHeight = parseInt(widget.setting.layout.video?.thumbnailHeight) || 200
  if (_thumbnailHeight < 0) {
    _thumbnailHeight = 200
  }
  let _thumbnailWidth = parseInt(widget.setting.layout.video?.thumbnailWidth) || 300
  if (_thumbnailWidth < 0) {
    _thumbnailWidth = 300
  }

  // render video card
  let videoCardDiv = document.createElement('DIV')
  videoCardDiv.className = `ayfs-video-card ayfs-video-card-${variant} ayfs-video-card-${widget.setting.id}`

  // render video inline
  let inlineVideoEl = document.createElement('DIV')
  inlineVideoEl.innerHTML = `
    <iframe
      title=""
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${widget.setting.type.selected === 1 ? video : video.id}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  `
  inlineVideoEl.style.height = `${_thumbnailHeight}px`

  // render thumbnail
  let thumbnailDiv = document.createElement('DIV')
  thumbnailDiv.className = 'thumbnail'
  thumbnailDiv.style.backgroundImage =
    widget.setting.type.selected === 1
      ? `url('https://i.ytimg.com/vi/${video}/hqdefault.jpg')`
      : `url('https://i.ytimg.com/vi/${video.id}/hqdefault.jpg')`
  thumbnailDiv.style.height = `${_thumbnailHeight}px`
  if (widget.setting.id === 'settings-6') {
    thumbnailDiv.style.width = `${_thumbnailWidth}px`
  }

  if (widget.setting.layout.video.elements.play_icon.show) {
    let _playIcon = widget.setting.layout.video?.play_icon_custom?.value
      ? widget.setting.layout.video?.play_icon_custom?.value?.indexOf('.png') >= 0
        ? `<img alt="" src="${widget.setting.layout.video?.play_icon_custom?.value}" />`
        : widget.setting.layout.video?.play_icon_custom?.value?.indexOf('<svg') >= 0
        ? widget.setting.layout.video?.play_icon_custom?.value
        : youtubePlayIcon
      : youtubePlayIcon
    const playIconDiv = document.createElement('DIV')
    playIconDiv.className = 'play-icon'
    playIconDiv.innerHTML = _playIcon
    thumbnailDiv.appendChild(playIconDiv)
  }

  if (widget.setting.layout.video.mode.selected !== 1) {
    videoCardDiv.appendChild(thumbnailDiv)
  } else {
    videoCardDiv.appendChild(inlineVideoEl)
  }

  if (widget.setting.type.selected === 0) {
    const titleDiv = document.createElement('DIV')
    titleDiv.className = 'title'
    titleDiv.textContent = video.snippet.title

    const publishTimeDiv = document.createElement('DIV')
    publishTimeDiv.className = 'publish-time'
    publishTimeDiv.textContent = formatDateTime(video.snippet.publishedAt, 'YYYY/MM/DD')

    const descriptionDiv = document.createElement('DIV')
    descriptionDiv.className = 'description'
    descriptionDiv.textContent = video.snippet.description

    const viewsCounterDiv = document.createElement('DIV')
    viewsCounterDiv.textContent = `${formatLongNumber(video.statistics.viewCount)} Views`

    const likesCounterDiv = document.createElement('DIV')
    likesCounterDiv.textContent = `${formatLongNumber(video.statistics.likeCount)} Likes`

    const commentsCounterDiv = document.createElement('DIV')
    commentsCounterDiv.textContent = `${formatLongNumber(video.statistics.commentCount)} Comments`

    const statisticsDiv = document.createElement('DIV')
    statisticsDiv.className = 'statistics'
    if (widget.setting.layout.video.elements.views_counter.show) {
      statisticsDiv.appendChild(viewsCounterDiv)
    }
    if (
      widget.setting.layout.video.elements.views_counter.show &&
      widget.setting.layout.video.elements.likes_counter.show
    ) {
      statisticsDiv.appendChild(renderDivider())
    }
    if (widget.setting.layout.video.elements.likes_counter.show) {
      statisticsDiv.appendChild(likesCounterDiv)
    }
    if (
      (widget.setting.layout.video.elements.views_counter.show &&
        widget.setting.layout.video.elements.comments_counter.show) ||
      (widget.setting.layout.video.elements.likes_counter.show &&
        widget.setting.layout.video.elements.comments_counter.show)
    ) {
      statisticsDiv.appendChild(renderDivider())
    }
    if (widget.setting.layout.video.elements.comments_counter.show) {
      statisticsDiv.appendChild(commentsCounterDiv)
    }

    const videoCardInfoDiv = document.createElement('DIV')
    videoCardInfoDiv.className = 'video-infomation'
    if (widget.setting.layout.video.elements.title.show) {
      videoCardInfoDiv.appendChild(titleDiv)
    }
    if (widget.setting.layout.video.elements.date.show) {
      videoCardInfoDiv.appendChild(publishTimeDiv)
    }
    if (widget.setting.layout.video.elements.description.show) {
      videoCardInfoDiv.appendChild(descriptionDiv)
    }
    if (widget.setting.id === 'settings-6') {
      videoCardInfoDiv.style.flex = 1
    }
    videoCardInfoDiv.appendChild(statisticsDiv)

    if (widget.setting.layout.video.mode.selected !== 1) {
      videoCardDiv.appendChild(thumbnailDiv)
    } else {
      videoCardDiv.appendChild(inlineVideoEl)
    }

    if (
      widget.setting.layout.video.layout.selected !== 2 &&
      widget.setting.layout.video.mode.selected !== 1
    ) {
      videoCardDiv.appendChild(videoCardInfoDiv)
    } else {
      videoCardInfoDiv.style.visibility = 'hidden'
    }

    if (variant === 'cinema') {
      videoCardDiv.addEventListener('mouseover', () => {
        videoCardInfoDiv.style.opacity = 0.9
        videoCardInfoDiv.style.zIndex = 4
      })

      videoCardDiv.addEventListener('mouseout', () => {
        videoCardInfoDiv.style.zIndex = -1
      })

      videoCardDiv.addEventListener(
        'click',
        () => {
          videoCardInfoDiv.style.zIndex = -1
        },
        true
      )
    }

    // Add Video Object script tag
    const jsonldScript = document.createElement('script')
    jsonldScript.setAttribute('type', 'application/ld+json')
    const structuredData = {
      '@context': 'https://schema.org/',
      '@type': 'VideoObject',
      name: video.snippet.title,
      description: video.snippet.description,
      uploadDate: video.snippet.publishedAt,
      thumbnailURL: [video.snippet.thumbnails.high.url],
      duration: video.contentDetails.duration,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
    }
    jsonldScript.textContent = JSON.stringify(structuredData)
    document.head.appendChild(jsonldScript)
  }

  videoCardDiv.addEventListener('click', () => {
    switch (widget.setting.layout.video.mode.selected) {
      case 0:
        renderVideoPopup(root, widget, video)
        break

      case 1:
        break

      case 2:
        window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')
        break

      default:
        renderVideoPopup(root, widget, video)
        break
    }
  })

  return videoCardDiv
}

/**
 *
 * @param {DOM element} root
 * @param {Object} widget
 */
const renderVideosPlaylist = (root, widget) => {
  try {
    // handle value
    let _columns = parseInt(widget.setting.layout.columns_rows.columns) || 1
    if (_columns < 0) {
      _columns = 1
    }
    let _rows = parseInt(widget.setting.layout.columns_rows.rows) || 1
    if (_rows < 0) {
      _rows = 1
    }
    let _video_count = parseInt(widget.setting.layout.slider_settings.video_count) || 1
    if (_video_count < 0) {
      _video_count = 1
    }
    let _space_between_videos =
      parseInt(widget.setting.layout.columns_rows.space_between_videos) || 0
    if (_space_between_videos < 0) {
      _space_between_videos = 0
    }
    let _silde_switch_speed =
      parseInt(widget.setting.layout.slider_settings.silde_switch_speed) || 400
    if (_silde_switch_speed < 0) {
      _silde_switch_speed = 400
    }

    let videos_count = 0
    if (widget.setting.type.selected == 1) {
      // video ids only
      videos_count =
        widget.youtube_channel.youtube_videos.ids.length < _video_count
          ? widget.youtube_channel.youtube_videos.ids.length
          : _video_count
    } else {
      // videos
      videos_count =
        widget.youtube_channel.youtube_videos.items.length < _video_count
          ? widget.youtube_channel.youtube_videos.items.length
          : _video_count
    }

    let videos = []
    if (widget.setting.type.selected == 1) {
      // video ids only
      videos = widget.youtube_channel.youtube_videos.ids.slice(0, videos_count)
    } else {
      // videos
      videos = widget.youtube_channel.youtube_videos.items.slice(0, videos_count)
    }

    const videoListDiv = document.createElement('DIV')
    videoListDiv.className = 'yt-feed-slider'

    for (let i = 0; i < videos.length / _rows; i++) {
      const listColumnDiv = document.createElement('DIV')
      listColumnDiv.className = 'video-list-column'
      for (let j = 0; j < _rows; j++) {
        if (videos[i * _rows + j]) {
          const listItemDiv = document.createElement('DIV')
          listItemDiv.className = 'video-list-item'
          if (_rows > 1) {
            listItemDiv.style.paddingBottom = `${_space_between_videos}px`
          }
          listItemDiv.appendChild(renderVideoCard(widget, videos[i * _rows + j]))

          listColumnDiv.appendChild(listItemDiv)
        }
      }
      videoListDiv.appendChild(listColumnDiv)
    }

    const videosPlaylistDiv = document.createElement('DIV')
    videosPlaylistDiv.className = 'ayfs-videos-playlist'
    videosPlaylistDiv.appendChild(videoListDiv)

    root.appendChild(videosPlaylistDiv)

    // Add tiny-slider
    let _extra_small =
      parseInt(widget.setting.layout.slider_settings.mobile_responsive.extra_small.value) || 1
    if (_extra_small < 0) {
      _extra_small = 1
    }
    let _small = parseInt(widget.setting.layout.slider_settings.mobile_responsive.small.value) || 1
    if (_small < 0) {
      _small = 1
    }
    let _medium =
      parseInt(widget.setting.layout.slider_settings.mobile_responsive.medium.value) || 1
    if (_medium < 0) {
      _medium = 1
    }
    let _large = parseInt(widget.setting.layout.slider_settings.mobile_responsive.large.value) || 1
    if (_large < 0) {
      _large = 1
    }
    let _extra_large =
      parseInt(widget.setting.layout.slider_settings.mobile_responsive.extra_large.value) || 1
    if (_extra_large < 0) {
      _extra_large = 1
    }
    const slider = window.tns
      ? tns({
          container: `#${widget.id} .yt-feed-slider`,
          items: 1,
          edgePadding: widget.setting.layout.slider_settings.mobile_responsive_edge_padding.enabled
            ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
            : 0,
          slideBy: 'page',
          mouseDrag: true,
          swipeAngle: false,
          loop: true,
          autoplay:
            widget.setting.layout.slider_settings.slide_auto_play &&
            widget.setting.layout.video.mode.selected !== 1,
          speed: _silde_switch_speed,
          responsive:
            widget.setting.id !== 'settings-3' && widget.setting.id !== 'settings-6'
              ? {
                  375: {
                    items: _columns < _extra_small ? _columns : _extra_small,
                    edgePadding: widget.setting.layout.slider_settings
                      .mobile_responsive_edge_padding.enabled
                      ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
                      : 0,
                  },
                  576: {
                    items: _columns < _small ? _columns : _small,
                    edgePadding: widget.setting.layout.slider_settings
                      .mobile_responsive_edge_padding.enabled
                      ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
                      : 0,
                  },
                  768: {
                    items: _columns < _medium ? _columns : _medium,
                    edgePadding: widget.setting.layout.slider_settings
                      .mobile_responsive_edge_padding.enabled
                      ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
                      : 0,
                  },
                  992: {
                    items: _columns < _large ? _columns : _large,
                    edgePadding: widget.setting.layout.slider_settings
                      .mobile_responsive_edge_padding.enabled
                      ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
                      : 0,
                  },
                  1200: {
                    items: _columns < _extra_large ? _columns : _extra_large,
                    edgePadding: widget.setting.layout.slider_settings
                      .mobile_responsive_edge_padding.enabled
                      ? widget.setting.layout.slider_settings.mobile_responsive_edge_padding.value
                      : 0,
                  },
                }
              : {
                  375: {
                    items: _columns,
                  },
                  576: {
                    items: _columns,
                  },
                  768: {
                    items: _columns,
                  },
                  992: {
                    items: _columns,
                  },
                  1200: {
                    items: _columns,
                  },
                },
          gutter: _space_between_videos,
          axis: widget.setting.id === 'settings-6' ? 'vertical' : 'horizontal',
          autoplayButton: false,
          nav: false,
          autoplayButtonOutput: false,
          controls: false,
        })
      : null
    window.slider = slider

    // Add navigation arrow
    const pagiBtnPrevious = document.createElement('DIV')
    pagiBtnPrevious.className = `ayfs-pagi-btn ayfs-pagi-btn-${
      widget.setting.layout.slider_settings.direction.selected === 0 ? 'previous' : 'up'
    }`
    pagiBtnPrevious.innerHTML =
      widget.setting.layout.slider_settings.direction.selected === 0
        ? pagiBtnPreviousIcon
        : pagiBtnUpIcon

    const pagiBtnNext = document.createElement('DIV')
    pagiBtnNext.className = `ayfs-pagi-btn ayfs-pagi-btn-${
      widget.setting.layout.slider_settings.direction.selected === 0 ? 'next' : 'down'
    }`
    pagiBtnNext.innerHTML =
      widget.setting.layout.slider_settings.direction.selected === 0
        ? pagiBtnNextIcon
        : pagiBtnDownIcon

    if (widget.setting.layout.slider_settings.elements.show_navigation_arrows.show) {
      videosPlaylistDiv.appendChild(pagiBtnPrevious)
      videosPlaylistDiv.appendChild(pagiBtnNext)
      pagiBtnPrevious.addEventListener('click', () => slider.goTo('prev'))
      pagiBtnNext.addEventListener('click', () => slider.goTo('next'))
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 *
 * @param {String} widgetId
 */
const handleCloseVideoPopup = (widgetId) => {
  const root = document.getElementById(widgetId)
  root.removeChild(root.childNodes[root.childNodes.length - 1])

  let bodyEl = document.getElementsByTagName('BODY')[0]
  bodyEl.classList.remove('yta-popup-show')
}

/**
 *
 * @param {String} videoId
 */
const handleShowMoreDescription = (videoId) => {
  const spanAction = document.getElementById(`video-popup-show-more-${videoId}`)
  const channelDesc = document.getElementById(`video-popup-channel-description-${videoId}`)
  const text = spanAction.innerText

  if (text === 'SHOW MORE') {
    spanAction.textContent = 'SHOW LESS'
    channelDesc.className = 'channel-description-content channel-description-content-show-more'
  } else {
    spanAction.textContent = 'SHOW MORE'
    channelDesc.className = 'channel-description-content'
  }
}

window.__handleShowMoreDescription = handleShowMoreDescription

/**
 *
 * @param {Object} comment
 * @returns String
 */
const renderVideoComment = (comment) => {
  const htmlText = `
    <div class="yta-popup-comments-item">
      <div class="yta-popup-comments-user-avatar" onclick="window.open('${
        comment.snippet.authorChannelUrl
      }')">
        ${
          comment.snippet.authorProfileImageUrl
            ? `<img alt="${comment.snippet.authorDisplayName}" src="${comment.snippet.authorProfileImageUrl}" />`
            : null
        }
      </div>
      <div class="yta-popup-comments-details">
        <div class="yta-popup-comments-details-head">
          <div class="yta-popup-comments-user-name" onclick="window.open('${
            comment.snippet.authorChannelUrl
          }')">${comment.snippet.authorDisplayName}</div>
          <div class="yta-popup-comments-timestamp">${formatDateTime(
            comment.snippet.publishedAt
          )}</div>
        </div>
        <div class="yta-popup-comments-content">${comment.snippet.textDisplay}</div>
        <div class="yta-popup-comments-actions">
          <div class="yta-popup-comments-like">
            ${likeIcon}
            <div class="yta-popup-comments-like-count">${formatLongNumber(
              comment.snippet.likeCount
            )}</div>
          </div>
          <div class="yta-popup-comments-dislike">
            ${dislikeIcon}
            <div class="yta-popup-comments-dislike-count">0</div>
          </div>
        </div>
      </div>
    </div>
  `
  return htmlText
}

/**
 *
 * @param {DOM element} root
 * @param {Object} widget
 * @param {Object} video
 */
const renderVideoPopup = (root, widget, video) => {
  if (
    widget.setting.type.selected == 1 &&
    widget.youtube_channel.youtube_videos.items.length == 0
  ) {
    const htmlText = `
      <div class="ayfs-popup-wrapper">
        <div class="ayfs-popup-margin"></div>
        <div class="ayfs-popup-wrapper-body">
          <div class="ayfs-popup-header" id="${widget.id}-popup-header">
            ${closeIcon}
          </div>

          <div class="ayfs-popup-body">
            <div id="ayfs-popup-video-overlay" class="ayfs-popup-video-overlay">
              <iframe
                title=""
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/${video}?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="ayfs-popup-margin"></div>
      </div>
    `
    const popup = new DOMParser().parseFromString(htmlText, 'text/html').body.firstChild
    root.appendChild(popup)

    const popupHeaderEl = document.getElementById(`${widget.id}-popup-header`)
    popupHeaderEl.addEventListener('click', () => handleCloseVideoPopup(widget.id))

    let marginEls = document.getElementsByClassName('ayfs-popup-margin')
    Array.from(marginEls).forEach((el) =>
      el.addEventListener('click', () => handleCloseVideoPopup(widget.id))
    )
  } else {
    let title =
      widget.youtube_channel.youtube_channel.titleCustom ||
      widget.youtube_channel.youtube_channel.title
    let description =
      widget.youtube_channel.youtube_channel.descriptionCustom ||
      widget.youtube_channel.youtube_channel.description

    let bodyEl = document.getElementsByTagName('BODY')
    bodyEl[0].classList.add('yta-popup-show')

    const htmlText = `
      <div class="ayfs-popup-wrapper">
        <div class="ayfs-popup-margin"></div>
        <div class="ayfs-popup-wrapper-body">
          <div class="ayfs-popup-header" id="${widget.id}-popup-header">
            ${closeIcon}
          </div>

          <div class="ayfs-popup-body">
            <div id="ayfs-popup-video-overlay" class="ayfs-popup-video-overlay">
              <iframe
                title="${video.snippet.title}"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/${video.id}?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="video-info">
              <div class="video-info-header">
                ${
                  widget.setting.layout.popup.elements.title.show
                    ? `<div class="video-info-title">${video.snippet.title}</div>`
                    : ''
                }
                ${
                  widget.setting.layout.popup.elements.description.show
                    ? `<div class="video-info-description" id="video-info-description"></div>`
                    : ''
                }

                <div class="video-info-statistics">
                  <div class="view-count">
                    ${
                      widget.setting.layout.popup.elements.views_counter.show
                        ? `<div>${formatLongNumber(video.statistics.viewCount)} Views</div>`
                        : ''
                    }
                    <div class="divider"></div>
                    ${
                      widget.setting.layout.popup.elements.date.show
                        ? `<div class="video-publish">
                            Published at ${formatDateTime(video.snippet.publishedAt, 'MM/DD/YYYY')}
                          </div>`
                        : ''
                    }
                  </div>

                  <div class="more">
                    ${
                      widget.setting.layout.popup.elements.likes_counter.show
                        ? `<div class="likes-count">
                            ${likeIcon}
                            <div>
                              ${formatLongNumber(video.statistics.likeCount)}
                            </div>
                          </div>`
                        : ''
                    }
                    ${
                      widget.setting.layout.popup.elements.dislikes_counter.show
                        ? `<div class="dislikes-count">
                            ${dislikeIcon}
                            <div>
                              ${formatLongNumber(video.statistics.dislikeCount)}
                            </div>
                          </div>`
                        : ''
                    }
                    ${
                      widget.setting.layout.popup.elements.share_button.show
                        ? `<div class="share">
                            ${shareIcon}
                            <div class="content">SHARE</div>
                          </div>`
                        : ''
                    }
                  </div>
                </div>
              </div>

              ${
                widget.youtube_channel.youtube_channel.title ||
                widget.youtube_channel.youtube_channel.titleCustom
                  ? `<div class="channel-info">
                      ${
                        widget.setting.layout.popup.elements.channel_logo.show
                          ? renderLogo(widget)
                          : ''
                      }

                      <div class="channel-info-more">
                        ${
                          widget.setting.layout.popup.elements.channel_name.show &&
                          `<div class="channel-name">
                            <a href="${widget.youtube_channel.youtube_channel.url}" target="_blank">
                              ${title}
                            </a>
                          </div>`
                        }
                        ${
                          widget.setting.layout.popup.elements.description.show
                            ? `<div class="channel-description">
                                <div id="video-popup-channel-description-${
                                  video.id
                                }" class="channel-description-content"></div>
                                ${
                                  widget.setting.layout.popup.elements.description_more_button.show
                                    ? `<span id="video-popup-show-more-${video.id}" class="show-more" onclick="window.__handleShowMoreDescription('${video.id}')">
                                        SHOW MORE
                                      </span>`
                                    : ''
                                }
                            </div>`
                            : ''
                        }
                      </div>

                      ${
                        widget.setting.layout.popup.elements.subcribe_button.show
                          ? renderSubscribeButton(widget)
                          : ''
                      }
                    </div>`
                  : ''
              }
            </div>

            ${
              widget.app_plan &&
              widget.app_plan != 'basic' &&
              video.comments &&
              video.comments.length > 0
                ? `<div id="ayfs-popup-comments" class="ayfs-popup-comments">
                    <div class="ayfs-popup-comments-count">${video.statistics.commentCount} comments</div>
                  </div>`
                : null
            }
          </div>
        </div>
        <div class="ayfs-popup-margin"></div>
      </div>
    `
    const popup = new DOMParser().parseFromString(htmlText, 'text/html').body.firstChild
    root.appendChild(popup)

    const popupHeaderEl = document.getElementById(`${widget.id}-popup-header`)
    popupHeaderEl.addEventListener('click', () => handleCloseVideoPopup(widget.id))

    let marginEls = document.getElementsByClassName('ayfs-popup-margin')
    Array.from(marginEls).forEach((el) =>
      el.addEventListener('click', () => handleCloseVideoPopup(widget.id))
    )

    let videoDescriptionEl = document.getElementById('video-info-description')
    if (videoDescriptionEl) {
      video.snippet.description.split('\n').forEach((item) => {
        if (item) {
          let desChild = document.createElement('DIV')
          desChild.innerHTML = item
          videoDescriptionEl.appendChild(desChild)
        }
      })
    }

    let channelDesciptEl = document.getElementById(`video-popup-channel-description-${video.id}`)
    if (channelDesciptEl) {
      description.split('\n').forEach((item) => {
        if (item) {
          let desChild = document.createElement('DIV')
          desChild.innerHTML = item
          channelDesciptEl.appendChild(desChild)
        }
      })
    }

    let videoCommentsEl = document.getElementById(`ayfs-popup-comments`)
    if (videoCommentsEl) {
      video.comments.forEach((item) => {
        if (item) {
          let videoCommentEl = document.createElement('DIV')
          videoCommentEl.innerHTML = renderVideoComment(item)
          videoCommentsEl.appendChild(videoCommentEl)
        }
      })

      let videoCommentsShowMoreEl = document.createElement('DIV')
      videoCommentsShowMoreEl.innerHTML = `<div class="ayfs-popup-comments-show-more" onclick="window.open('https://www.youtube.com/watch?v=${
        video.id
      }')">Show more ${video.statistics.commentCount - video.comments.length} comments..</div>`
      videoCommentsEl.appendChild(videoCommentsShowMoreEl)
    }
  }

  if (widget.setting.layout.popup.z_index) {
    let popupEl = document.querySelector('.ayfs-popup-wrapper')
    if (popupEl) {
      popupEl.style.zIndex = widget.setting.layout.popup.z_index
    }
  }

  let bodyEl = document.getElementsByTagName('BODY')[0]
  bodyEl.classList.add('yta-popup-show')
}

/**
 *
 * @param {Object} widget
 */
const renderColorsCustom = (widget) => {
  const color = widget.setting.colors.items[widget.setting.colors.selected]

  // header
  const header = document.querySelector(`#${widget.id} .ayfs-header`)
  if (header) {
    header.style.background = color.items.header?.backgroundTransparent
      ? 'transparent'
      : color.items.header.background.value
  }
  const headerChannelName = document.querySelector(`#${widget.id} .ayfs-header .channel-name a`)
  if (headerChannelName) {
    headerChannelName.style.color = color.items.header.channel_name.value
  }
  const headerChannelDesc = document.querySelector(
    `#${widget.id} .ayfs-header .channel-description`
  )
  if (headerChannelDesc) {
    headerChannelDesc.style.color = color.items.header.channel_description.value
  }
  const headerCounters = document.querySelector(`#${widget.id} .ayfs-header .information-counter`)
  if (headerCounters) {
    headerCounters.style.color = color.items.header.header_counters.value
  }
  const headerCountersDivider = document.querySelectorAll(`#${widget.id} .ayfs-header .divider`)
  if (headerCountersDivider && headerCountersDivider.length > 0) {
    headerCountersDivider.forEach(
      (item) => (item.style.backgroundColor = color.items.header.header_counters.value)
    )
  }

  // video card
  const videoCardTitle = document.querySelectorAll(`#${widget.id} .ayfs-video-card .title`)
  if (videoCardTitle && videoCardTitle.length > 0) {
  }
  videoCardTitle.forEach((item) => (item.style.color = color.items.video.video_title.value))
  const videoCardDate = document.querySelectorAll(`#${widget.id} .ayfs-video-card .publish-time`)
  if (videoCardDate && videoCardDate.length > 0) {
    videoCardDate.forEach((item) => (item.style.color = color.items.video.video_date.value))
  }
  const videoCardDesc = document.querySelectorAll(`#${widget.id} .ayfs-video-card .description`)
  if (videoCardDesc && videoCardDesc.length > 0) {
    videoCardDesc.forEach((item) => (item.style.color = color.items.video.video_description.value))
  }
  const videoCardCounters = document.querySelectorAll(`#${widget.id} .ayfs-video-card .statistics`)
  if (videoCardCounters && videoCardCounters.length > 0) {
    videoCardCounters.forEach((item) => (item.style.color = color.items.video.video_counters.value))
  }
  const videoCardDuration = document.querySelectorAll(`#${widget.id} .ayfs-video-card .duration`)
  if (videoCardDuration && videoCardDuration.length > 0) {
    videoCardDuration.forEach((item) => {
      item.style.color = color.items.video.video_duration_color.value
      item.style.backgroundColor = color.items.video.video_duration_background.value
    })
  }
  const videoCardCountersDivider = document.querySelectorAll(
    `#${widget.id} .ayfs-video-card .divider`
  )
  if (videoCardCountersDivider && videoCardCountersDivider.length > 0) {
    videoCardCountersDivider.forEach(
      (item) => (item.style.backgroundColor = color.items.video.video_counters.value)
    )
  }

  // slider
  const slider = document.querySelector(`#${widget.id} .ayfs-videos-playlist`)
  if (slider) {
    slider.style.backgroundColor = color.items.slider.backgroundTransparent
      ? 'transparent'
      : color.items.slider.background.value
  }
}

/**
 *
 * @param {Object} widget
 */
const renderYoutubeFeed = (widget) => {
  const root = document.getElementById(widget.id)

  // handle value
  let _vertical_margin = parseInt(widget.setting.layout?.margin?.vertical_margin) || 0
  let _horizontal_margin = parseInt(widget.setting.layout?.margin?.horizontal_margin) || 0

  if (root) {
    root.className = 'ayfs'
    root.innerHTML = ''

    root.style.margin = `${_vertical_margin}px ${_horizontal_margin}px`

    let videos = []
    if (widget.setting.type.selected == 1) {
      // video ids only
      videos = widget.youtube_channel.youtube_videos.ids
    } else {
      // videos
      videos = widget.youtube_channel.youtube_videos.items
    }

    if (
      widget.setting.layout.header.show &&
      widget.setting.layout.header.elements.banner.show &&
      JSON.stringify(widget.youtube_channel.youtube_channel) !== '{}'
    ) {
      renderBanner(root, widget)
    }
    if (
      widget.setting.layout.header.show &&
      JSON.stringify(widget.youtube_channel.youtube_channel) !== '{}'
    ) {
      renderHeader(root, widget)
    }
    if (videos.length) {
      renderVideosPlaylist(root, widget, (video) => {
        renderVideoPopup(root, widget, video)
      })
    }

    renderColorsCustom(widget)
  }
}

const main = () => {
  let widgets = window?.theme?.yta_widgets || []

  if (widgets.length) {
    widgets.forEach((widget) => {
      if (
        widget &&
        JSON.stringify(widget) !== '{}' &&
        widget.enabled &&
        document.getElementById(widget.id)
      ) {
        renderYoutubeFeed(widget)
      }
    })
  } else if (window.slider) {
    slider.destroy()
  }
}
window.addEventListener('load', main)

console.log('abc')

// -------------------------------------------------
// PREVIEW THEME CUSTOMIZE

window.theme = window.theme || {}
if (window.theme) {
  window.theme.CustomType = function () {
    setTimeout(main, 100)
  }

  window.addEventListener('DOMContentLoaded', () => {
    console.log('window.addEventListener DOMContentLoaded')
    try {
      register('arena-youtube-feed', {
        onLoad: window.theme.CustomType,
      })

      load('arena-youtube-feed')
    } catch (error) {}
  })
}

// -------------------------------------------------

// -------------------------------------------------
// USING IN APP

window.__renderYoutubeFeed = renderYoutubeFeed

// -------------------------------------------------
