import assert from 'node:assert'
import { describe, it } from 'node:test'
import arrayToHtmlUl from './array-to-html-ul'

describe('arrayToHtmlUl', () => {
  it('returns a valid HTML string', () => {
    const expected = '<ul><li>Hello</li><li>World</li></ul>'

    const testList = ['Hello', 'World']

    assert.equal(
        arrayToHtmlUl(testList),
        expected
    ) 
  })

  it('returns an empty list for an empty arrayu', () => {
    const expected = '<ul></ul>'

    assert.equal(
        arrayToHtmlUl([]),
        expected
    )
  })
})