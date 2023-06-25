import { Layout, Card, SkeletonBodyText } from '@shopify/polaris'

function SkeletonPage(props) {
  return (
    <Layout>
      <Layout.Section>
        <Card sectioned>
          <SkeletonBodyText />
        </Card>
        <Card sectioned title="">
          <SkeletonBodyText />
        </Card>
        <Card sectioned title="">
          <SkeletonBodyText />
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
        <Card title="">
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText lines={1} />
          </Card.Section>
        </Card>
        <Card title="" subdued>
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
          <Card.Section>
            <SkeletonBodyText lines={2} />
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  )
}

export default SkeletonPage
