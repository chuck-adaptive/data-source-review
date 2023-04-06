import assert from 'node:assert'
import { describe, it } from 'node:test'
import { arrayToHtmlUl, nameAndUrlToMdLink } from './utils'

describe('nameAndUrlToMdLink', () => {
  it('returns a properly formatted markdown link (github syntax)', () => {
    const expected = '[Github](https://github.com)'

    assert.equal(
        nameAndUrlToMdLink('Github', 'https://github.com'),
        expected
    ) 
  })
})

describe('arrayToHtmlUl', () => {
  it('returns an HTML li entry for each array element string', () => {
    const expected = '<ul><li>Hello</li><li>World</li></ul>'

    const testList = ['Hello', 'World']

    assert.equal(
        arrayToHtmlUl(testList),
        expected
    ) 
  })

  it('returns an empty list for an empty array', () => {
    const expected = '<ul></ul>'

    assert.equal(
        arrayToHtmlUl([]),
        expected
    )
  })
})