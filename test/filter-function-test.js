describe('The Filter Function',function(){

  it('should return how many registration numbers are for the selected town',function(){

    var registrationNumbersObject = RegistrationFactoryFunction();

    registrationNumbersObject.addReg('CA 123 456');
    registrationNumbersObject.addReg('CY 213 546');
    registrationNumbersObject.addReg('CJ 254 158');
    registrationNumbersObject.addReg('CA 123 456');
    registrationNumbersObject.addReg('CJ 213 546');
    registrationNumbersObject.addReg('CY 254 158');

    assert.equal(registrationNumbersObject.getList('CA'),2);
  });
});
