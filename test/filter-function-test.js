describe('The Filter Function',function(){

  it('should return how many registration numbers are for the Cape Town',function(){

    var regNumObj = RegistrationFactoryFunction();

    regNumObj.addReg('CA 123 456');
    regNumObj.addReg('CY 213 546');
    regNumObj.addReg('CJ 264 128');
    regNumObj.addReg('CA 123 556');
    regNumObj.addReg('CJ 513 546');
    regNumObj.addReg('CY 253 158');

      assert.equal(regNumObj.filter(regNumObj.lister(regNumObj.theMap()),'CA').length,2);
  });
  it('should return how many registration numbers are for Bellville',function(){

    var regNumObj = RegistrationFactoryFunction();

    regNumObj.addReg('CA 123 456');
    regNumObj.addReg('CY 213 546');
    regNumObj.addReg('CJ 264 128');
    regNumObj.addReg('CA 123 556');
    regNumObj.addReg('CJ 513 546');
    regNumObj.addReg('CY 253 158');

      assert.equal(regNumObj.filter(regNumObj.lister(regNumObj.theMap()),'CY').length,2);
  });
  it('should return how many registration numbers are for Paarl',function(){

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

      assert.equal(regNumObj.filter(regNumObj.lister(regNumObj.theMap()),'CJ').length,5);
  });
});
