import Privacy from '../../components/Privacy'

function PrivacyPage(props) {
  return (
    <Privacy
      {...props}
      acceptedAt={props.storeSetting.acceptedAt}
      onAction={() => props.navigate('')}
    />
  )
}

export default PrivacyPage
