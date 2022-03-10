import React from 'react'
import { mount } from '@cypress/react'
import {
  FieldRequirement,
  FieldRequirements,
  FieldRequirementsProps
} from '@toptal/picasso'
import { TestingPicasso } from '@toptal/picasso/test-utils'

const requirements: FieldRequirement<string>[] = [
  {
    message: '1 number',
    validator: (value: string) => /\d/.test(value),
    testIds: {
      root: 'requirement-1',
      defaultIcon: 'requirement-1-default-icon',
      successIcon: 'requirement-1-success-icon',
      errorIcon: 'requirement-1-error-icon'
    }
  },
  {
    message: '1 uppercase character',
    validator: (value: string) => /[A-Z]/.test(value),
    testIds: {
      root: 'requirement-2',
      defaultIcon: 'requirement-2-default-icon',
      successIcon: 'requirement-2-success-icon',
      errorIcon: 'requirement-2-error-icon'
    }
  }
]

const FieldRequirementsExample = (
  props: Partial<FieldRequirementsProps<string>>
) => (
  <FieldRequirements<string>
    value='asd1'
    open
    requirements={requirements}
    testIds={{
      description: 'field-requirements-description',
      root: 'field-requirements-root',
      gridContainer: 'field-requirements-grid-container'
    }}
    {...props}
  />
)

describe('FieldRequirements', () => {
  it('renders requirements with bullets and checks for default', () => {
    mount(
      <TestingPicasso>
        <FieldRequirementsExample value='dene' />
      </TestingPicasso>
    )
    cy.get('body').happoScreenshot()
  })

  it('renders requirements with close icons and checks for error', () => {
    mount(
      <TestingPicasso>
        <FieldRequirementsExample error />
      </TestingPicasso>
    )
    cy.get('body').happoScreenshot()
  })
})