import quillDecodeIndent from './quillDecodeIndent'

describe('quillDecodeIndent', () => {
  describe('when input is null or empty', () => {
    it('should return an empty string', () => {
      expect(quillDecodeIndent('')).toBe('')
    })
  })

  it('should correctly process unordered lists', () => {
    const input =
      '<ul><li>item 1</li><li class="ql-indent-1">item 1.1</li><li>item 2</li></ul>'
    const expectedOutput =
      '<ul><li>item 1<ul><li class="">item 1.1</li></ul></li><li>item 2</li></ul>'

    expect(quillDecodeIndent(input)).toBe(expectedOutput)
  })

  it('should correctly process ordered lists', () => {
    const input =
      '<ol><li>item 1</li><li class="ql-indent-1">item 1.1</li><li>item 2</li></ol>'
    const expectedOutput =
      '<ol><li>item 1<ol><li class="">item 1.1</li></ol></li><li>item 2</li></ol>'

    expect(quillDecodeIndent(input)).toBe(expectedOutput)
  })

  it('should correctly process non-list elements', () => {
    const input = '<p>Some text here</p>'
    const expectedOutput = '<p>Some text here</p>'

    const input2 =
      '<p>Some text here</p><ul><li>item 1</li><li class="ql-indent-1">item 1.1</li></ul><p>Some more text here</p><ol><li>item 2</li><li class="ql-indent-1">item 2.1</li></ol><p>Even more text here</p>'
    const expectedOutput2 =
      '<p>Some text here</p><ul><li>item 1<ul><li class="">item 1.1</li></ul></li></ul><p>Some more text here</p><ol><li>item 2<ol><li class="">item 2.1</li></ol></li></ol><p>Even more text here</p>'

    expect(quillDecodeIndent(input)).toBe(expectedOutput)
    expect(quillDecodeIndent(input2)).toBe(expectedOutput2)
  })

  it('should correctly process multiple nested lists', () => {
    const input =
      '<ul><li>item 1</li><li class="ql-indent-1">item 1.1</li><li class="ql-indent-2">item 1.1.1</li><li class="ql-indent-3">item 1.1.1.1</li></ul><ul><li>item 1</li><li class="ql-indent-1">item 1.1</li></ul>'
    const expectedOutput =
      '<ul><li>item 1<ul><li class="">item 1.1<ul><li class="">item 1.1.1<ul><li class="">item 1.1.1.1</li></ul></li></ul></li></ul></li></ul><ul><li>item 1<ul><li class="">item 1.1</li></ul></li></ul>'

    expect(quillDecodeIndent(input)).toBe(expectedOutput)
  })

  describe('when removing first level parent', () => {
    it('should not break', () => {
      const input =
        '<ul><li>s</li><li class="ql-indent-1">a</li></ul><p>b</p><ul><li class="ql-indent-1">c</li></ul>'
      const expectedOutput =
        '<ul><li>s<ul><li class="">a</li></ul></li></ul><p>b</p><ul><li class="">c</li></ul>'

      expect(quillDecodeIndent(input)).toBe(expectedOutput)
    })
  })
  describe('when removing parent level', () => {
    it('should not break', () => {
      const input =
        '<ul><li>aaa</li><li>a</li><li class="ql-indent-2">a</li><li> bbb</li></ul><p>aaaa</p><ul><li>asdfadsf</li><li class="ql-indent-1">sadfa</li></ul><p><br></p><p><br></p><p><br></p>'
      const expectedOutput =
        '<ul><li>aaa</li><li>a<ul><li class="">a</li></ul></li><li> bbb</li></ul><p>aaaa</p><ul><li>asdfadsf<ul><li class="">sadfa</li></ul></li></ul><p><br></p><p><br></p><p><br></p>'

      expect(quillDecodeIndent(input)).toBe(expectedOutput)
    })
  })
})