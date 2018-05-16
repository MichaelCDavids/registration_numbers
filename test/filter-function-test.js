describe('The Filter Function',function(){

  it('should return how many registration numbers are for the selected town',function(){

    var regNumObj = RegistrationFactoryFunction();

    regNumObj.addReg('CA 123 456');
    regNumObj.addReg('CY 213 546');
    regNumObj.addReg('CJ 264 128');
    regNumObj.addReg('CA 123 556');
    regNumObj.addReg('CJ 513 546');
    regNumObj.addReg('CY 253 158');

      assert.equal(regNumObj.filter(regNumObj.lister(regNumObj.theMap()),'CA'),regNumObj.filter(regNumObj.lister(regNumObj.theMap()),'CA'));
  });
});
