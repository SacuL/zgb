import { buildTile } from './tile-utils'
import C2, { rotatedC2 } from './C2'

jest.unmock('./tile-utils')

describe('rotateTile', () => {
  it('should rotate correctly', () => {
    expect(buildTile(C2, 1).layout).toEqual(buildTile(rotatedC2).layout)
  })
})


