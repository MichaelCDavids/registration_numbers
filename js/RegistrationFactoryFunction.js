function RegistrationFactoryFunction(storedRegistrationNumbers){

  var registrationsAdded = storedRegistrationNumbers || {};

  var newTownList = [];


  function addRegNumber(reg){
    if(reg !== ""){
      if (registrationsAdded[reg] === undefined){
          registrationsAdded[reg] = 0;
      }
    }
  }

  // function filterFunction(registrationsAddedList,location){
  //   for(var i = 0;i<registrationsAddedList.length;i++){
  //     if(registrationsAddedList)
  //   }
  // }

  function resetPage(){
    localStorage.clear();
    location.reload();
  }
  function registrationListMaker(){
    return Object.keys(registrationsAdded);
  }

  function getTheMap(){
    return registrationsAdded;
  }
  function getListForTown(town){
    return newTownList
  }

  return {


    addReg :addRegNumber,
    getFilteredList : getListForTown,
    // filter : filterFunction,
    lister : registrationListMaker,
    reset : resetPage,
    theMap: getTheMap


  }
  //
  //
  // function countAllFromTown(string,startString){
	// var newString = string.split(",");
  // 	var newerString = [];
  // 	for(var i = 0 ; i < newString.length ; i++){
  //     var loopString = newString[i].trim();
  //     if(loopString.startsWith(startString)){
  //       newerString.push(loopString);
  //     }
  //   }
  //   return newerString.length;
  // }
  //
  //
  // function allFromTown(string,startString){
  // 	var newString = string.split(",");
  //   	var newerString = [];
  //   	for(var i = 0 ; i < newString.length ; i++){
  //       var loopString = newString[i];
  //       if(loopString.startsWith(startString)){
  //       	newerString.push(loopString);
  //       }
  //     }return newerString;
  // }
  //
  // function firstPaarl(string){
  //
  // var newString = string.split(", ");
  //   for(var i = 0 ; i < newString.length ; i++){
  //     var loopString = newString[i];
  //     if(loopString.startsWith('CJ')){
  //       return loopString;
  //     }
  //   }
  //   return '';
  // }
}
