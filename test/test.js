console.log = function() {};
const rewire = require('rewire');
const expect = require('chai').expect;

describe('', function() {
  it('', function() {
    const appModule = rewire('../app.js');
    const logged = [];
    appModule.__set__('console', {
      log: function(...args) {
        logged.push(...args);
      }
    });
    let logger;
    try {
      logger = appModule.__get__('logRequest');
    } catch(e) {
      expect(logger, 'Did you create a logRequest function?').to.not.be.undefined;
    }
    logger('GET');
    expect(logged[0], 'Did you use logRequest to log the verb and "Request Received"? Check the exact formatting.').to.equal('GET Request Received');

  });
});
