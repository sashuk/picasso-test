import { PageTopBar } from '../PageTopBar'
import topBarMenuStory from '../../TopBarMenu/story'
import topBarItemStory from '../../TopBarItem/story'
import pageTopBarMenuStory from '../../PageTopBarMenu/story'
import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Components').createPage(
  'PageTopBar',
  `A PageTopBar component
  
  ${PicassoBook.createSourceLink(__filename)}
  `
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: PageTopBar, name: 'PageTopBar' })
  .addComponentDocs(topBarMenuStory.componentDocs)
  .addComponentDocs(topBarItemStory.componentDocs)
  .addComponentDocs(pageTopBarMenuStory.componentDocs)

page
  .createChapter()
  .addExample('PageTopBar/story/Default.example.tsx', {
    title: 'Default',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/Variants.example.tsx', {
    title: 'Variants',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/LeftContent.example.tsx', {
    title: 'Left content',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/RightContent.example.tsx', {
    title: 'Right content',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/CenterContent.example.tsx', {
    title: 'Center content',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/ExtraMenuContent.example.tsx', {
    title: 'Extra header menu content',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/Link.example.tsx', {
    title: 'With link',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/WithoutTitle.example.tsx', {
    title: 'Without title',
    screenshotBreakpoints: true,
  })
  .addExample('PageTopBar/story/Logo.example.tsx', {
    title: 'With custom logo',
    screenshotBreakpoints: true,
  })

page.connect(topBarMenuStory.chapter)
