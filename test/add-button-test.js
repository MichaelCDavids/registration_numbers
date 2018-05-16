describe('The addRegNumber Function',function(){

  it('should return how many registration numbers have been captured',function(){
    var registrationNumbersObject = RegistrationFactoryFunction();
    registrationNumbersObject.addReg('CA 123 456');
    registrationNumbersObject.addReg('CY 213 546');
    registrationNumbersObject.addReg('CJ 264 128');
    registrationNumbersObject.addReg('CA 123 556');
    registrationNumbersObject.addReg('CJ 513 546');
    registrationNumbersObject.addReg('CY 253 158');
    assert.equal(registrationNumbersObject.lister(registrationNumbersObject.theMap()).length,6);
  });
});
