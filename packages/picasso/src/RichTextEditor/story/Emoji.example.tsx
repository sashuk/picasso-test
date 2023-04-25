import React, { useState } from 'react'
import type { RichTextEditorChangeHandler } from '@toptal/picasso'
import { RichTextEditor, Container } from '@toptal/picasso'

import type { CustomEmojiGroup } from '../types'

const customEmojis = [
  {
    id: 'talent-community',
    name: 'Talent Community',
    emojis: [
      {
        id: 'talent-community',
        name: 'Talent Community',
        keywords: ['Toptal', 'Talent Community', 'Community'],
        skins: [
          {
            src: 'https://emoji.slack-edge.com/T01HSMSV622/talent-community/3937b2735bdea8c3.png',
          },
        ],
      },
    ],
  },
] as CustomEmojiGroup[]

const Example = () => {
  const [value, setValue] = useState<string | undefined>()

  const handleChange: RichTextEditorChangeHandler = newValue =>
    setValue(newValue)

  return (
    <>
      <RichTextEditor
        id='allow-emojis-editor'
        onChange={handleChange}
        placeholder='Write some cool rich text with emojis!'
        plugins={['emoji']}
        customEmojis={customEmojis}
      />
      <Container
        padded='small'
        top='large'
        style={{
          fontFamily: "Consolas, 'Courier New', monospace",
          background: 'lightyellow',
        }}
      >
        {value}
      </Container>
    </>
  )
}

export default Example