import { Stack } from '@shopify/polaris'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import CreateForm from './CreateForm'

function NewPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader {...props} title="Create new product" onBack={() => props.navigate(`products`)} />

      <CreateForm
        {...props}
        created={{}}
        onDiscard={() => props.navigate(`products`)}
        onSubmited={(data) => props.navigate(`products/${data.id}`)}
      />
    </Stack>
  )
}

export default NewPage
