import { PageAutocomplete } from '../PageAutocomplete'
import PicassoBook from '~/.storybook/components/PicassoBook'

const componentDocs = PicassoBook.createComponentDocs(
  PageAutocomplete,
  'Page.Autocomplete'
)

const chapter = PicassoBook.connectToPage(page =>
  page
    .createChapter(
      'Page.Autocomplete',
      'Autocomplete to be used in Page.TopBar'
    )
    .addExample(
      'PageAutocomplete/story/Default.example.tsx',
      'Page.Autocomplete Dark',
      'base/Page'
    )
    .addExample(
      'PageAutocomplete/story/Light.example.tsx',
      'Page.Autocomplete Light',
      'base/Page'
    )
)

export default {
  componentDocs,
  chapter,
}