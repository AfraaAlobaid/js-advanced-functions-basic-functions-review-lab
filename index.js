function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(thing = "*") {
  return function (adj = "special") {
    return `You are ${thing}${adj}${thing}!`;
  };
}

const Calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (n1, n2) {
    return n1 - n2;
  },
  multiply: function (n1, n2) {
    return n1 * n2;
  },
  divide: function(n1,n2){
      return n1/n2;
  }
};

function actionApplyer(int, arr){
    for(let i = 0; i<arr.length ; i++){
        int = arr[i](int);
    }
    return int;
}
