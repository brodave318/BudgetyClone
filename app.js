/* TO-DO LIST ------------------------------------------
  1. Add event handler >>>>>>>>>>>>>>> CONTROLLER MODULE
  2. Get inout values >>>>>>>>>>>>>>>>>>>>>>>> UI MODULE
  3. Add the new item to our data structure >> UI MODULE
  4. Add the new item to the UI >>>>>>>>>>>> DATA MODULE
  5. Calculate budget >>>>>>>>>>>>>>>>>>>>>> DATA MODULE
  6. Update the UI >>>>>>>>>>>>>>>>>>>>>>>>>>> UI MODULE 
  ----------------------------------------------------*/

var budgetController = (function() {
  
  var x = 23;
  
  var add = function(a) {
    return x + a;
  }
  
  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();

var UIController = (function() {
  
})();

var controller = (function(budgetCtrl, UICtrl){
  
  var z = budgetCtrl.publicTest(6);
  
  return {
    anotherPublic: function() {
      console.log(z);
  }
  }
})(budgetController, UIController);