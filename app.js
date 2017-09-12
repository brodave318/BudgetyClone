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
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  
  return {
    getiInput: function() {
      return {
		type: document.querySelector(DOMstrings.inputType).value, // Will be iether inc or exp
		description: document.querySelector(DOMstrings.inputDescription).value,
		value: document.querySelector(DOMstrings.inputValue).value
      };
      
    },
    
    getDOMstrings: function() {
        return DOMstrings;
	}
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
  var DOM = UICtrl.getDOMstrings();
  
  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UIController.getiInput();
    console.log(input);
    // 2. Add the item to the budget controller
    
    // 3. Add the item to the UI
    
    // 4. Calculate the budget
    
    // 5. Display the budget on the UI
  }
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  })
})(budgetController, UIController);