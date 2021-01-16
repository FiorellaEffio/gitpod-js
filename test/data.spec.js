describe('data', () => {

  it('should be a function', () => {
    assert.isFunction(window.testError);
    
  });

  const currentValue = window.testError('test');

  it('should be false', () => {
    assert.equal(currentValue, false);
  });

});