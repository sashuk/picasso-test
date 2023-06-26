import React, { forwardRef } from 'react'
import type { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import cx from 'classnames'
import {
  Bold16,
  Italic16,
  Link16,
  ListOrdered16,
  ListUnordered16,
  Container,
  Select,
} from '@toptal/picasso'

import styles from './styles'
import TextEditorButton from '../RichTextEditorButton'
import type {
  ButtonHandlerType,
  SelectOnChangeHandler,
  FormatType,
} from './types'
import type { CustomEmojiGroup, EditorPlugin } from '../QuillEditor'
import { RichtTextEditorEmojiPicker } from '../RichTextEditorEmojiPicker/RichTextEditorEmojiPicker'

type Props = {
  disabled: boolean
  id: string
  format: FormatType
  testIds?: {
    headerSelect?: string
    boldButton?: string
    italicButton?: string
    unorderedListButton?: string
    orderedListButton?: string
    linkButton?: string
    emojiButton?: string
  }
  onBoldClick: ButtonHandlerType
  onItalicClick: ButtonHandlerType
  onLinkClick: ButtonHandlerType
  onInsertEmoji: (emoji: string) => void
  onHeaderChange: SelectOnChangeHandler
  onUnorderedClick: ButtonHandlerType
  onOrderedClick: ButtonHandlerType
  plugins?: EditorPlugin[]
  customEmojis?: CustomEmojiGroup[]
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'RichTextEditorToolbar',
})

export const RichTextEditorToolbar = forwardRef<HTMLDivElement, Props>(
  function RichTextEditorToolbar(props: Props, ref) {
    const {
      disabled,
      id,
      format,
      onBoldClick,
      onItalicClick,
      onLinkClick,
      onInsertEmoji,
      onHeaderChange,
      onUnorderedClick,
      onOrderedClick,
      testIds,
      plugins,
      customEmojis,
    } = props

    const classes = useStyles(props)
    const isHeadingFormat = format.header === '3'

    const allowLinks = plugins?.includes('link')
    const allowEmojis = plugins?.includes('emoji')

    return (
      <Container id={`${id}toolbar`} ref={ref} className={classes.toolbar}>
        <Container
          className={cx(classes.group, {
            groupDisabled: disabled,
          })}
        >
          <Select
            onChange={onHeaderChange}
            value={format.header}
            options={[
              { value: '3', text: 'heading' },
              { value: '', text: 'normal' },
            ]}
            size='small'
            menuWidth='123px'
            className={classes.select}
            disabled={disabled}
            data-testid={testIds?.headerSelect}
          />
        </Container>
        <Container className={classes.group}>
          <TextEditorButton
            icon={<Bold16 />}
            onClick={onBoldClick}
            active={isHeadingFormat ? false : format.bold}
            disabled={isHeadingFormat || disabled}
            data-testid={testIds?.boldButton}
          />
          <TextEditorButton
            icon={<Italic16 />}
            onClick={onItalicClick}
            active={isHeadingFormat ? false : format.italic}
            disabled={isHeadingFormat || disabled}
            data-testid={testIds?.italicButton}
          />
        </Container>
        <Container className={classes.group}>
          <TextEditorButton
            icon={<ListUnordered16 />}
            onClick={onUnorderedClick}
            active={format.list === 'bullet'}
            disabled={disabled}
            data-testid={testIds?.unorderedListButton}
          />
          <TextEditorButton
            icon={<ListOrdered16 />}
            onClick={onOrderedClick}
            active={format.list === 'ordered'}
            disabled={disabled}
            data-testid={testIds?.orderedListButton}
          />
        </Container>
        {allowLinks && (
          <Container className={classes.group}>
            <TextEditorButton
              icon={<Link16 />}
              onClick={onLinkClick}
              active={!!format.link}
              disabled={disabled}
              data-testid={testIds?.linkButton}
            />
          </Container>
        )}
        {allowEmojis && (
          <RichtTextEditorEmojiPicker
            richEditorId={id}
            customEmojis={customEmojis}
            onInsertEmoji={onInsertEmoji}
          />
        )}
      </Container>
    )
  }
)

RichTextEditorToolbar.defaultProps = {
  disabled: false,
  format: {
    bold: false,
    italic: false,
    list: false,
    header: '',
    link: '',
  },
  onBoldClick: () => {},
  onItalicClick: () => {},
  onHeaderChange: () => {},
  onUnorderedClick: () => {},
  onOrderedClick: () => {},
}

RichTextEditorToolbar.displayName = 'RichTextEditorToolbar'

export default RichTextEditorToolbar