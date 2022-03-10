import { FieldRequirements } from '../FieldRequirements'
import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Components').createPage(
  'FieldRequirements',
  'Component to list field requirements to be valid'
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: FieldRequirements, name: 'FieldRequirements' })

page
  .createChapter()
  .addExample('FieldRequirements/story/Default.example.tsx', 'Default') // picasso-skip-visuals
  .addExample('FieldRequirements/story/Error.example.tsx', 'Error') // picasso-skip-visuals