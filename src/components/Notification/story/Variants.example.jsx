import React from 'react'
import { Notification, Container, Typography } from '@toptal/picasso'

const NotificationVariantsExample = () => (
  <div>
    <Container bottom={1}>
      <Container bottom={1}>
        <Typography variant='h4'>Info</Typography>
      </Container>
      <Notification>
        The time zone in your profile is set to (UTC -08:00) America - Los
        Angeles, but we’ve detected a change to (UTC -03:00) America - Cordoba.
      </Notification>
    </Container>
    <Container bottom={1}>
      <Container bottom={1}>
        <Typography variant='h4'>Success</Typography>
      </Container>
      <Notification variant='success'>
        Job has been successfully created.
      </Notification>
    </Container>
    <Container bottom={1}>
      <Container bottom={1}>
        <Typography variant='h4'>Error</Typography>
      </Container>
      <Notification variant='error'>Required field.</Notification>
    </Container>
    <Container bottom={1}>
      <Container bottom={1}>
        <Typography variant='h4'>Warning</Typography>
      </Container>
      <Notification variant='warning'>
        Before we can schedule a start date for your new team member, we need
        you to sign the agreement that was sent to <strong>Luboš Volkov</strong>{' '}
        at <strong>lubos@mnmalt.com</strong> by RightSignature on Nov 11, 2018.
        You may resend the agreement or update contact information.
      </Notification>
    </Container>
  </div>
)

export default NotificationVariantsExample
