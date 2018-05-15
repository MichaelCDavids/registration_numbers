document.addEventListener('DOMContentLoaded',function(){
  var input = document.querySelector('.registration-number-field');
  var addBtn = document.querySelector('.add-button');
  var output = document.querySelector('.registration_list');
  var filterBtn = document.querySelector('.dropbtn');

  var storedRegistrationNumbers = localStorage.getItem('registrations') ? JSON.parse(localStorage.getItem('registrations') ): {};

  var regObj = RegistrationFactoryFunction(storedRegistrationNumbers);

  function enterReg(enteredRegNumber){
    var newListItem = document.createElement('li');
    newListItem.textContent = enteredRegNumber;
    output.appendChild(newListItem);
    var list = document.getElementById("my-list");
    list.insertBefore(newListItem, list.childNodes[0]);
  }

  addBtn.addEventListener('click',function(){
    var enteredRegNumber = input.value;
    regObj.addReg(enteredRegNumber);
    enterReg(enteredRegNumber);
    localStorage.setItem('registrations', JSON.stringify(regObj.theMap()));
    input.value = "";
  });

  window.addEventListener('load',function(){
    var listForNow = regObj.lister();
    console.log(listForNow);
    for(var i = 0;i<listForNow.length;i++){
      enterReg(listForNow[i]);
    }

  });

  // filterBtn.addEventListener('click',function(){
  //
  // });
});
