import React, { useState } from 'react'
import { Accordion, Button, Container } from '@toptal/picasso'

const AccordionControlledExample = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <Button onClick={() => setExpanded(!expanded)}>Expand/Collapse</Button>

      <div>
        <Accordion
          content={<DetailsDogDefinitionPanel />}
          expanded={expanded}
        />
      </div>
    </div>
  )
}

const DetailsDogDefinitionPanel = () => (
  <Container top='large' bottom='large'>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </Container>
)

export default AccordionControlledExample
