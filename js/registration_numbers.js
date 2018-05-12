document.addEventListener('DOMContentLoaded',function(){
  //Getting references to all elements
  var input = document.querySelector('.registration-number-field');
  var addBtn = document.querySelector('.add-button');
  var output = document.querySelector('.registration_list');

  addBtn.addEventListener('click',function(){
    var enteredRegNumber = input.value
    var newListItem = document.createElement('li');
    newListItem.textContent = enteredRegNumber;
    //var someContent = document.createTextNode(enteredRegNumber);
    output.appendChild(newListItem);
    input.value = "";
    //var currentItem = document.getElementById("main-list");
    //document.body.insertBefore(newListItem,currentItem);
  });
});
