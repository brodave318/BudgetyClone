/* TO-DO LIST ------------------------------------------
  1. Add event handler >>>>>>>>>>>>>>> CONTROLLER MODULE
  2. Get inout values >>>>>>>>>>>>>>>>>>>>>>>> UI MODULE
  3. Add the new item to our data structure >> UI MODULE
  4. Add the new item to the UI >>>>>>>>>>>> DATA MODULE
  5. Calculate budget >>>>>>>>>>>>>>>>>>>>>> DATA MODULE
  6. Update the UI >>>>>>>>>>>>>>>>>>>>>>>>>>> UI MODULE 
  ----------------------------------------------------*/
// BUDGET CONTROLLER
var budgetController = (function() {
 
})();

// UI CONTROLLER
var UIController = (function() {
  
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
  var ctrlAddItem = function() {
    // 1. Get the field input data
    
    // 2. Add the item to the budget controller
    
    // 3. Add the item to the UI
    
    // 4. Calculate the budget
    
    // 5. Display the budget on the UI
    console.log('It works.');
  }
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  })
})(budgetController, UIController);