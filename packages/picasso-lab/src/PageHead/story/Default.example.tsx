import React from 'react'
import { Tabs, Button, Link } from '@toptal/picasso'
import { PageHead, Breadcrumbs } from '@toptal/picasso-lab'

const DefaultExample = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <PageHead>
      <Breadcrumbs>
        <Breadcrumbs.Item
          as={Link}
          href='https://en.wikipedia.org/wiki/United_States'
        >
          USA
        </Breadcrumbs.Item>
        <Breadcrumbs.Item
          as={Link}
          href='https://en.wikipedia.org/wiki/Software'
        >
          Software
        </Breadcrumbs.Item>
        <Breadcrumbs.Item as={Link} href='https://toptal.com'>
          Toptal
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <PageHead.Main>
        <PageHead.Title>Heading Large</PageHead.Title>
        <PageHead.Actions>
          <Button size='small' variant='secondary'>
            Button
          </Button>
          <Button size='small' variant='secondary'>
            Button
          </Button>
          <Button size='small' variant='secondary'>
            Button
          </Button>
        </PageHead.Actions>
      </PageHead.Main>
      <PageHead.Tabs>
        <Tabs value={value} onChange={handleChange}>
          <Tabs.Tab label='Label' />
          <Tabs.Tab label='Label' />
          <Tabs.Tab label='Label' />
        </Tabs>
      </PageHead.Tabs>
    </PageHead>
  )
}

export default DefaultExample