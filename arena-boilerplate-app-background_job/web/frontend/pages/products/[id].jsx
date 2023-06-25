import { Stack } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import ProductApi from '../../apis/product'
import AppHeader from '../../components/AppHeader'
import SkeletonPage from '../../components/SkeletonPage'
import CreateForm from './CreateForm'
import { useParams } from 'react-router-dom'

function DetailPage(props) {
  let { id } = useParams()

  const [product, setProduct] = useState(null)

  const getProduct = async (id) => {
    try {
      let res = await ProductApi.findById(id)
      if (!res.success) throw res.error

      setProduct(res.data.product)
    } catch (error) {
      actions.showNotify({ message: error.message, error: true })
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [])

  return (
    <Stack vertical alignment="fill">
      <AppHeader
        {...props}
        title={product?.title || 'loading..'}
        onBack={() => props.navigate(`/products`)}
      />

      {product ? (
        <CreateForm {...props} created={product} onDiscard={() => props.navigate(`products`)} />
      ) : (
        <SkeletonPage />
      )}
    </Stack>
  )
}

export default DetailPage
