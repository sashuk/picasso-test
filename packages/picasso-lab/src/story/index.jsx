import { doc } from 'storybook-readme'
import { storiesOf } from '@storybook/react'

import README from '../../README.md'
import CHANGELOG from '../../CHANGELOG.md'

storiesOf('Picasso Lab', module)
  .addParameters({ happo: false })
  .add('README', doc(README))
  .add('CHANGELOG', doc(CHANGELOG))
