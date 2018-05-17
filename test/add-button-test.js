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
  it('should return the correct amount of registration numbers that have been captured if duplicates have been entered',function(){

    var regNumObj = RegistrationFactoryFunction();

    regNumObj.addReg('CA 123 456');
    regNumObj.addReg('CY 213 546');
    regNumObj.addReg('CJ 264 128');
    regNumObj.addReg('CA 123 556');
    regNumObj.addReg('CJ 513 546');
    regNumObj.addReg('CY 253 158');
    regNumObj.addReg('CJ 523 576');
    regNumObj.addReg('CJ 533 566');
    regNumObj.addReg('CJ 543 566');
    regNumObj.addReg('CA 123 456');
    regNumObj.addReg('CY 213 546');
    regNumObj.addReg('CJ 264 128');
    regNumObj.addReg('CA 123 556');
    regNumObj.addReg('CJ 513 546');
    regNumObj.addReg('CY 253 158');
    regNumObj.addReg('CJ 523 576');
    regNumObj.addReg('CJ 533 566');
    regNumObj.addReg('CJ 543 566');

      assert.equal(regNumObj.lister(regNumObj.theMap()).length,9);
  });
});
