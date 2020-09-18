import { TypographyOverflow } from '../TypographyOverflow'
import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Lab').createPage(
  'TypographyOverflow',
  'Show tooltip when typography overflows'
)

page.createTabChapter('Props').addComponentDocs({
  component: TypographyOverflow,
  name: 'TypographyOverflow'
})

page
  .createChapter()
  .addExample('TypographyOverflow/story/Default.example.tsx', {
    title: 'Default',
    effect: async (testPage, makeScreenshot) => {
      /**
       * TODO: Revert to testPage.hover once the issue below is fixed
       * https://github.com/puppeteer/puppeteer/issues/4820
       */
      // When ellipsed text is hovered then tooltip should appear
      await testPage.click('[data-testid="ellipsed-text"]')
      await testPage.waitFor(600)
      await makeScreenshot()
    }
  })
  .addExample('TypographyOverflow/story/CheckboxLabel.example.tsx', {
    title: 'Checkbox label',
    effect: async (testPage, makeScreenshot) => {
      /**
       * TODO: Revert to testPage.hover once the issue below is fixed
       * https://github.com/puppeteer/puppeteer/issues/4820
       */
      // When ellipsed checkbox's label is hovered then tooltip should appear
      await testPage.click('[data-testid="ellipsed-text"]')
      await testPage.waitFor(600)
      await makeScreenshot()
    }
  })
  .addExample(
    'TypographyOverflow/story/GridWithControls.example.tsx',
    'Grid With Controls'
  ) // picasso-skip-visuals
