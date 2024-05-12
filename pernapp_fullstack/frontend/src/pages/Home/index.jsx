import { Stack, Card, Button } from '@shopify/polaris'

function HomePage(props) {
  return (
    <Stack vertical alignment="fill">
      <Card sectioned title="Getting Started with Create React App">
        <Stack vertical>
          <Stack.Item>
            <p>Set up a modern web app by running one command.</p>
          </Stack.Item>
          <Stack.Item>
            <Button>Getting started</Button>
          </Stack.Item>
        </Stack>
      </Card>
    </Stack>
  )
}

export default HomePage
