import PropTypes from 'prop-types'
import Portrait_Placeholder from './Portrait_Placeholder.png'

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.any,
}

Avatar.defaultProps = {
  alt: '',
  src: '',
  size: '2rem',
}

function Avatar(props) {
  const { alt, src, size } = props

  return (
    <div>
      <img
        alt={alt}
        src={src || Portrait_Placeholder}
        style={{
          width: size,
          height: size,
          objectFit: 'cover',
          borderRadius: '50%',
          overflow: 'hidden',
          padding: 1,
          border: '1px solid #dcdcdc',
          cursor: 'pointer',
          backgroundColor: '#ffffff',
        }}
      />
    </div>
  )
}

export default Avatar
