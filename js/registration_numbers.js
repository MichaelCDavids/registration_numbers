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

  function enterReg(enteredRegNumber){
    var newListItem = document.createElement('li');
    var list = document.getElementById("my-list");
    newListItem.textContent = enteredRegNumber;
    output.appendChild(newListItem);
    list.insertBefore(newListItem, list.childNodes[0]);
  }

  addBtn.addEventListener('click',function(){
    var enteredRegNumber = input.value;
    regObj.addReg(enteredRegNumber);
    enterReg(enteredRegNumber);
    localStorage.setItem('registrations', JSON.stringify(regObj.theMap()));
    input.value = "";
  });


  applyFilterBtn.addEventListener('click',function(){
    document.getElementById('my-list').innerHTML = "";
    var location = filterOption.value;
    var locations = ["CA","CJ","CY","CF","GP","CK",];
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
