import PicassoBook from '~/.storybook/components/PicassoBook'
import timelineRowStory from '../../TimelineRow/story'
import Timeline from '../Timeline'

const page = PicassoBook.section('Components').createPage(
  'Timeline',
  `
  ${PicassoBook.createBaseDocsLink(
    'https://share.goabstract.com/e4c79c6c-4bcd-4411-97b7-09e821925e8e?mode=build&sha=e93949b90e728478fecb60bd7ba1efc06803315b'
  )}

  ${PicassoBook.createSourceLink(__filename)}
  `
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: Timeline, name: 'Timeline' })
  .addComponentDocs(timelineRowStory.componentDocs)

page
  .createChapter()
  .addExample('Timeline/story/Default.example.tsx', 'Default')
  .addExample('Timeline/story/Dates.example.tsx', 'Dates')
  .addExample('Timeline/story/TrimLastConnector.example.tsx', {
    title: 'Trim last connector',
    description:
      'You can trim last connector by passing `hasConnector={false}` to the `Timeline.Row` component. It can be useful in situation when you sort date points in the ascending order.',
  })
  .addExample('Timeline/story/CustomDateColumn.example.tsx', {
    title: 'Custom styling of the date column',
    description: 'You can specify custom styling for the date column',
  })
