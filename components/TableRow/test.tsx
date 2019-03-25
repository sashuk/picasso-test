import React from 'react'
import { render, cleanup, RenderResult } from 'react-testing-library'

import Picasso from '../Picasso'
import Table from '../Table'

const renderTableRow = (props: any = {}) => {
  return render(
    <Picasso loadFonts={false}>
      <Table>
        <Table.Body>
          <Table.Row {...props}>
            <Table.Cell>Row test</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Picasso>
  )
}

afterEach(cleanup)

describe('TableRow', () => {
  let api: RenderResult

  beforeEach(() => {
    api = renderTableRow()
  })

  test('default render', () => {
    const { container } = api

    expect(container).toMatchSnapshot()
  })
})
