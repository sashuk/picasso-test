import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Typography,
  Grid,
  Checkbox,
  Select,
  TextField,
  Radio,
  Form
} from '@toptal/picasso'

const FormsExample = () => (
  <div>
    <Grid justify='center' alignItems='center'>
      <Grid.Item small={12} medium={8} large={6}>
        <Form>
          <Form.Field>
            <Select label='Select talent' options={OPTIONS} />
          </Form.Field>

          <Form.Field>
            <TextField fullWidth label='Job title' />
          </Form.Field>

          <Form.Field>
            <Grid direction='row'>
              <Grid.Item small={6}>
                <Form.Field>
                  <Select label='Current Country' options={OPTIONS} />
                </Form.Field>
              </Grid.Item>
              <Grid.Item small={6}>
                <Form.Field>
                  <TextField fullWidth label='City of Residence' />
                </Form.Field>
              </Grid.Item>
            </Grid>
          </Form.Field>

          <Form.Field>
            <TextField fullWidth label='Full description' />
          </Form.Field>

          <Form.Field>
            <Select label='Desired Commitment' options={OPTIONS} />
          </Form.Field>

          <Form.Field>
            <Container bottom='xsmall'>
              <Typography variant='small'>Estimated length:</Typography>
            </Container>
            <HorizontalRadioGroup name='variableName' value='radio1'>
              <Radio label='1-2 months' value='radio1' />
              <Radio label='2-4 months' value='radio2' />
              <Radio label='4-12 months' value='radio3' />
            </HorizontalRadioGroup>
          </Form.Field>

          <Form.Field hint='A Toptal Director of Engineering ewill work with you to understand you needs and fins you the right talent for you project.'>
            <Checkbox label='We match you to talent' />
          </Form.Field>
        </Form>
      </Grid.Item>
    </Grid>
  </div>
)

const OPTIONS = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
  { value: '4', text: 'Option 4' }
]

const HorizontalRadioGroup = styled(Radio.Group)`
  flex-direction: row;
`

export default FormsExample
