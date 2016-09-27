import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);
chai.use(chaiEnzyme());

// Taken from https://gist.github.com/scmx/d98cc058a7c3dfef7890

// Since react will console.error propType warnings, that which we'd rather have
// as errors, we use sinon.js to stub it into throwing these warning as errors
// instead.
before(() => {
  sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
});
