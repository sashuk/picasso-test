import React, { useCallback } from 'react'
import { mount } from '@cypress/react'
import { Container } from '@toptal/picasso'
import { Form } from '@toptal/picasso-forms'
import { TestingPicasso } from '@toptal/picasso/test-utils'

// the emulation of the api call
const responseWithDelay = async (response: any) =>
  new Promise(resolve => setTimeout(() => resolve(response), 2000))

const api = {
  successSubmit: (values: any) => {
    // do something with received values
    console.log('Success submit. Form values:', values)

    return responseWithDelay(undefined)
  },
  submitWithInlineError: (values: any) => {
    console.log('Submit with Inline Errors. Form values:', values)

    return responseWithDelay({
      inlineErrorName: 'Unknown first name'
    })
  },
  submitWithCustomNotificationError: (values: any) => {
    console.log('Submit with Custom Notification Errors. Form values:', values)

    return responseWithDelay('Custom Notification Message!')
  }
}

const FormExample = () => {
  const handleSuccessSubmit = useCallback(
    (values: any) => api.successSubmit(values),
    []
  )
  const handleSubmitWithInlineError = useCallback(
    (values: any) => api.submitWithInlineError(values),
    []
  )
  const handleSubmitWithCustomNotificationError = useCallback(
    (values: any) => api.submitWithCustomNotificationError(values),
    []
  )

  return (
    <TestingPicasso>
      <Container
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}
      >
        <Form
          onSubmit={handleSuccessSubmit}
          successSubmitMessage='Login successful!'
        >
          <Form.Input
            required
            name='successName'
            label='First name'
            placeholder='e.g. Bruce'
            width='full'
          />
          <Form.Input
            required
            name='successSurname'
            label='Last name'
            placeholder='e.g. Wayne'
            width='full'
          />

          <Container top='small'>
            <Form.SubmitButton
              variant='positive'
              data-testid='success-submit-button'
            >
              Login Success
            </Form.SubmitButton>
          </Container>
        </Form>

        <Form
          onSubmit={handleSubmitWithInlineError}
          failedSubmitMessage='Login failed! Please try another combination of first and last names.'
        >
          <Form.Input
            required
            name='inlineErrorName'
            label='First name'
            placeholder='e.g. Bruce'
            width='full'
          />
          <Form.Input
            required
            name='inlineErrorSurname'
            label='Last name'
            placeholder='e.g. Wayne'
            width='full'
          />

          <Container top='small'>
            <Form.SubmitButton
              variant='negative'
              data-testid='submit-with-inline-error-button'
            >
              Login with Inline Error
            </Form.SubmitButton>
          </Container>
        </Form>

        <Form onSubmit={handleSubmitWithCustomNotificationError}>
          <Form.Input
            required
            name='customNotificationErrorName'
            label='First name'
            placeholder='e.g. Bruce'
            width='full'
          />
          <Form.Input
            required
            name='customNotificationErrorSurname'
            label='Last name'
            placeholder='e.g. Wayne'
            width='full'
          />

          <Container top='small'>
            <Form.SubmitButton
              variant='negative'
              data-testid='submit-with-custom-notification-button'
            >
              Login with Custom Notification Error
            </Form.SubmitButton>
          </Container>
        </Form>
      </Container>
    </TestingPicasso>
  )
}

describe('Form', () => {
  it('submits the form with success result', () => {
    mount(<FormExample />)

    cy.get('#successName').type('name')
    cy.get('#successSurname').type('surname')

    cy.get('[data-testid=success-submit-button]').click()

    cy.get('[role=alert]')
      .should('be.visible')
      .and('contain', 'Login successful!')
  })

  it('submits the form with the inline error', () => {
    mount(<FormExample />)

    cy.get('#inlineErrorName').type('name')
    cy.get('#inlineErrorSurname').type('surname')

    cy.get('[data-testid=submit-with-inline-error-button]').click()

    cy.contains('Unknown first name').should('be.visible')
    cy.get('[role=alert]')
      .should('be.visible')
      .and(
        'contain',
        'Login failed! Please try another combination of first and last names.'
      )
  })

  it('submits the form and return a string from onSubmit, which should be shown as a notification', () => {
    mount(<FormExample />)

    cy.get('#customNotificationErrorName').type('name')
    cy.get('#customNotificationErrorSurname').type('surname')

    cy.get('[data-testid=submit-with-custom-notification-button]').click()

    cy.get('[role=alert]')
      .should('be.visible')
      .and('contain', 'Custom Notification Message!')
  })
})