import chai from 'chai';
import { generate } from '../javascript/array';

const should = chai.should();

describe('array', function() {
  describe('#generate()', function() {
    it('n should be a number', function() {
      should.throw(() => generate('a'), 'n should be a number');
    });
    it('n should > 0', function() {
      should.throw(() => generate(0), 'n should > 0');
    });
    it('should work', () => {
      should.equal(generate(1).toString(), [1].toString());
      should.equal(generate(2).toString(), [1, 2].toString());
    });
  });
});
