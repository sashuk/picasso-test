import PicassoBook from '~/.storybook/components/PicassoBook'

import { Form } from '../Form'

import formFieldStory from '@components/FormField/story'
import formHintStory from '@components/FormHint/story'

const page = PicassoBook.createPage(
  'Form',
  `Helper components for building forms.`,
  'Forms'
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: Form, name: 'Form' })
  .addComponentDocs(formFieldStory.componentDocs)
  .addComponentDocs(formHintStory.componentDocs)

page.connect(formFieldStory.chapter)
page.connect(formHintStory.chapter)
