document.addEventListener('DOMContentLoaded',function(){
  var input = document.querySelector('.registration-number-field');
  var addBtn = document.querySelector('.add-button');
  var output = document.querySelector('.registration_list');
  var filterOption = document.querySelector('#select-filter');
  var applyFilterBtn = document.querySelector('#apply-filter');

  var storedRegistrationNumbers = localStorage.getItem('registrations') ? JSON.parse(localStorage.getItem('registrations') ): {};
  var regObj = RegistrationFactoryFunction(storedRegistrationNumbers);

  window.addEventListener('load',function(){
    var listForNow = regObj.lister();
    for(var i = 0;i<listForNow.length;i++){
      enterReg(listForNow[i]);
    }
  });

  function validate(){
    var regNumEntered = document.getElementById('regNumber').value;
    var regNumEntered = regNumEntered.toUpperCase();
    var allowedCharacters = /^[\w ]+$/;
    if(regNumEntered.match(allowedCharacters)){
      return true;
    }else{
      alert("please enter a valid reg number");
      regNumber.focus();
      return false
    }
  }

  function enterReg(enteredRegNumber){
    var newListItem = document.createElement('li');
    var list = document.getElementById("my-list");
    newListItem.textContent = enteredRegNumber.toUpperCase();
    output.appendChild(newListItem);
    list.insertBefore(newListItem, list.childNodes[0]);
  }

  addBtn.addEventListener('click',function(){
    var enteredRegNumber = input.value;
    var isNotInMap = !(enteredRegNumber.toUpperCase() in regObj.theMap());
    if(isNotInMap){
      return
    }else{
      alert("Error : Trying to add duplicate!");
    }
    var startString = enteredRegNumber.substring(0,3);
    var places = ["CA ","CJ ","CY ","CF ","CAW","GP ","CL ","CK "];

    var isInList = false;
    for(var i = 0;i<places.length;i++){
      if(startString.toUpperCase() === 'CA '){
        isInList = true;
      }
      if(startString.toUpperCase() === 'CAW'){
        isInList = true;
      }
      if(startString.toUpperCase() === places[i]){
        isInList = true;
      }
    }
    if(isInList){
      if(validate() && isNotInMap){
        regObj.addReg(enteredRegNumber.toUpperCase());
        enterReg(enteredRegNumber.toUpperCase());
        localStorage.setItem('registrations', JSON.stringify(regObj.theMap()));
      }
    }else{
      alert("Error : invalid registration");
    }
    input.value = "";
  });


  applyFilterBtn.addEventListener('click',function(){
    document.getElementById('my-list').innerHTML = "";
    var location = filterOption.value;
    var locations = ["CA ","CJ","CY","CF","CAW","GP","CL","CK"];
    var allRegistrations = regObj.lister();

    var result = false;
    for(var i = 0;i<locations.length;i++){
      if(location === locations[i]){
        result = true;
      }
    }
    if(result){
      var filteredRegNumbers = regObj.filter(allRegistrations,location);
      for(var i = 0;i<filteredRegNumbers.length;i++){
        enterReg(filteredRegNumbers[i]);
      }
    }else{
      for(var i = 0;i<allRegistrations.length;i++){
        enterReg(allRegistrations[i]);
      }
    }
  });
});
