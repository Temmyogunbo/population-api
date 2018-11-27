import { findTotalResidents } from '../../src/lib/util';

describe('UTILS', () => {
  it('should find total residents', () => {
    expect(findTotalResidents(12, 12)).to.equal(24);
  });
});
