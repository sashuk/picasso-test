import React from 'react'
import { Tooltip, Container } from '@toptal/picasso'

const longContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const Example = () => (
  <Container
    flex
    justifyContent='space-between'
    padded='large'
    style={{ height: '240px', width: '1000px', padding: '2rem 10rem' }}
  >
    <Tooltip content={longContent} followCursor placement='right'>
      <Container>{longContent}</Container>
    </Tooltip>
  </Container>
)

export default Example